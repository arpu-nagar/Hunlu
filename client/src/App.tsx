import React from 'react';
import './App.css';
import { Hunlu } from './views/Hunlu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
function App() {
	const theme = createMuiTheme({});
	return (
		<div className="App">
			{/* <MuiThemeProvider theme={theme}> */}
			<Hunlu />
			{/* </MuiThemeProvider> */}
		</div>
	);
}

export default App;
