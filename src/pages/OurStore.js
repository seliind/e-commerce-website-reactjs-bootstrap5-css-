import React, { useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import {ProductCard} from "../components/ProductCard"
import Color from "../components/Color";

export const OurStore = () => {
  const [grid, setGrid]=useState(4);
 
  return (
    <>
      <Meta title={"Our Sore"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availabilty</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label">In Stock (1)</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label">Out of Stock (0)</label>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-tems-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                   <Color/>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        XS (12)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        M (4)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        L (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className=" bg-light rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className=" bg-light rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className=" bg-light rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className=" bg-light rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src="https://thecurrent.pk/wp-content/uploads/2019/12/tech.jpg"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>All about computer!</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 50-100-150</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src="https://cdn.mos.cms.futurecdn.net/rkdqhXKirczstAEnRmaQXQ.png"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>All about techonology!</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 250-300-350</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p style={{width: "100px"}} className="mb-0 d-block">Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">Price low to high</option>
                      <option value="price-descending">
                        Price high to low
                      </option>
                    </select>
                  </div>
                  <div>
                 <div className="d-flex align-items-center gap-10 grid">
                    <p className="totalproducts my-auto">21 products</p>
                    <div className="d-flex gap-10 align-items-center">
                        <img onClick={() => {setGrid(3);}} 
                        className="d-block img-fluid" 
                        src="images/gr.svg" alt="grid"/>
                        <img onClick={() => {setGrid(4);}} 
                        className="d-block img-fluid" 
                        src="images/gr2.svg" 
                        alt="grid"/>
                        <img onClick={() => {setGrid(6);}} 
                        className="d-block img-fluid" 
                        src="images/gr3.svg" 
                        alt="grid"/>
                        <img onClick={() => {setGrid(12);}} 
                        className="d-block img-fluid" 
                        src="images/gr4.svg" 
                        alt="grid"/>
                    </div>
                 </div>
                </div>
                </div>
              </div>
              <div className="product-list pb-5">
                 <div className="d-flex flex-wrap gap-10">
                 <ProductCard grid={grid}/>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
