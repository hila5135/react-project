import './App.css'
import { RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import { Outlet} from 'react-router-dom';
import Menu from './components/menu';
import AppLayout from './components/AppLayot';
import AppLayot from './components/AppLayot';
import { myRouter } from './components/Router';
import Sign from './components/Sign';

function App() {

  return (
    <>
    <HomePage/>
    {/* <RouterProvider router={myRouter} /> */}


    
    </>
  )
}
export default App