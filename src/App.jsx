import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expense from "./Components//Expense";
import Home from "./Components//Home";
import Income from "./Components//Income";

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/income" element={<Income/>}/>
            <Route path="/expense" element={<Expense/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
  
  export default App;
