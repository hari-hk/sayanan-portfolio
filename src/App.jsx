import { ThemeProvider } from '@mui/material';
import HomePage from './pages/home/home.page';
import lightTheme from './theme/light'
import './App.scss';

function App() {
  return (
    <div className='main'>
      <ThemeProvider theme={lightTheme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
