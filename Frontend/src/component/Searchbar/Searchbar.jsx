import React from 'react'
import "./Searchbar.css"
import { useNavigate } from 'react-router-dom';
export default function Searchbar() {

  const navigate = useNavigate();     //Navigate hook
  const handleSearch = () => {
    const ProductInput = document.querySelector('.channel-input');
    const product = ProductInput.value;
    navigate("/Search", { state: { product } })
  }
  return (
    <>
      <div className="outer">
        <div className="cards">
          <div className="text1 mt-5">
            <h1>Dental Product Comparator <br/> New Experience</h1>
          </div>
          <div className="text2 mt-3">
            <span>What are you looking for? <br/></span>
          </div>
          <div className=" d-flex justify-content-center mt-5 bar">
            <div className="input-field"> <input placeholder="Search" className="form-control channel-input" />
              <button className="btn btn1"><i className="fa fa-search" onClick={handleSearch}></i></button>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5 gap-4 icons">
            <span><i className="fa fa-google"></i></span> <span><i className="fa fa-facebook"></i></span>
            <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-instagram"></i></span>
          </div>
        </div>
      </div>
    </>
  )
}
