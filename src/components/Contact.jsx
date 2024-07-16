import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <div
      id="contact"
      className="bg-[url('/images/download.jfif')] bg-no-repeat bg-cover py-24"
    >
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">IT consulting</h1>
        <div className="px-24 pt-10 pb-20 rounded-[10px] shadow-[2px_10px_28px_rgba(75,0,129,0.12)] bg-white">
          <h4 className="text-xl text-[#0f001a] mb-5 font-bold">
            Leave us a message
          </h4>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <form action="">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <p
                    className={
                      name !== 0
                        ? "hidden"
                        : "block text-red-500  text-base mb-2"
                    }
                  >
                    Fill in the field
                  </p>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    onClick={() => {
                      setName(0);
                    }}
                  />
                  <p
                    className={
                      email !== 0
                        ? "hidden"
                        : "block text-red-500  text-base mb-2"
                    }
                  >
                    Fill in the field
                  </p>
                  <TextField
                    id="outlined-basic"
                    label="Your email"
                    variant="outlined"
                    onClick={() => {
                      setEmail(0)
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Briefly describe your project"
                    multiline
                    rows={4}
                  />
                </Box>
                <button className="ml-2 mt-5 text-xl font-semibold py-2 bg-blue-600 text-white rounded-lg px-28 transition-all duration-300 hover:scale-105">
                  Send
                </button>
              </form>
            </div>
            <div className="w-[45%]">
              <ul>
                <li className="mb-6">
                  <a
                    className="flex items-center text-[#0f001a] leading-5"
                    href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                    target="_blank"
                  >
                    <img
                      className="mr-2"
                      src="/images/locationIcon.svg"
                      alt=""
                    />
                    Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="flex items-center text-[#0f001a] leading-5"
                    href="tel:+998336600999"
                    target="_blank"
                  >
                    <img className="mr-2" src="/images/callIcon.svg" alt="" />
                    +998 33 66 00 999
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="flex items-center text-[#0f001a] leading-5"
                    href="mailto:azizbek.b@udevs.io"
                    target="_blank"
                  >
                    <img className="mr-2" src="/images/gmailIcon.svg" alt="" />
                    azizbek.b@udevs.io
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="flex items-center text-[#0f001a] leading-5"
                    href="https://t.me/azizbekbakhodirov"
                    target="_blank"
                  >
                    <FaTelegramPlane className="text-[#1B5BF7] w-6 h-6 mr-2" />
                    <strong className="text-[#1B5BF7]">
                      {" "}
                      t.me/azizbekbakhodirov
                    </strong>
                  </a>
                </li>
              </ul>
              <div className="inline-flex mb-4">
                <a className="text-[#1b5bf7] mr-4 text-2xl" href="/">
                  <FaYoutube />
                </a>
                <a className="text-[#1b5bf7] mr-4 text-2xl" href="/">
                  <FaInstagram />
                </a>
                <a className="text-[#1b5bf7] mr-4 text-2xl" href="/">
                  <FaFacebookSquare />
                </a>
                <a className="text-[#1b5bf7] mr-4 text-2xl" href="/">
                  <FaTwitter />
                </a>
              </div>
              <div>
                <iframe
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                  frameborder="0"
                  width={400}
                  height={200}
                  title="Udevs location"
                  aria-hidden={false}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
