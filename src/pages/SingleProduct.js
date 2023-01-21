import React, { useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import { ProductCard } from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Accordion from "../components/Accordion";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 590,
    height: 500,
    zoomWidth: 500,
    img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&w=1000&q=80",
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="mmain-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3 bg-white">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-10">
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1619946928632-abefa12506e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="watch-photos"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="watch-photos"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1595570981097-e72c1af177e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdyaXN0d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="watch-photos"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1590995505834-e5380bba1865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdyaXN0d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="watch-photos"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    All Watches Make You Look Stunning! Cool Designs!
                  </h3>
                  <div className="border-bottom py-3">
                    <p className="price">$250</p>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 t-review">(13 reviews)</p>
                    </div>
                    <a className="review-btn" href="#reviews">
                      Write a review
                    </a>
                  </div>
                  <div className="border-bottom py-3">
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">Type:</h3>{" "}
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">Brand:</h3>{" "}
                      <p className="product-data">Havells</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">Category:</h3>{" "}
                      <p className="product-data">Watches</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">Tags:</h3>{" "}
                      <p className="product-data">#fashion #classy</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">Availability:</h3>{" "}
                      <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex gap-10 flex-column my-1">
                      <h3 className="product-heading">Size:</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          S
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          M
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          L
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XL
                        </span>
                      </div>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                      <h3 className="product-heading">Color:</h3>
                      <Color />
                    </div>
                    <div className="d-flex gap-10 flex-row my-3">
                      <h3 className="product-heading">Quantity:</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          style={{ width: "70px" }}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <div className="mt-2 d-flex justify-content-center gap-20 align-items-center">
                        <button type="submit" className="button border-0">
                          Add to Cart
                        </button>
                        <button to="/signup" className="button signup">
                          Buy it now
                        </button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-30">
                      <div>
                        <a href="">
                          <TbGitCompare /> Add to compare
                        </a>
                      </div>
                      <div>
                        <a href="">
                          <AiOutlineHeart />
                          Add to wishlist
                        </a>
                      </div>
                    </div>
                    <br />
                    <div className="gap-30">
                      <h3 className="product-heading">
                        Similique sunt in culpa qui officia deserunt mollitia
                        animi, id est laborum et dolorum fuga.
                      </h3>
                      <br />
                      <Accordion />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div id="reviews" className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 13 reviews.</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars count={5} size={24} value={4} edit={true} />
                    </div>
                    <div>
                      <textarea
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Nevdeep</h6>
                      <ReactStars count={5} size={24} value={5} edit={true} />
                    </div>
                    <p className="mt-3">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
