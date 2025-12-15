"use client";
import { ArrowUpRightIcon, XLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
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
          <span className="text-base">Complexity Ends Here.</span> <br />
          Meet Your Operational Core.
        </h1>
        <p className="text-dark/75 mx-5 max-w-xl text-center">
          Nexia is the integrated platform that eliminates uncertainty across
          your most critical areas: workflows, documentations and more...
        </p>
      </motion.div>
      <motion.div className="flex gap-3" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/waitlist"><button className="bg-base flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">Join the waitlist <ArrowUpRightIcon className="text-white text-xl"/></button></Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://x.com/nexiaspace" target="_blank">
            <button className="bg-black flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">
              Follow us on <XLogoIcon className="text-white text-xl" />
            </button>
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="flex gap-5 mt-6 max-w-5xl w-full px-6 flex-col md:flex-row" variants={itemVariants}>
        <motion.div 
          className="bg-white flex flex-col w-full gap-4 justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-3xl p-5"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/axle.png"
            className="h-auto rounded-2xl w-80 md:w-120"
            alt="Axle"
            height={400}
            width={400}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-base text-2xl font-semibold">Axle</h1>
            <p className="text-dark/50 md:text-sm text-xs">
              The modern enterprise can't afford operational failure. Axle
              is the AI-driven workflow engine built on the Nexia Quality
              Standard for guaranteed stability and precision. Axle moves beyond
              brittle, simple logic. Our Unbreakable Flow Engine intelligently
              validates, cleans, and structures data in real-time, preemptively
              resolving errors before they cause workflow failures. This means
              you eliminate constant manual fixes and operational debt. Axle
              provides the professional intelligence and control needed to
              automate your most complex processes with confidence. Give your
              high-impact teams the unshakable certainty to focus on growth, not
              maintenance.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
            <a href="https://x.com/heyaxle" target="_blank" className="w-full">
              <button className="bg-black justify-center w-full flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">
                View on <XLogoIcon className="text-white text-xl" />
              </button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="bg-white flex flex-col w-full gap-4 justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-3xl p-5"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/docr.png"
            className="h-auto rounded-2xl w-80 md:w-120"
            alt="Axle"
            height={400}
            width={400}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-base text-2xl font-semibold">Docr</h1>
            <p className="text-dark/50 md:text-sm text-xs">
              Stale documentation is the silent killer of engineering velocity,
              wasting time on manual fixes and creating confidence-killing
              uncertainty. Docr is the developer-first documentation hub built
              on the Nexia Quality Standard to guarantee real-time accuracy.
              Docr uses deep source analysis to provide Code-Synced Reliability,
              ensuring every piece of documentation is perpetually aligned with
              your codebase and fully accurate with every commit. We eliminate
              the effort and risk of manual doc updates. Give your developers
              the unshakable confidence they need for rapid onboarding and
              frictionless feature development. Docr guarantees the
              documentation integrity your engineering teams deserve.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
            <a href="https://x.com/usedocr" target="_blank" className="w-full">
              <button className="bg-black justify-center w-full flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">
                View on <XLogoIcon className="text-white text-xl" />
              </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;
