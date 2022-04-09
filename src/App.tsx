import React from "react";
import { MantineProvider } from "@mantine/core";
import { Navigation } from "./components/navbar/Navigation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/login/login";
import { Register } from "./components/register/register";

function App() {
  return (
    <MantineProvider
      theme={{
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
        colorScheme: "light",
        //  //  //  //
        colors: {
          blue: ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
        },
        headings: {
          fontFamily: "Roboto, sans-serif",
          sizes: {
            h1: { fontSize: 40 },
          },
          textDecoration: "none",
        },
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
