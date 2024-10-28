import aboutImg from '../assets/about.jpeg'
import { ABOUT } from '../constants'

export const About = () => {
  return (
    <section
      className='container mx-auto mb-8'
      id='about'>
      <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
        About Us
      </h2>
      <div className='flex flex-wrap'>
        {/* image */}
        <div className='w-full p-4 lg:w-1/2'>
          <img
            src={aboutImg}
            alt='cooking delicious food'
            className='w-full rounded-3xl lg:-rotate-3'
          />
        </div>

        {/* text */}
        <div className='w-full px-2 lg:w-1/2'>
          <h2 className='text-4xl tracking-tighter lg:text-6xl'>
            {ABOUT.header}
          </h2>
          <div className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3'></div>
          <p className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>
            {ABOUT.content}
          </p>
        </div>
      </div>
    </section>
  )
}