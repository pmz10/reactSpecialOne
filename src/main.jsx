import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserProvider";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);
