import './SPIE_files/css_qOT8gK-ua_zzABK78-9PEM9LHkis2qIumG5vL_tYEP8.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Tools from './components/Tools/Tools';
import Admin from './components/Admin/Admin'
import Header from './components/Header/Header';
import AdminContextProvider from './Context/AdminContext';

function App() {
  return (
        <div className="App">
        <AdminContextProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tools" element={<Tools />}/>
            <Route path="/admin" element={<Admin />}/>
          </Routes>
        </AdminContextProvider>
    </div>
  );
}

export default App;
