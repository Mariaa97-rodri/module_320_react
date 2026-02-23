import { Route, Routes } from "react-router-dom";
// import Main from "./pages/Main";
import Profile from "./components/StarshipCard";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
