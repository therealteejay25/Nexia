"use client"
import { XLogoIcon } from "@phosphor-icons/react";
import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      className='flex bg-dark/5 justify-between flex-col md:flex-row w-full gap-4 p-4 items-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
        <motion.p 
          className="text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Copyright © 2025 Nexia. All rights reserved.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-fit"
        >
          <a href="https://x.com/nexiaspace" className="w-full md:w-fit"><button className="bg-black w-full justify-center md:w-fit flex gap-2 items-center rounded-full py-3 px-5 text-white cursor-pointer font-medium">Follow us on <XLogoIcon className="text-white text-xl"/></button></a>
        </motion.div>
    </motion.div>
  )
}

export default Footer