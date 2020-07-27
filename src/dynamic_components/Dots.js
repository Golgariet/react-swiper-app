// import React, { Component } from "react";

// class Dots extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let current = this.props.currentImageIndex;
//     let images = this.props.IMG_DATA.map((el, index) => {
//       let name = index === current ? "active" : "";
//       return (
//         <li key={index}>
//           <button
//             className={name}
//             onClick={() => this.props.changeSlide(current, index)}
//           ></button>
//         </li>
//       );
//     });

//     return <ul>{images}</ul>;
//   }
// }

// export default Dots;

// We would wish for you to create a slider. Below you can find the necessary details and requirements:

// Setup the environment (including webpack or any other bundler configuration) - YES!
// Create a slider which works on mobile and desktop - YES (CSS RESPONSIVE)
// Make a useful readme - tell us how to setup your application - YEs

// The requirements for slider are:

// Must work for mobile and desktop devices - YES
// Must support swipes - YESSSSSSSSSSSSS without animation
// Must work for any HTML content - I guess it works for any HTML content

// Following slider features will be considered as advantages:

// Supports multiple slides on screen - NOT YET
// Supports infinite option - YES
// Supports scrolling to a selected slide (like go to slide X) - NOT YET/or YES

// Toggle button - YES
