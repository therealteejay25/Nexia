"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<null | "success" | "error">();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "Nexia",
        "template_pk29f5a",
        e.currentTarget,
        "rRx7eimaDkVIWH3F1"
      )
      .then(() => {
        setModal("success");
        e.currentTarget.reset();
      })
      .catch(() => {
        setModal("error");
      })
      .finally(() => {
        setLoading(false);
      });

      e.currentTarget.reset();
  };

  return (
    <motion.div 
      className=\"flex flex-col gap-6 pt-36 pb-6 h-full items-center\"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className=\"flex flex-col gap-5\"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h1 className=\"text-dark text-center md:text-5xl text-3xl font-semibold\">
          Join the movement for <span className=\"text-base\">reliable AI.</span>
        </h1>
        <p className=\"text-dark/75 text-sm md:text-md mx-4 max-w-2xl text-center\">
          We are a small, focused team building the platform we know the industry
          needs. Every action, no matter how small, helps us bring guaranteed
          quality to workflows and documentations.
        </p>
      </motion.div>

      <motion.form
        className=\"max-w-3xl px-5.5 md:px-0 items-center flex flex-col gap-3 w-full\"
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-base font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name here..."
              required
              className="bg-white focus:border-base outline-0 transition-all duration-300 w-full flex justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-full p-3 pl-5"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label className="text-lg text-base font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email here..."
              required
              className="bg-white focus:border-base outline-0 transition-all duration-300 w-full flex justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-full p-3 pl-5"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <label className="text-lg text-base font-medium">Message</label>
          <textarea
            name="message"
            rows={3}
            placeholder="Your message here..."
            required
            className="bg-white focus:border-base outline-0 transition-all duration-300 w-full flex justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-3xl p-3 pl-5"
          />
        </div>

        <motion.button
          disabled={loading}
          className=\"bg-base flex gap-2 mt-4 items-center rounded-full w-fit py-3 px-5 text-white cursor-pointer font-medium disabled:opacity-60\"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? <div className=\"loader\"></div> : \"Send\"}
          {!loading && (
            <ArrowUpRightIcon className=\"text-white text-xl\" />
          )}
        </motion.button>
      </motion.form>

      <motion.div 
        className=\"text-dark text-2xl md:text-3xl py-5 max-w-4xl font-medium text-center\"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-base">Nexia’s mission</span> is to eliminate
        operational uncertainty by providing the reliable,{" "}
        <span className="text-base">quality AI foundation</span> that allows
        teams to{" "}
        <span className="text-base">
          build, automate, and scale with absolute confidence.
        </span>
        </motion.div>

      {modal && (
        <motion.div 
          className=\"fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center bg-black/40\"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className=\"bg-white shadow-2xl shadow-dark/10 border-4 border-black/3 rounded-3xl p-6 max-w-sm w-full mx-4 text-center flex flex-col gap-4\"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-dark">
              {modal !== "success"
                ? "Message sent"
                : "Something went wrong ❌"}
            </h2>

            <p className="text-dark/75">
              {modal !== "success"
                ? "Thanks for reaching out. We’ll get back to you shortly."
                : "Please try again in a moment."}
            </p>

            <motion.button
              onClick={() => setModal(null)}
              className=\"bg-base rounded-full py-3 px-8 text-white font-medium w-fit mx-auto\"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default page;
