import express from 'express';
import https from 'https';
const parseJson = express.json({ extended: false });
const parseUrl = express.urlencoded({ extended: false });

import PaytmChecksum from '../utils/checksum';
import * as PaytmConfig from '../utils/paytm';
import User from '../models/user';
import Mship from '../models/mship';
import Pay from '../models/payment';

let exp = {};

exp.pay =
    ([parseUrl, parseJson],
    async (req, res) => {
        // let data = req.body.type;
        // const mem = await Mship.findOne({ type: data });
        const orderId = 'HUNLU_' + new Date().getTime();
        const { id } = req.params;
        const newPay = new Pay({
            cost: id,
            type: '1',
            txnid: orderId,
            date: new Date().getDate(),
            user: {
                googleId: req.user.googleId || '',
                facebookId: req.user.facebookId || '',
                name: req.user.name || 'a',
            },
        });

        await newPay.save();
        const paytmParams = {};

        paytmParams.body = {
            requestType: 'Payment',
            mid: PaytmConfig.PaytmConfig.mid,
            websiteName: PaytmConfig.PaytmConfig.website,
            orderId: orderId,
            callbackUrl: 'http://localhost:2525/api/paytm/callback',
            txnAmount: {
                value: '200',
                currency: 'INR',
            },
            userInfo: {
                custId: 'arpunagar@gmail.com',
            },
        };
        PaytmChecksum.generateSignature(
            JSON.stringify(paytmParams.body),
            PaytmConfig.PaytmConfig.key
        ).then(function (checksum) {
            paytmParams.head = {
                signature: checksum,
            };

            let post_data = JSON.stringify(paytmParams);

            let options = {
                /* for Staging */
                hostname: 'securegw-stage.paytm.in',

                /* for Production */
                // hostname: 'securegw.paytm.in',

                port: 443,
                path: `/theia/api/v1/initiateTransaction?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length,
                },
            };
            let response = '';
            let post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    response += chunk;
                });

                post_res.on('end', function () {
                    response = JSON.parse(response);
                    console.log('txnToken:', response);

                    res.writeHead(200, {
                        'Content-Type': 'text/html',
                    });
                    res.write(`<html>
                                <head>
                                    <title>Show Payment Page</title>
                                </head>
                                <body>
                                    <center>
                                        <h1>Please do not refresh this page...</h1>
                                    </center>
                                    <form method="post" action="https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}" name="paytm">
                                        <table border="1">
                                            <tbody>
                                                <input type="hidden" name="mid" value="${PaytmConfig.PaytmConfig.mid}">
                                                    <input type="hidden" name="orderId" value="${orderId}">
                                                    <input type="hidden" name="txnToken" value="${response.body.txnToken}">
                                         </tbody>
                                      </table>
                                                    <script type="text/javascript"> document.paytm.submit(); </script>
                                   </form>
                                </body>
                             </html>`);
                    res.end();
                });
            });
            console.log(post_data);
            post_req.write(post_data);
            post_req.end();
        });
    });

exp.callback = async (req, res) => {
    try {
        const data = JSON.parse(JSON.stringify(req.body));

        const paytmChecksum = data.CHECKSUMHASH;

        let isVerifySignature = PaytmChecksum.verifySignature(
            data,
            PaytmConfig.PaytmConfig.key,
            paytmChecksum
        );
        if (isVerifySignature) {
            console.log('Checksum Matched');

            let paytmParams = {};

            paytmParams.body = {
                mid: PaytmConfig.PaytmConfig.mid,
                orderId: data.ORDERID,
            };

            PaytmChecksum.generateSignature(
                JSON.stringify(paytmParams.body),
                PaytmConfig.PaytmConfig.key
            ).then(async function (checksum) {
                paytmParams.head = {
                    signature: checksum,
                };

                let post_data = JSON.stringify(paytmParams);

                let options = {
                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    // hostname: 'securegw.paytm.in',

                    port: 443,
                    path: '/v3/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length,
                    },
                };

                // Set up the request
                let response = '';
                let post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', async function () {
                        console.log('Response: ', response);
                        let resp = JSON.parse(response);
                        if (
                            resp.body.resultInfo.resultStatus == 'TXN_SUCCESS'
                        ) {
                            const curr_user = await Pay.findOneAndUpdate(
                                {
                                    txnid: resp.body.orderId,
                                },
                                {
                                    $set: {
                                        success: true,
                                    },
                                }
                            );
                            if (curr_user.user.googleId)
                                await User.updateOne(
                                    {
                                        googleId: curr_user.user.googleId,
                                    },
                                    {
                                        $set: {
                                            membership: '1',
                                        },
                                    }
                                );
                            else
                                await User.updateOne(
                                    {
                                        facebookId: curr_user.user.facebookId,
                                    },
                                    {
                                        $set: {
                                            membership: '1',
                                        },
                                    }
                                );
                            res.redirect(
                                `http://localhost:3000/home?msg=success`
                            );
                        } else {
                            res.redirect(
                                `http://localhost:3000/home?msg=failed`
                            );
                        }

                        res.end();
                    });
                });

                // post the data

                post_req.write(post_data);
                post_req.end();
            });
        } else {
            console.log('Checksum Mismatched');
        }
    } catch (err) {
        console.log(err);
        return res.send({
            success: false,
            msg: false,
        });
    }
};

export default exp;
