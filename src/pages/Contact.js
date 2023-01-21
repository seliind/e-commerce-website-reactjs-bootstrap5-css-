import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import { BiPhoneCall, BiInfoCircle, BiHome, BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contac Us"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24476.949004642673!2d32.8648428!3d39.927550100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e6f51a3317b%3A0x7415e004939401c0!2sAnkara%20Kalesi!5e0!3m2!1str!2str!4v1671534759743!5m2!1str!2str"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        cols="30"
                        rows="10"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <button className="button border-0">Submit</button>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiHome className="fs-5" />
                        <address className="mb-0">
                          Office: 6 Near West Village, Uptown Funk, Turkey
                          PinCode: 060606
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <p className="mb-0"> +90 123 456 78 89</p>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiMailSend className="fs-5" />
                        <p className="mb-0"> helloHoney@mymail.com</p>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday-Friday 9 AM - 8 PM </p>
                      </li>
                    </ul>
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

export default Contact;
