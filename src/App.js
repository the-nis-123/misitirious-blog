import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div id="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

