import React from "react";


function Card (){
return(
   
<div class="card-container">
    <div className="card">
      <img src="https://reactjs.org/logo-og.png" alt="React Logo" />
      <div className="card-content">
        <h3>React Logo</h3>
        <div className="star-rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
        <p classNmae="price">$12.35</p>
      </div>
    </div>
  </div>

)
}

export default Card;