'use client'
import { useComponent } from '@/app/ComponentContext';
import Zone from '@/components/Zone';

type props = {
}

const IdleList = ({ }: props) => {
  const { component0 } = useComponent()

  return (
    <div
      className='relative p-2 min-h-8 bg-gray-900 hover:border border-blue-500 group'
    >
      <button className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'>Not in use</button>
      <Zone zoneId='Comp0' items={component0}
        className='flex flex-wrap gap-2'
      />
    </div>
  )
}

export default IdleList