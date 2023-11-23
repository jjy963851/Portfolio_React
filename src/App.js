
import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Cart from './component/Cart';
import NotFound from './component/NotFound';
import MyPage from './component/MyPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <NavBar />
        <Routes>
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/' exact element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
