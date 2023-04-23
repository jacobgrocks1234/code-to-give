import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
