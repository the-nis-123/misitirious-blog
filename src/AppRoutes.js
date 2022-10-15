import { Routes, Route } from 'react-router-dom';
import App from './App';
import GlobalStyles from './global.css';
import RoutesProtector from './RoutesProtector';
import Home from './pages/Home';
import Products from './pages/Products';
import Events from './pages/Events';
import About from './pages/About';

const AppRoutes = () => {

  return(
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<RoutesProtector />}>
          <Route path='/' element={ <App /> }>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/events' element={<Events />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;
