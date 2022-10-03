import React from 'react'
import '../components/style/footer.css'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.footer className='footer-container'
       initial={{x:-250}}
       animate={{x:0}}
    >
    </motion.footer>
  )
}

export default Footer