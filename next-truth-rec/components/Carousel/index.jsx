import React from "react";
import $ from "jquery";

class Carousel extends React.Component{
componentDidMount(){
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: true
    });
    
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.main-carousel', {
      // options
    });
}

render(){
    return(
    <React.Fragment>
  <div className="main-carousel" >
  <div className="carousel-cell">
      <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
  <div className="carousel-cell">
      <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
  <div className="carousel-cell">
      <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
</div>
  </React.Fragment>
    );
}
}

export default Carousel;




















<div className="carousel-cell">
<img src="./img/carousel-media/test.jpg" alt=""/>
</div>