import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";


export default function App() {
  return (

    <AuthProvider>

      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/success" element={<Success />} />
          <Route path="/auth/error" element={<Error />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/** OAuth Success handling is automatic because backend returns JSON */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
