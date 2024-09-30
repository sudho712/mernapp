import React from 'react';

function Carousal() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner m-3">
        {/* First Slide */}
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/900x300/?burger"
            alt="First slide"
          />
        </div>
        {/* Second Slide */}
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/900x300/?chicken"
            alt="Second slide"
          />
        </div>
        {/* Third Slide */}
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/900x300/?momos"
            alt="Third slide"
          />
        </div>
      </div>
      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
