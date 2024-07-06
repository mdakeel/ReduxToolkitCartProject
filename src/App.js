
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route} from 'react-router-dom'
import Cart  from './components/Cart'
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import toast, {Toaster} from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cart" element={ <Cart />} />
      </Routes>
      <Toaster />
      
    </Provider>
  );
}

export default App;
