# Hunlu

This is not a reference to Silicon Valley.

## TODOS

1. Fix Docker
2. Complete client stuff
3. Like, dislike and favourite routes.

## Overview

Hunlu is a paid Video on Demand (VOD) application.

## Built using:

1. Express with babel
2. MongoDB
3. ReactJS
4. Docker

## Features

1. OAuth using Google and Facebook([Sorry](https://www.forbes.com/sites/insertcoin/2019/01/18/facebook-is-terrible-not-because-its-evil-but-because-its-terrible/?sh=3b5004cb305a)).
2. Payment using the paytm Gateway for various types of memberships with different perks (including usable screens and accessible content).
3. Like, Dislike and make videos as your favourite. Recommendations based on favourite Genres.
4. [Fast Streams](https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-300-percent-faster/)

## How do I run this?

#### .env content API

```(javascript)
MONGOURI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
MID =
KEY =
WEBSITE =
SECRET_SESSION_KEY =
SECRET_ACCESS_KEY =
Access_Key_ID =
AWS_Secret_Access_Key =
```

## How to run?

### Using docker

```(bash)
    cd Hunlu
    docker-compose up -build
```

### Using npm

```(bash)
    cd api
    npm start
    cd ../web
    npm start
```
