import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

import { AuthProvider } from "./contexts/AuthContext";
import { SocketProvider } from "./contexts/SocketContext";
import { ApiProvider } from "./contexts/ApiContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SocketProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </SocketProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
