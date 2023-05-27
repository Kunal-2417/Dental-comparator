import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./component/Hero/Home"
import Search from "./component/Search/Search";
import Searchbar from "./component/Searchbar/Searchbar";

// import "./App.css"
const App = () => {
  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search/>}/>  {/*products */}
        <Route path="/Searchbar" element={<Searchbar/>}/>

      </Routes>
    </Router>     
    </>
  )
}

export default App
