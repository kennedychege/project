import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


  const About = () => {
    const [ref, inView] = useInView({
      threshold: 0.5,
    });
    return (
      <section className='section' id='about'>
        <div className="container mx-auto h-auto">

          <div 
          
          
          className='flex-1 flex flex-col gap-y-0 lg:flex-row justify-center items-center  lg:gap-x-20 lg:gap-y-0 h-screen'>

            <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[640px] mix-blend-lighten bg-top'></motion.div>

            <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.3}}
            className='flex-1 lg:mb-0 mb-20'>
              <h2 className='h2 text-accent'>
                About me
              </h2>
              <h3 className='h3 mb-4'>
                I'm a Software Developer and Electronics Engineer with over 8 years of experience
              </h3>
              <p className='mb-6'>
              I am a passionate Software developer with a keen eye for creating visually appealing and intuitive user interfaces. With a strong foundation in HTML, CSS, and JavaScript.
              </p>
              <div className='flex items-center gap-x-6 lg:gap-x-10 mt-5 '>
                <div>
                  <div ref={ref} className='text-[40px] font-tertiary text-gradient'>
                    
                     {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                      
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br />
                    Experience
                  </div>
                </div>

                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ?<CountUp start={0} end={15} duration={3} /> : null}
                      k+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Projects <br />
                    Completed
                  </div>
                </div>

                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={12} duration={3} /> :null}
                      k+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Satisfied<br />
                    Clients
                  </div>
                </div>


                

              </div>
              <div className='flex items-center gap-x-6 mt-8'>
                  <button className='btn btn-lg'>Contact me</button>
                  <a href='#' className='text-gradient btn-link'>
                    My Portfolio
                  </a>

                </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default About;