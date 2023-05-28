import { WriteIcon } from './Icons'

export const Header: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <WriteIcon />
      <p className='text-slate-400 text-center'>
        Combine &ldquo;very&ldquo; with a simple adjective and get a more
        concise adjective
      </p>
    </div>
  )
}
