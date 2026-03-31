
import React from 'react'
import Icon from 'feather-icons-react'

type SkillCardProps = {
    title: string
    description: string
    icon: string
}


const SkillsCard = ({title, description, icon}: SkillCardProps) => {

  const items = description.split(",").map(item => item.trim())
  return (
    <div className='rounded-lg bg-gray-800 w-62 h-38 px-4 mt-4'>
        <Icon icon={icon} className='w-6 h-6 primary mt-4'/>
        <div className='text-sm'>{title}</div>
        <ul className='space-y-1 flex flex-wrap gap-1 mt-2'>
        {items.map((desc, i) => (
          <li key={i} className='text-[10px] text-gray-400 bg-gray-700 rounded px-1  flex text-wrap '>
            {desc}
          </li>
        ))}
        </ul>
    </div>
  )
}

export default SkillsCard
