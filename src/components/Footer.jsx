import { SOCIAL_MEDIA_LINKS } from '../constants'

export function Footer() {
  return (
    <div className='mt-20 mb-8'>
      <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'>
            {link.icon}
          </a>
        ))}
      </div>
      <p className='mt-8 text-center tracking-tighter text-neutral-500'>
        &copy;devSergioSS All right reserved.
      </p>
    </div>
  )
}
