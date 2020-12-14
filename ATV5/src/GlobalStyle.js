import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.body}
	}
	h2 {
		color: ${({ theme }) => theme.text}
	}
	form {
		padding: 0 50px 50px 50px;
		border: 1px solid ${({ theme }) => theme.formBorder};
	}
	button {
		background: ${({ theme }) => theme.buttonBackground};
  	color: ${({ theme }) => theme.buttonText};
	}
	input {
		background: ${({ theme }) => theme.body}
	}
	::placeholder {
		color: ${({ theme }) => theme.text}
	}
	`
;