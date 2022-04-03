import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s1 from "../src/images/s1.jpg";
import s2 from "../src/images/s2.jpg";
import s3 from "../src/images/s3.jpg";
import vit from "../src/images/vit.jpg"
const CarouselContainer=() => {
    return(
      <>
        <div id="box2"> 
        
      <div className="container2">
      <div className=" col-lg-11 mx-auto">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
      {/* <h1 className="carouselcolor"><b> Welcome to Auditorium & Hall Booking platform.</b></h1>  */}
        <div class="carousel-item active">
          <img class="d-block" src={vit} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block" src={s1} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block" src={s2} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block" src={s3} alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
    </div>
  
    </div>
    </>
    )
};

export default CarouselContainer;