import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#ff3434]'>Delvin</span>
          </h1>
          <h1 className={`${styles.heroSubText} mt-2 text-[#ff8b43]`}>
            I'm Men's Physique Athlete - Graphic Design - Frontend Developer
          </h1>
        </div>
      </div>

      <ComputersCanvas />

      
    </section>
  );
};

export default Hero;
