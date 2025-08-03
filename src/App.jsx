// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

// Dummy home page (you can change this)
function Home() {
  return <h1>Welcome to the Bible Study App</h1>;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
