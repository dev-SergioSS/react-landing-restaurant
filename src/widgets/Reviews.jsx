import { REVIEW } from '../constants'
import xaviour from '../assets/xaviour.jpeg'
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.jpeg'
import customer3 from '../assets/customer3.jpeg'
import customer4 from '../assets/customer4.jpeg'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

export const Reviews = () => {
  return (
    <section
      className='container mx-auto mb-8 mt-12'
      id='review'>
      <motion.div
        className='flex flex-col'
        initial='hidden'
        whileInView='show'
        variants={containerVariants}
        viewport={{ once: true }}>
        <motion.p
          className='mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]'
          variants={itemVariants}>
          {REVIEW.content}
        </motion.p>
        <motion.div
          className='flex items-center justify-center gap-6'
          initial='hidden'
          whileInView='show'
          variants={itemVariants}
          viewport={{ once: true }}>
          <img
            src={xaviour}
            width={80}
            height={80}
            className='rounded-full border'
          />
          <div className='tracking-tighter'>
            <h6>{REVIEW.name}</h6>
            <p className='text-sm text-neutral-500'>{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <div className='mt-14 flex flex-col items-center justify-center gap-2 md:flex-row'>
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            initial='hidden'
            whileInView='show'
            variants={itemVariants}
            viewport={{ once: true }}
            key={index}
            src={customer}
            alt='customer'
            className='w-[200px] h-[300px] rounded-br-3xl rounded-tl-3xl object-cover'
          />
        ))}
      </div>
    </section>
  )
}