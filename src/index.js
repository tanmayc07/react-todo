import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Chakra UI setup
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
