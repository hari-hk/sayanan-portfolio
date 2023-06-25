import './App.scss';
import HomePage from './pages/home/home.page';
import { UnderConstructionPage } from './pages/under-construction/under-construction.page';

function App() {
  return (
    <div className='main'>
      <HomePage />
      <UnderConstructionPage />
    </div>
  );
}

export default App;
