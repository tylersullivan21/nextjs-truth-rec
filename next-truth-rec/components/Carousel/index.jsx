import React from "react";
import $ from "jquery";



class Carousel extends React.Component{

    /*ADD THIS JQUERY INTO COMPONENT DID MOUNT
    $('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
componentDidMount(){

}
*/

render(){
    return(
    <React.Fragment>
    <div class="main-carousel">
  <div class="carousel-cell">
      <img src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt=""/>
  </div>
  <div class="carousel-cell">
      <img src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt=""/>
  </div>
  <div class="carousel-cell">
      <img src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt=""/>
  </div>
  </div>
  </React.Fragment>
    );
}
}

export default Carousel;