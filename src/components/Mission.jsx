import { motion } from 'framer-motion'
import missionImg from '../assets/mission.jpeg'
import missionVideo from '../assets/mission.mp4'
import { MISSION } from '../constants'

export function Mission() {
  return (
    <section id='mission'>
      <div className='container mx-auto text-center'>
        <h2 className='mb-8 text-3xl lg:text-4xl'>Our Mission</h2>
        <div className='relative flex items-center justify-center'>
          <motion.video
            className='w-full rounded-3xl'
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            // motion animate>
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}>
            <source
              src={missionVideo}
              type='video/mp4'
            />
          </motion.video>
          <motion.div
            className='absolute h-full w-full rounded-3xl bg-black/40'
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}></motion.div>
          <motion.p
            className='absolute max-w-lg tracking-tighter lg:text-3xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}>
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
