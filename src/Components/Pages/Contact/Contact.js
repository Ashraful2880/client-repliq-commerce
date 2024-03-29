import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";
import { TbLocation } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="bg-[#ebf0ff] min-h-screen">
      <div className="lg:py-16 py-8">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#2563eb] w-full lg:max-w-5xl md:max-w-5xl max-w-full lg:p-12 md:p-12 p-3 rounded-xl shadow-lg text-white overflow-hidden mx-auto">
          <div className="flex flex-col space-y-8 justify-between">
            <div className="text-left">
              <h1 className="font-bold text-4xl tracking-wide mb-2">
                Contact Us
              </h1>
              <p className="pt-2 text-indigo-100 text-sm">
                For all your non-existant company needs Fake Corp are here to
                help, do not hesitate to contact us!
              </p>
            </div>

            <div className="flex flex-col lg:space-y-6 md:space-y-6 space-y-3">
              <div className="inline-flex space-x-2 items-center w-60">
                <VscCallOutgoing className="text-3xl mr-1 text-white" />
                <span>+111 345 214 213</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <BsEnvelope className="text-3xl mr-1 text-white" />
                <span>hello@fakecorp.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <TbLocation className="text-3xl mr-1 text-white" />
                <span>111 Fake Boulevard, Fakesville, FYC</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="blank"
                className="h-9 w-9 text-[#2563eb] hover:text-white border border-[#2563eb] hover:border-white rounded-full flex justify-center items-center bg-white hover:bg-[#2563eb] duration-300"
              >
                <FiFacebook className="text-xl" />
              </a>
              <a
                 href="https://www.instragram.com"
                 target="blank"
                className="h-9 w-9 text-[#2563eb] hover:text-white border border-[#2563eb] hover:border-white rounded-full flex justify-center items-center bg-white hover:bg-[#2563eb] duration-300"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                 href="https://www.twiter.com"
                 target="blank"
                className="h-9 w-9 text-[#2563eb] hover:text-white border border-[#2563eb] hover:border-white rounded-full flex justify-center items-center bg-white hover:bg-[#2563eb] duration-300"
              >
                <FiTwitter className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="blank"
                className="h-9 w-9 text-[#2563eb] hover:text-white border border-[#2563eb] hover:border-white rounded-full flex justify-center items-center bg-white hover:bg-[#2563eb] duration-300"
              >
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-indigo-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-indigo-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg lg:p-8 md:p-8 p-4 text-gray-600 md:w-96">
              <form className="flex flex-col space-y-4">
                <div>
                  <label className="text-sm text-left inline-block w-full font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#1678FB]"
                  />
                </div>
                <div>
                  <label className="text-sm text-left inline-block w-full font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#1678FB]"
                  />
                </div>
                <div>
                  <label className="text-sm text-left inline-block w-full font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#1678FB]"
                  />
                </div>
                <div>
                  <label className="text-sm text-left inline-block w-full font-semibold">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#1678FB]"
                  ></textarea>
                </div>
                <button className="inline-block bg-[#1678fb] border border-[#1678fb] hover:bg-transparent hover:text-[#1678fb] duration-500 font-semibold rounded-lg px-6 py-3 uppercase text-sm text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <iframe
          title="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.723472551384!2d89.18012139999999!3d23.53498875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fee5dfb6ab292b%3A0x714cc79d538236a4!2sPaira%20Chottor!5e0!3m2!1sen!2sbd!4v1647341237352!5m2!1sen!2sbd"
          style={{ height: "50vh", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
