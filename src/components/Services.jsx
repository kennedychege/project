import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import {Image} from '../assets/services.png'
import {fadeIn} from '../variants';

const services = [
  {
    name: 'Product Design',
    description: 'It involves a multidisciplinary approach, combining elements of aesthetics, functionality, and usability to create a seamless and engaging user experience',
    Link: 'Learn more' 
  },

  { 
    name: 'Software Development',
    description: 'It involves the collaboration of skilled developers who write code in various programming languages, aiming to create efficient and functional software.',
    Link: 'Learn more'
  },
    
  {
    name: 'Electronics Engineer',
    description: 'Work at the forefront of technological advancements, creating innovative solutions for various industries such as telecommunications, healthcare, and manufacturing.',
    Link: 'Learn more'
  },

  {
    name: 'System Development',
    description: ' It involves a series of phases, including planning, analysis, design, implementation, and maintenance, with a focus on ensuring functionality, efficiency, and user satisfaction.',
    Link: 'Learn more'
  }
  
]
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row'>

          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1  lg:bottom bg-no-repeat mix-blend-lighten mb-12  lg:mt-12 '>

          <h2 className='h2 text-accent mb-6'>
            What I do
          </h2>

          <h3 className='h3 max-w-[455px] mb-12'>
            I'm a Software Developer and Electronics Engineer with over 8 years of experience
          </h3>

          <button className='btn btn-sm'>See my work</button>

          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1'>

            <div>
              {services.map((service, index) => {

                const {name, description, Link} = service;
                return (
                  <div className='border-b border-white/20 mb-[38px] flex mt-7' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>

                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{Link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Services;