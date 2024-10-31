import { DISHES } from '../constants'
import DishCard from '../shared/components/DishCard/DishCard'

export function Dishes(props) {
  return (
    <section
      className='container mx-auto py-16 px-6'
      id='dishes'>
      <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
        Our Dishes
      </h2>
      <div className='grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-4 md:gap-y-8 lg:grid-cols-5'>
        {DISHES.map((dish, index) => {
          return (
            <DishCard
              project={dish}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}
