import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export const SpecialProduct = () => {
  return (
    <div className="col-6">
      <div className="special-product-card mb-3">
        <div className="d-flex justify-content-between">
          <div>
            <img className="fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlgL_n-zxYMnxDWlv-d9psZGFbgHT4gnqCw&usqp=CAU" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6>Samsung Galaxy Note10+ Mobile Phone; Sim...</h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="pşrice">
              <span className="red-p">$380</span> &nbsp;
              <strike>$459</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                {" "}
                <b>5</b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-1 bg-danger">1</span>:
                <span className="badge rounded-circle p-1 bg-danger">1</span>:
                <span className="badge rounded-circle p-1 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>

          </div>
        </div>
      </div>
    </div>
  );
};
