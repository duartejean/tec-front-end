import React from 'react';
import './SignupForm.css'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { light, dark } from './Themes';

const SignupForm = (props) => {

	return (
		<ThemeProvider theme={props.theme === 'darkmode'? dark : light}>
			<GlobalStyle />
			<div>
				<form>
					<h2>Sign up to my newsletter</h2>
					<input type="email" placeholder="my@email.com"></input>
					<button>Sign up</button>
				</form>
			</div>
		</ThemeProvider >
	)
}

export default SignupForm