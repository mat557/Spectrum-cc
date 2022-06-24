import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Blog from "./pages/Blog/Blog";
import Courses from "./pages/Courses/Courses";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardResult from "./pages/Dashboard/DashboardClasses/DashboardResult";
import DashboardProfile from "./pages/Dashboard/DashboradProfile/DashboardProfile";
import Home from "./pages/Home/Home";
import Teacher from "./pages/Teacher/Teacher";
import Navbar from "./Shared/Navbar/Navbar";
import RequireAuth from "./Shared/RequireAuth";


function App() {
  return (
    <div style={{maxWidth:"1350px",margin:"0 auto"}}>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="courses" element={<Courses></Courses>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="teacher" element={<Teacher></Teacher>}></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<DashboardProfile></DashboardProfile>}></Route>
          <Route path="result" element={<DashboardResult></DashboardResult>}></Route>
        </Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
