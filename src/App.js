import './App.css';
import Navbar from './Project/Navbar';
import Main from './Project/Main';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './Project/LoginPage';
import SignUp from './Project/SignUp';
import Footer from './Project/Footer';
import BookingForm from './Project/BookingForm';
import About from './Project/About';
import { AuthProvider } from './Project/AuthContext';
import RoomCard from './Project/RoomCard';


function App() {
  return (
      <>
          <AuthProvider>

      <Navbar></Navbar>
  
      <div className='container'>
      <Routes>
        <Route path="" element={<Main/>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/bookingform" element={<BookingForm/>}></Route>
        <Route path="roomcard" element={<RoomCard/>}></Route>
    
      </Routes>
      </div>
      <Footer></Footer>
      </AuthProvider>

      </>
    
  );
}

export default App;