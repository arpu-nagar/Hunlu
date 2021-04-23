import React from 'react';
import './App.css';
import { Hunlu } from './views/Hunlu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

interface PaletteColor {
	light?: string;
	main: string;
	dark?: string;
	contrastText?: string;
}

function App() {
	const theme = createMuiTheme({
		palette: {
			primary: {
			  light: '#0084d9',
			  main:  '#006db3',
			  dark:  '#004383',
			  contrastText: "#fff",
			},
			secondary: {
			  light: '#20314cc2',
			  main: '#ffffff',
			  dark: '#162338',
			  contrastText: '#eee',
			}
		  },
	});
	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<Hunlu />
			</MuiThemeProvider>
		</div>
	);
}

export default App;
