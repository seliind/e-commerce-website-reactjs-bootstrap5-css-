import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Color from "../components/Color";
import { Meta } from "../components/Meta";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                      <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch"/>
                        </div>
                        <div className="compare-product-details">
                          <h5 className="title">Honor T1 7.0</h5>
                          <h6 className="price mb-2 mt-3">$100</h6>
                          <div>
                            <div className="product-detail">
                              <h6>Brand:</h6>
                              <p>Havels</p>
                            </div>
                            <div className="product-detail">
                              <h6>Type:</h6>
                              <p>Watch</p>
                            </div>
                            <div className="product-detail">
                              <h6>Availability:</h6>
                              <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                              <h6>Color:</h6>
                              <Color/>
                            </div>
                            <div className="product-detail">
                              <h6>Size:</h6>
                              <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                      <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch"/>
                        </div>
                        <div className="compare-product-details">
                          <h5 className="title">Honor T1 7.0</h5>
                          <h6 className="price mb-2 mt-3">$100</h6>
                          <div>
                            <div className="product-detail">
                              <h6>Brand:</h6>
                              <p>Havels</p>
                            </div>
                            <div className="product-detail">
                              <h6>Type:</h6>
                              <p>Watch</p>
                            </div>
                            <div className="product-detail">
                              <h6>Availability:</h6>
                              <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                              <h6>Color:</h6>
                              <Color/>
                            </div>
                            <div className="product-detail">
                              <h6>Size:</h6>
                              <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
