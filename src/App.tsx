import React, { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme, { darkTheme } from "./styles/theme";

import { GlobalStyles } from "./styles/globals";
import Layout from "./components/Layout/Layout";
import LandingPage from "./Routes/LandingPage/LandingPage";
import { Provider } from "react-redux";
import { store } from "./redux/shortener/store";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [light, setLight] = useState(false);

  return (
    <>
      <title>
        Shortly
      </title>
      <meta
        name="description"
        content="Shortly"
      />

      <ThemeProvider theme={toggleTheme ? darkTheme : theme}>
        <Provider store={store}>
        <Router>
      
            <Routes>
              <Route path="/">
                <Route index element={<LandingPage />} />
              </Route>
            </Routes>
            <GlobalStyles />
            <ToastContainer />
        
        </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}
