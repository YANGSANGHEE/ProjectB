import { theme } from '@/Theme/theme';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  //Styled-Component ThemeProvicer
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
