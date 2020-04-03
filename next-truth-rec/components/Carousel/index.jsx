import React from "react";
import $ from "jquery";

class Carousel extends React.Component{
componentDidMount(){
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true
    });
    
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.carousel', {
      // options
    });
}

render(){
    return(
    <React.Fragment>
 
 <div class="carousel"
  data-flickity='{ "wrapAround": true }'>
  <div class="carousel-cell">
  <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
  <div class="carousel-cell">
  <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
   <div class="carousel-cell">
  <img src="./img/carousel-media/test.jpg" alt=""/>
  </div>
  <div class="carousel-cell"></div>
</div>


\

  </React.Fragment>
    );
}
}

export default Carousel;












