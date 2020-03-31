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
    var flkty = new Flickity( '.main-carousel', {
      // options
    });
}


render(){
    return(
    <React.Fragment>
    <div className="main-carousel hero">
  <div className="carousel-cell">
      <img src="https://via.placeholder.com/1080x460?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt=""/>
  </div>
  <div className="carousel-cell">
      <img src="https://via.placeholder.com/1080x460?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt=""/>
  </div>
  <div className="carousel-cell">
      <img src="https://via.placeholder.com/1080x460?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt=""/>
  </div>
  </div>
  </React.Fragment>
    );
}
}

export default Carousel;