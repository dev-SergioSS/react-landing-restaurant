import { CONTACT } from '../constants'

export const Contacts = () => {
  return (
    <section id='contacts'>
      <div className='text-neutral-400'>
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className='my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl'>
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  )
}
