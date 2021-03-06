import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { publicRoute } from "./router/publicRoute";
import { privateRoute } from "./router/privateRoute";
import PrivateRoute from "./authentication/PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import { dashboardRoute } from "./router/dashboardRoute";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} ></Route>
          ))
        }
        <Route element={<PrivateRoute />}>
          {
            privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} ></Route>
            ))
          }

        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            {
              dashboardRoute.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
              ))
            }
          </Route>
        </Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
