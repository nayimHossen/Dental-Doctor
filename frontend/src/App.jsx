import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reviews from "./pages/review/Reviews";
import Appointment from "./pages/appointment/Appointment";
import Dashboard from "./pages/dashboard/Dashboard";
import RequireAuth from "./pages/login/RequireAuth";
import RequireAdmin from "./pages/login/RequireAdmin";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blogs/Blogs";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyReview from "./pages/dashboard/dashboardComponents/MyReview";
import MyAppointments from "./pages/dashboard/dashboardComponents/MyAppointments";
import Users from "./pages/dashboard/dashboardComponents/Users";
import AddDoctor from "./pages/dashboard/dashboardComponents/AddDoctor";

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
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReview />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="review" element={<Reviews />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
