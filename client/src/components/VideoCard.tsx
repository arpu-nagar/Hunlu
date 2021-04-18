import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cover from '../assets/cover.jpeg';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
const useStyles = makeStyles({
	root: {
		maxWidth: '90vw',
		margin: '20px 20px 20px 20px',
        ['@media (min-width:780px)']: {
            width: '45vw',
        },
        backgroundColor: '#192734',
        color: '#ffffff',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		fontSize: 11.5,
		marginBottom: 12,
        color: "#8899A6"
	},
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '10px'
    },
    lk: {
        marginLeft: '6px'
    }
});

export default function VideoCard() {
	const classes = useStyles();
	const gotoVideo = () => {
		console.log('hi');
	};
	return (
		<Card className={classes.root} variant="outlined">
			<CardActions onClick={gotoVideo}>
				<CardContent>
					
					{/* <Typography
					className={classes.title}
				>
					
				</Typography> */}
					<img src={cover} alt="cover" />
					<Typography variant="h5" component="h2">
						Lost - Frank Ocean
					</Typography>

					<Typography className={classes.pos}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum omnis error neque quo esse fugiat sunt veniam,
						necessitatibus tempora quasi. Quo repellendus
						consectetur beatae sequi eligendi quaerat voluptate
						illum reprehenderit!
					</Typography>
                    <div className={classes.row}>
						<div>
							<ThumbUpAltIcon /> <Typography component="h6" className={classes.lk}>5</Typography>
						</div>
						<div>
							<ThumbDownIcon /> <Typography component="h6" className={classes.lk}>5</Typography>
						</div>
						<div>
							<EmojiEmotionsIcon />
						</div>
					</div>
				</CardContent>
			</CardActions>
		</Card>
	);
}
