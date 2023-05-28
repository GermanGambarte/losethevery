interface Props {
  label: string
  handleClick: () => Promise<void> | void
}

export const Button: React.FC<Props> = ({ label, handleClick }) => {
  return (
    <button className='rounded-md py-4 px-2 bg-slate-600' onClick={handleClick}>
      {label}
    </button>
  )
}
