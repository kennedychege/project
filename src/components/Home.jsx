import React from 'react';
import Images from '../assets/avatar.svg';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
//import { BobAfwataResume_3_2 } from 'public/asset/Bob Afwata Resume_3_2.pdf'


const Home = () => {
    const onButtonClick = () => {
      fetch("asset/Bob Afwata Resume_3_2.pdf")
        .then((response) => {
          response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Bob Afwata Resume_3_2.pdf";
            alink.click();
          });
        });
    };
  
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              BOB <span>AFWATA</span>
              </motion.h1>

              <motion.div 
              variants={fadeIn('up',0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
                <span className=' text-white mr-4'>I am a </span>
                <TypeAnimation 
              sequence={[
                'Software Developer',
                2000,
                'Product Designer',
                2000,
                'Electronics Engineer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
               />
              </motion.div>
              <motion.p 
              variants={fadeIn('up',0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='mb-2 max-w-lg mx-auto lg:mx-0'>
              Transforming visionary concepts into tangible human-centered solutions with the power of cutting-edge technology is my passion.
              </motion.p>

              <motion.div  
              variants={fadeIn('down',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

                <button onClick={onButtonClick}  className='btn btn-lg'>Download CV</button> 
               

                <a href='#' className='text-gradient btn-link'>
                 My Portfolio 
                </a>
              </motion.div>
              <motion.div 
              variants={fadeIn('down',0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='#'>
                  <FaFacebook />
                </a>

                <a href='#'>
                  <FaInstagram />
                </a>

                <a href='#'>
                  <FaYoutube />
                </a>
              </motion.div>
          </div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
          className='lg:flex flex-1 max-w-[320px] items-center justify-center mx-20'>
            <img  src={Images} alt='' className='mt-12' />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;