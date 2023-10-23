import './App.css'
import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import News from './pages/News';
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<h1>Hello this is my blog</h1>} />
        <Route path="/myPage" element={<h1>Hi this is my page</h1>} />
      </Routes>
    </>

  ); 
}


export default App
