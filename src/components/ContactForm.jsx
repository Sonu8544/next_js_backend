"use client";
import React, { useState } from "react";
// import { FiSmile } from "react-icons/fi";
import Image from "next/image";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setIsButtonDisabled(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("All field required, Thanks");
      setIsButtonDisabled(true);

      // Clear the error message after 5 seconds
      setTimeout(() => {
        setError("");
        setIsButtonDisabled(false);
      }, 5000);

      return;
    }

    setIsButtonDisabled(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("response", data);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);
  };

  return (
    <>
      <section className="bg-blue-50" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="flex justify-center font-heading mb-4 font-bold tracking-tight text-pink-500 text-xl md:text-3xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="justify-center">
            <div className="grid md:grid-cols-2">
              {/* Image here */}
              <div className="imageSection my-auto max-w-full max-h-[200px] md:max-h-[400px]">
                <Image
                  src="/contact.webp"
                  alt="contact image"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="card h-fit max-w-6xl md:p-12 mt-[2rem]" id="form">
                <p className="mb-4 text-sm font-bold text-blue-700">Ready to Get Started?</p>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="phone"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        placeholder="Your phone number"
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    {error && (
                      <div className="text-red-500 mb-4">
                        {error}
                      </div>
                    )}
                    {isButtonDisabled && !error && (
                      <div className="flex py-2 mb-1 items-center bg-blue-800 animate-bounce rounded-sm">
                        <h1 className="text-xl text-white">
                          Thanks I will contact you soon!
                        </h1>
                        <span className="ml-2">
                          {/* {<FiSmile className="text-white" />} */}
                        </span>
                      </div>
                    )}
                    <button
                      type="submit"
                      className={`w-full text-white px-6 py-3 font-xl rounded-md sm:mb-0 ${isButtonDisabled || error
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-800"
                        }`}
                      disabled={isButtonDisabled || error}
                    >
                      {isButtonDisabled ? "Please wait..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}