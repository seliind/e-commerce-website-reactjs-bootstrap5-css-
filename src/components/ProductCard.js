import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

export const ProductCard = (props) => {
  const {grid}=props;
  let location = useLocation();
  console.log(location);
  return (
   <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to=':id' className="product-card position-relative">
        <div className="wishlist-icon">
          <Link>
          <img src="images/wish.svg" alt="wish"/>
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="item" />
          <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY5kS7iRrrRtpFLTHAIbSncj5f8JBjbl25A&usqp=CAU" alt="item" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p className="price">$100.000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
            <img src="images/prodcompare.svg" alt='add-car'/>
            </Link>
            <Link>
            <img src="images/view.svg" alt='view'/>
            </Link>
            <Link>
            <img src="images/add-cart.svg" alt='add-car'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to='/' className="product-card position-relative">
        <div className="wishlist-icon">
          <Link>
          <img src="images/wish.svg" alt="wish"/>
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="item" />
          <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY5kS7iRrrRtpFLTHAIbSncj5f8JBjbl25A&usqp=CAU" alt="item" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p className="price">$100.000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
            <img src="images/prodcompare.svg" alt='add-car'/>
            </Link>
            <Link>
            <img src="images/view.svg" alt='view'/>
            </Link>
            <Link>
            <img src="images/add-cart.svg" alt='add-car'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
   </>
  );
};
