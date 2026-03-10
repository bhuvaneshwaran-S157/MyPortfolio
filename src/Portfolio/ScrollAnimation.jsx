import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  
  // Define the transformation based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <motion.div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#3498db',
        margin: '50px auto',
      }}
      animate={{ scale }}
    >
      Scroll to Animate
    </motion.div>
  );
}

export default ScrollAnimation;
