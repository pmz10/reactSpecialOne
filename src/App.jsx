import { Routes, Route } from "react-router-dom";

import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar";
import RequireAuth from "./Components/RequireAuth";

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
      </Routes>
    </>
  );
};

export default App;
