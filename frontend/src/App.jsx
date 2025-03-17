import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Transctions from './pages/Transctions';
import PageNotFound from "./pages/PageNotFound";

import Dashboard from './pages/Dashboard';

import Edit from "./pages/Edit";



export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
  <BrowserRouter>
  
     <Navbar/>
     <main className="flex-1">
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Dashboard />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/dashboard" element={<Transctions />}/>
       
       
        <Route path="*" element={<PageNotFound/>} />
  
        
      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
      </div>
  );
}
