'use client';
import styles from './page.module.scss';
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';

export default function Index() { // Changed from 'index' to 'Index'

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition(); // Ensure 'useMousePosition' is a custom React Hook with 'use' prefix
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
       <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
          <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
            A designer - with skills that haven&apos;t been replaced by A.I (yet) - making good shit.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p>I&apos;m a <span>selectively skilled</span> Developer with a strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </main>
  );
}
