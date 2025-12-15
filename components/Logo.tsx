import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const Logo = ({size} : {size: number}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
        <Image src="/logo.svg" alt='Logo' height={size} width={size} />
    </motion.div>
  )
}

export default Logo