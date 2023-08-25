import { Routes, Route } from "react-router-dom";

import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar";
import RequireAuth from "./Components/RequireAuth";
import Register from "./Routes/Register";

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default App;
