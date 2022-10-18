import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reviews from "./pages/review/Reviews";
import Appointment from "./pages/appointment/Appointment";
import RequireAuth from "./pages/login/RequireAuth";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blogs/Blogs";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="review" element={<Reviews />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
