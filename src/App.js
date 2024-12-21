import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import WatchHistory from "./pages/WatchHistory";

function App() {
  return (
    <div className="App">
      <h1>Video Player</h1>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/home"} element={ <HomePage />} />
        <Route path={"/watch-history"} element={ <WatchHistory />} />

       
       
      </Routes>
    </div>
  );
}

export default App;
