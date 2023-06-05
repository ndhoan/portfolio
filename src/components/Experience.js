import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 darktext-light/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={scrollRef} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='Intern'
            company='PhenikaaMass (BusMap)'
            companyLink='https://phenikaamaas.com/'
            time='2019 – 2020'
            address='373-375 Nguyễn Trọng Tuyển, Phường 2, Tân Bình, Thành phố Hồ Chí Minh'
            work='Working on the R&D team, finding solution replace for Google Maps, then building store advertises Admin
            sites to manage to advertise for merchant'
          />
          <Details
            position='Intern'
            company='PhenikaaMass (BusMap)'
            companyLink='https://phenikaamaas.com/'
            time='2019 – 2020'
            address='373-375 Nguyễn Trọng Tuyển, Phường 2, Tân Bình, Thành phố Hồ Chí Minh'
            work='Working on the R&D team, finding solution replace for Google Maps, then building store advertises Admin
            sites to manage to advertise for merchant'
          />
          <Details
            position='Intern'
            company='PhenikaaMass (BusMap)'
            companyLink='https://phenikaamaas.com/'
            time='2019 – 2020'
            address='373-375 Nguyễn Trọng Tuyển, Phường 2, Tân Bình, Thành phố Hồ Chí Minh'
            work='Working on the R&D team, finding solution replace for Google Maps, then building store advertises Admin
            sites to manage to advertise for merchant'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
