import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';



const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>

            <motion.div
            variants={fadeIn('up',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}className=''>

              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-18'>Successfully run over 20 technical workshops in over 7 universities showcasing core Intel technologies; OneAPI,OpenVino,Realsense,Intel Galileo and Edison</p>
              <button className='btn btn-sm mt-6'>View all projects</button>
            </motion.div>    
            <motion.div
            variants={fadeIn('down',0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}

            className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-11/12 '>

              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500 h-[290px]' src={Img1} alt='' />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all  duration-500 z-50'><span className='text-gradient'>Product Design</span></div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </motion.div>

            
            

            </div>

          <motion.div
          variants={fadeIn('right',0.9)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5}}

          className='flex-1 flex flex-col mt-0 gap-y-7'>
        
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-11/12'>

              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500 h-[290px]' src={Img2} alt='' />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all  duration-500 z-50'><span className='text-gradient'>Product Design</span></div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              </div>

              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-11/12'>

              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500 h-[290px]' src={Img3} alt='' />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all  duration-500 z-50'><span className='text-gradient'>Product Design</span></div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;