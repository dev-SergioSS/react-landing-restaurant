import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <div className='relative h-screen flex items-center justify-center'>
      <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
        <video
          src={video}
          className='h-full w-full object-cover'
          muted
          autoPlay
          loop
          playsInline
          poster={hero}></video>
      </div>

      <div className='absolute z-20 inset-0 h-full w-full bg-gradient-to-b from-transparent from-70% to-black'></div>
      <div className='relative z-20 h-screen flex flex-col justify-end pb-20'>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt='logo'
          className='w-full p-4'
        />
        <p className='p-4 text-lg tracking-tighter text-white'>Paris</p>
      </div>
    </div>
  )
}
