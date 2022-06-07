import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Blog from "./pages/Blog/Blog";
import Courses from "./pages/Courses/Courses";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";


function App() {
  return (
    <div >
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="courses" element={<Courses></Courses>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
