import React from "react";
import Logos from "../Home/Logos";

function Main() {
  return (
    <div className="bg-[#272833]">
      <div className="flex justify-center mt-12 items-center">
        <h1 className="text-5xl border-[#FFC223] pb-6 px-10 border-b-4 ">
          Contact Us
        </h1>
      </div>

      <div className="flex justify-center flex-col mt-12 items-center">
        <div className="bg-[#212529] w-[50%] sm:w-[90%]  py-8 px-16  rounded-xl flex justify-center flex-col  ">
          <h1 className="font-bold text-center ">
            Feel free to drop a message and we will get back to you as soon as
            we can!
          </h1>
          <div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col mt-12 px-16 sm:px-2"
            >
              <input
                type="hidden"
                name="access_key"
                value="7fced2af-0a35-43f3-8312-f642a8f48a54"
              />

              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                name="Name"
                required
                placeholder="Name"
                className=" border-gray-500 rounded-lg border px-4 text-xl bg-[#212529] h-10"
              />

              <label className="mt-8" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                required
                placeholder="name@example.com"
                className=" border-gray-500 rounded-lg border px-4 text-xl bg-[#212529] h-10"
              />

              <label className="mt-8" htmlFor="sub">
                Subject
              </label>
              <input
                id="sub"
                required
                type="text"
                name="Subject"
                placeholder="Subject"
                className=" border-gray-500 rounded-lg border px-4 text-xl bg-[#212529] h-10"
              />

              <label className="mt-8" htmlFor="msg">
                Message
              </label>
              <input
                id="msg"
                type="text"
                name="Message"
                className=" border-gray-500 rounded-lg  h-24 border px-4 text-xl bg-white "
              />

              <button
                type="submit"
                className="mt-8 text-black text-xl rounded-lg py-3 bg-[#FFC007]"
              >
                Send Message
              </button>
            </form>

            <h1 className="mt-12 text-xl flex justify-center ">
              To reach us, contact us on: +91 911 8112 120
            </h1>
          </div>
        </div>
      </div>

      <Logos />
    </div>
  );
}

export default Main;
