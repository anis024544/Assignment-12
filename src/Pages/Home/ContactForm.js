import React from 'react';
import appointment from '../../Assets/people/appointment.png'
const ContactForm = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
        <div>
          <div className="pt-16">
            <h4 className="text-xl text-primary font-bold text-center">
              Contact Us
            </h4>
            <h2 className="text-3xl text-white text-center">
              Stay connected with us
            </h2>
          </div>
          <div className=" flex flex-col items-center mt-10">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered input-sm w-full max-w-xs"
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <br />
            <textarea
              placeholder="Your message"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
            
            {/* <input className="text-white font-bold text-xl bg-secondary" type="submit" value="Submit" /> */}
            <button className="btn btn-sm mt-5 mb-10 bg-gradient-to-r from-accent to-primary text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
    );
};

export default ContactForm;