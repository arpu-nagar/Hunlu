// @flow
import * as React from 'react';
import ReactPlayer from 'react-player/lazy';

export default () => {
	return (
		<div>
			<ReactPlayer
				url="https://hunlu-trial-1.s3.ap-south-1.amazonaws.com/videoplayback.mp4"
				controls={true}
			/>
		</div>
	);
};
