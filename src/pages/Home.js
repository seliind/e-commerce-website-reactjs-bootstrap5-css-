import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BlogCard } from "../components/BlogCard";
import { ProductCard } from "../components/ProductCard";
import { SpecialProduct } from "../components/SpecialProduct";
import { FamousProduct } from "../components/FamousProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>INTEL CORE</h4>
                    <h5>Laptop</h5>
                    <p>
                      From $1500.00 <br /> or $100/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But Ipad Air</h5>
                    <p>
                      From $1500.00
                      <br />
                      or $100/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>INTEL CORE</h4>
                    <h5>Laptop</h5>
                    <p>
                      From $1500.00 <br /> or $100/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>INTEL CORE</h4>
                    <h5>Laptop</h5>
                    <p>
                      From $1500.00 <br /> or $100/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div className="">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div className="">
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Security Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Speaker</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music</h6>
                    <p>20 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>54 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home Application</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>7 Items</p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWV23nPk2SqrgTjkgdrDhMW8S8mWVg7uDZVw&usqp=CAU"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Gaming</h6>
                    <p>20 Items</p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOc9C0dloW3L_hSTT29iNFW9PtRU-cySTvg&usqp=CAU"
                    alt="camera"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <h3 className="section-heading">See Popular Products</h3>
          <FamousProduct/>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2"> 
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
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
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                 <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                 </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="row">
              <div className="col-3">
              <BlogCard/>
              </div>
              <div className="col-3">
              <BlogCard/>
              </div>
              <div className="col-3">
              <BlogCard/>
              </div>
              <div className="col-3">
              <BlogCard/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
