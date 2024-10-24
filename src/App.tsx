import React, { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme, { darkTheme } from "./styles/theme";

import { GlobalStyles } from "./styles/globals";
import Layout from "./components/Layout/Layout";
import LandingPage from "./Routes/LandingPage/LandingPage";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [light, setLight] = useState(false);

  return (
    <>
      <title>
        Volunteers for Excellence Bilingual Nursery and Primary School
      </title>
      <meta
        name="description"
        content="Volunteers for Excellence Bilingual Nursery and Primary School"
      />

      <ThemeProvider theme={toggleTheme ? darkTheme : theme}>
        <Router>
          <Layout
            toggleTheme={toggleTheme}
            setToggleTheme={setToggleTheme}
            toggle={toggle}
            setToggle={setToggle}
            light={light}
            setLight={setLight}
          >
            <Routes>
              <Route path="/">
                <Route index element={<LandingPage />} />
              </Route>
            </Routes>
            <GlobalStyles />
            <ToastContainer />
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}
