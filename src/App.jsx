import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import { AuthContextProvider } from "./contexts/AuthContext";

function App () {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
} 

export default App;