import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=fRk0iZ_g8e8MknbFh_spWVJCCquIcT1rICm3YurnLFQ`
      )
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      });
  };
  return (
    <>
      <div className="container text-center my-5 header border-bottom px-4">
        <div className="form-group row">
          <div className="col-xs-2">
            <label htmlFor="exampleInput" className="form-label  ">
              <h3 className="fs-1">
                Enter Images to <span className="text-primary">search</span>
              </h3>
            </label>
            <input
              type="text"
              placeholder="Enter image to search"
              className="form-control "
              value={photo}
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={changePhoto}
              className="btn btn-primary my-2"
            >
              Get Photo
            </button>
          </div>
        </div>
      </div>

      
  <section className="bg-light pt-5 pb-5 shadow-sm">
    <div className="container ">
      <div className="row justify-content-sm-center align-items-start">
        
        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3 d-flex align-items-stretch">
          <div className="cards ">
            {result.map((value) => {
              return (
               
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="img-fluid img-thumbnail d-block mb-4 h-100"
                      src={value.urls.small}
                      alt=""
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{value.description}</h5>
                      <p className="card-text mb-4">{value.alt_description}</p>
                      <a href={value.urls.small} className="btn btn-primary text-white mt-auto align-self-start">Link</a>
                    </div>
                  </div>
                
             

                    );
          })}
            </div>
            </div>
            </div>
            </div>
          </section>
    </>
  );
}

export default App;
