import './App.css';
import { RegisterUI } from './Components/UI/RegisterUI/RegisterUI';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Footer } from './Components/Layouts/Footer/Footer';
import { Header } from './Components/Layouts/Header/Header';
import { LoginUI } from './Components/UI/LoginUI/LoginUI';
import { HomeUI } from './Components/UI/Home/Home';
import { BringUsersUI } from './Components/UI/BringUsersUI/BringUsersUI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomeUI/>}/>
          <Route path='/login' element={<LoginUI/>}/>
          <Route path='/register' element={<RegisterUI/>}/>
          <Route path='/users' element={<BringUsersUI/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
