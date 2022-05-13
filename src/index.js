import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, PostModalProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <PostModalProvider>
        <App />
      </PostModalProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
