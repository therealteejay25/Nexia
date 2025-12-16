"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { ArrowUpRightIcon, XLogoIcon } from "@phosphor-icons/react";

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
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6 pt-36 pb-6 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
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

      {/* CTAs */}
      <motion.div className="flex gap-3" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/waitlist">
            <button className="bg-base flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">
              Join the waitlist
              <ArrowUpRightIcon className="text-white text-xl" />
            </button>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://x.com/nexiaspace" target="_blank">
            <button className="bg-black flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">
              Follow us on
              <XLogoIcon className="text-white text-xl" />
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Product Cards */}
      <motion.div
        className="flex gap-5 mt-6 max-w-5xl w-full px-6 flex-col md:flex-row"
        variants={itemVariants}
      >
        {/* Axle */}
        <motion.div
          className="bg-white flex flex-col w-full gap-4 justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-3xl p-5"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/axle.png"
            alt="Axle"
            width={400}
            height={400}
            className="h-auto rounded-2xl w-80 md:w-120"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Axle</h1>
            <p className="text-dark/50 md:text-sm text-xs">
              The modern enterprise can&apos;t afford operational failure. Axle
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
        </motion.div>

        {/* Docr */}
        <motion.div
          className="bg-white flex flex-col w-full gap-4 justify-between items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-3xl p-5"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/docr.png"
            alt="Docr"
            width={400}
            height={400}
            className="h-auto rounded-2xl w-80 md:w-120"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Docr</h1>
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;
