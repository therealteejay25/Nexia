"use client"
import React, { useState } from "react"
import Logo from "./Logo"
import Link from "next/link"
import { ListIcon, XIcon, XLogoIcon } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const undoOpen = () => setOpen(false)

  return (
    <>
      <div className='bg-white flex justify-between mt-7 items-center shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-full p-3 px-5 fixed md:mx-auto max-w-3xl mx-6 pl-7 md:w-full left-0 right-0 z-50'>
        <Link href="/"><Logo size={52} /></Link>

        <div className="md:flex gap-6 hidden">
          <Link href="/products" className='text-black/50 font-medium transition-all duration-300 hover:text-base'>Products</Link>
          <Link href="/waitlist" className='text-black/50 font-medium transition-all duration-300 hover:text-base'>Waitlist</Link>
          <Link href="/support" className='text-black/50 font-medium transition-all duration-300 hover:text-base'>Support Us</Link>
        </div>

        <div className="flex gap-2">
        <a href="https://x.com/nexiaspace" target="_blank"><div className="p-3 group rounded-full bg-dark/5 cursor-pointer hover:bg-base transition-all duration-300">
            <XLogoIcon className="text-base text-xl group-hover:text-light transition-all duration-300" />
          </div></a>

          <div
            onClick={() => setOpen(!open)}
            className="p-3 group md:hidden flex rounded-full bg-dark/5 cursor-pointer transition-all duration-300"
          >
            {open ? (
              <XIcon className="text-base text-xl transition-all duration-300" />
            ) : (
              <ListIcon className="text-base text-xl transition-all duration-300" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed top-14 left-0 right-0 mx-6 bg-white shadow-2xl shadow-dark/5 border-4 border-black/3 rounded-b-4xl p-6 pt-16 flex flex-col gap-4 z-40"
          >
            <Link onClick={() => undoOpen()} href="/products" className='text-black/50 font-medium'>Products</Link>
            <Link onClick={() => undoOpen()} href="/waitlist" className='text-black/50 font-medium'>Waitlist</Link>
            <Link onClick={() => undoOpen()} href="/support" className='text-black/50 font-medium'>Support Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
