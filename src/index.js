import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./app/store";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./context";
import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
  <Toaster position="top-center" />
    <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
