import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./component/Home";
import ErrorBoundary from "./component/ErrorBoundary";
import Header from "./component/Header";
import ExpenseItem from "./component/ExpenseItem";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home heroName="batman" />} />
    //     {/* <Route path="/header" element={<Header />} />
    //     <Route path="/ExpenseItem" element={<ExpenseItem />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
