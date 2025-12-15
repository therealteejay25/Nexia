"use client";

import Image from "next/image";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";


const page = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const email = new FormData(e.currentTarget).get("email") as string;
  
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);
  
      if (error) throw error;
  
      setSuccess(true);
    } catch (err) {
        alert(`You’re already on the waitlist or something broke ❌ ${err}`);
    } finally {
        setLoading(false);
    }
    e.currentTarget.reset();
  };

  /* ================= SUCCESS STATE ================= */
  if (success) {
    return (
      <motion.div 
        className="flex flex-col gap-8 pt-36 pb-20 items-center text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div className="flex flex-col gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-dark text-4xl md:text-5xl font-semibold">
          You&apos;re In!
        </h1>

        <p className="text-dark/75">
          We&apos;ll let you know when Nexia launches…
        </p>
        </motion.div>

        <motion.div 
          className="text-dark text-2xl md:text-3xl max-w-4xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-base">Nexia&apos;s mission</span> is to eliminate
          operational uncertainty by providing the reliable,{" "}
          <span className="text-base">quality AI foundation</span> that allows
          teams to{" "}
          <span className="text-base">
            build, automate, and scale with absolute confidence.
          </span>
        </motion.div>

        <motion.div 
          className="flex p-2 text-sm w-fit rounded-full items-center pr-5 gap-1 font-semibold text-base border-4 border-dark/12 bg-white justify-between shadow-2xl shadow-dark/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center -space-x-4.5">
            <Image
              src="/tayo.png"
              className="size-9 rounded-full border-3 border-white"
              alt="User"
              height={400}
              width={400}
            />
            <Image
              src="/saka.png"
              className="size-9 rounded-full border-3 border-white"
              alt="User"
              height={400}
              width={400}
            />
            <Image
              src="/tara.png"
              className="size-9 rounded-full border-3 border-white"
              alt="User"
              height={400}
              width={400}
            />
          </div>
          You and 1K other creatives have a spot.
        </motion.div>

        <motion.div 
          className="flex gap-3 pb-24 md:pb-12 flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/products"><button className="bg-base flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">Check out our products<ArrowUpRightIcon className="text-white text-xl"/></button></Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://x.com/nexiaspace"
              className="bg-black rounded-full py-3 px-6 text-white font-medium"
            >
              Follow us on X
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  /* ================= FORM STATE ================= */
  return (
    <motion.div 
      className="flex flex-col gap-6 pt-36 pb-6 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex flex-col justify-center items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h1 className="text-dark text-center text-3xl md:text-5xl font-semibold">
          Secure Your Spot on the <span className="text-base">Nexia</span>{" "}
          Waitlist.
        </h1>
        <p className="text-dark/75 mx-5 max-w-2xl text-center">
          Don&apos;t wait for your next operational failure. Nexia is launching
          the quality-first platform built to eliminate uncertainty from your
          workflows and documentation.
        </p>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex p-1.5 md:w-3xl w-[100%] rounded-full border-4 border-dark/3 bg-[#E9E9E9] justify-between shadow-2xl shadow-dark/5">
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email address here..."
            className="outline-0 md:w-[70%] px-4 text-xs md:text-[16px]"
          />
          <button
            disabled={loading}
            className="bg-base flex gap-2 justify-center items-center text-xs md:text-[16px] rounded-full py-3 px-5 md:px-6 text-white cursor-pointer font-medium disabled:opacity-60"
          >
            {loading ? <div className="loader"></div> : "Secure your spot"}
          </button>
        </div>
      </motion.form>

      <motion.div 
        className="flex p-2 text-sm w-fit rounded-full items-center pr-5 gap-1 font-semibold text-base border-4 border-dark/12 bg-white justify-between shadow-2xl shadow-dark/5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center -space-x-4.5">
          <Image
            src="/tayo.png"
            className="size-9 rounded-full border-3 border-white"
            alt="User"
            height={400}
            width={400}
          />
          <Image
            src="/saka.png"
            className="size-9 rounded-full border-3 border-white"
            alt="User"
            height={400}
            width={400}
          />
          <Image
            src="/tara.png"
            className="size-9 rounded-full border-3 border-white"
            alt="User"
            height={400}
            width={400}
          />
        </div>
        Join 1K other creatives for a spot
      </motion.div>

      <motion.div 
        className="text-dark text-2xl md:text-3xl py-5 pb-26 md:pb-13 max-w-4xl font-medium text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-base">Nexia&apos;s mission</span> is to eliminate
        operational uncertainty by providing the reliable,{" "}
        <span className="text-base">quality AI foundation</span> that allows
        teams to{" "}
        <span className="text-base">
          build, automate, and scale with absolute confidence.
        </span>
      </motion.div>
    </motion.div>
  );
};

export default page;
