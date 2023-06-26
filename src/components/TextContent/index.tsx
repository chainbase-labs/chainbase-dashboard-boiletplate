import { FC } from 'react'

interface MetricsTextItemProps {
  content: string
  label: string
}

export const MetricsTextItem: FC<MetricsTextItemProps> = ({ content, label }) => {
  return (
    <div className='flex flex-col items-center h-full justify-center'>
      <div className='text-6xl font-bold'>{content}</div>
      <div className='mt-4 text-sm text-gray-500'>{label}</div>
    </div>
  )
}