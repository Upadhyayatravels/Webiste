
import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const submitform = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0213o4b', 'template_3indd0b', form.current, {
        publicKey: 'jsHyjFRD_hG7eNN2X',
      })
      .then(
        () => {
          document.getElementById("name").value=""
          document.getElementById("email").value=""
          document.getElementById("message").value=""
          alert("Message Sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Sorry message didnt send try later")
        },
      );
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form ref={form} className="space-y-4" onSubmit={submitform}>
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  onChange={(e) => {
                    setmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Your Message"
                  onChange={(e) => {
                    setbdy(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p>
                <span className="font-medium">Address:</span>
                <br />
                Hapur Uttar Pradesh
              </p>
              <p>
                <span className="font-medium">Phone:</span>
                <br />
                +918006080021
              </p>
              <p>
                <span className="font-medium">Email:</span>
                <br />
                random@gmail.com
              </p>
              <p>
                <span className="font-medium">Working Hours:</span>
                <br />
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
