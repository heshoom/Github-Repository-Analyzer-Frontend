import home from "./components/home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
   <Router> 
      <Routes>
        <Route path="/" element={<home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
