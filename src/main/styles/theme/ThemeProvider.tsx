import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components/native';
import myTheme, { Theme } from './index'; // Certifique-se de que 'myTheme' está exportado corretamente

interface ThemeProviderProps {
	theme?: Theme; // Use o tipo correto para o tema
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
	theme = myTheme as Theme,
	children,
}) => <StyledProvider theme={theme}>{children}</StyledProvider>;

export default ThemeProvider;
