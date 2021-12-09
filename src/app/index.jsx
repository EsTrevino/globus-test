import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatusPage from "../pages/StatusPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test/:testNumber" element={<StatusPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
