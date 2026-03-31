import { CARD_ITEMS } from '@/lib/constants'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='mt-12 w-full flex flex-col mb-16' id='skills'>
      <div className='px-6 mb-12'>
        <div>
          <p className='primary font-poppins-100 text-[10px] '>TECHNICAL EXPERTISE</p>
        </div>
        <div className='flex justify-between items-center w-full'>
          <h2 className='text-[28px] font-poppins-700 mt-2'>SkillEcosystem</h2>
          <div className='text-[10px] text-gray-300 w-100 font-light text-right'>A comprehensive toolkit refined through years of cross-disciplinary work in vibrant tech and creative landscape</div>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap text-xs items-center justify-center'>
      {CARD_ITEMS.map((item, index) => (
        <SkillsCard 
        key={index}
        title={item.title}
        description={item.description}
        icon={item.icon}
        />
      ))}
    </div>
    </div>
  )
}

export default Skills
