"use client"
import { ArrowUpRightIcon, XLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      className="flex flex-col gap-6 pt-36 pb-6 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex flex-col gap-5" variants={itemVariants}>
      <h1 className="text-dark text-center text-3xl md:text-5xl font-semibold">
      Your competition <span className="text-base">upgraded.</span> <br />
      It&apos;s time you did so too...
      </h1>
      <p className="text-dark/75 mx-5 max-w-xl text-center">
      They&apos;re using AI that actually works, faster, smarter, effortless. Nexia makes the upgrade simple, and once you switch, you&apos;ll wonder how you ever managed without it.</p>
      </motion.div>
      <motion.div className="flex gap-3" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/waitlist"><button className="bg-base flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">Join the waitlist <ArrowUpRightIcon className="text-white text-xl"/></button></Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://x.com/nexiaspace"  target="_blank"><button className="bg-black flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">Follow us on <XLogoIcon className="text-white text-xl"/></button></a>
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col md:flex-row px-7 gap-8 mt-6" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Image src="/axle.png" className="h-auto w-120" alt="Axle" height={400} width={400} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Image src="/docr.png" className="h-auto w-120" alt="Axle" height={400} width={400} />
        </motion.div>
      </motion.div>
      <motion.div className="text-dark text-2xl md:text-3xl py-5 max-w-4xl font-medium text-center" variants={itemVariants}>
      <span className="text-base">Nexia&apos;s mission</span> is to eliminate operational uncertainty by providing the reliable, <span className="text-base">quality AI foundation</span> that allows teams to <span className="text-base">build, automate, and scale with absolute confidence.</span>
      </motion.div>
    </motion.div>
  );
}
