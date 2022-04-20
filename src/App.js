import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App h-100 overflow-auto">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/league" exact element={<Home />} />
          <Route path="/teams" exact element={<Home />} />
          <Route path="/players" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
