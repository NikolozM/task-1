import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
// import ExerciseDetail from "./pages/ExerciseDetail";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box>
      <Topbar />
      <Home />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/exercise/:id'
          element={<ExerciseDetail />}
        />
      </Routes>
      <Footer /> */}
    </Box>
  );
};

export default App;
