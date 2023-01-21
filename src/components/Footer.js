import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Adress"
                  aria-label="Your Email Adress"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Office: 6 Near West Village, <br /> Uptown Funk, Turkey <br />
                  PinCode: 060606
                </address>
                <Link
                  to={"tel: +90 123 456 78 89"}
                  className="mt-2 d-block mb-2 text-white"
                >
                  +90 123 456 78 89
                </Link>
                <Link
                  to="mailto:helloHoney@mymail.com"
                  className="mt-2 d-block mb-2 text-white"
                >
                  helloHoney@mymail.com
                </Link>
                <div className="social_icons d-flex align-items-center gap-30">
                  <Link to="" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsYoutube className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to='/privacy-policy' className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to='/refund-policy' className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to='/shipping-policy' className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to='/term-conditions' className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link to='/' className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Seliin{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
