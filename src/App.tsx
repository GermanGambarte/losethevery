import { useState } from 'react'
import { Header } from './components/Header'
import { Button } from './components/Button'
import {
  generateConciseAdjective,
  generateSimpleAdjective
} from './api/generateAdjectives'

export const App: React.FC = () => {
  const [simpleAdjective, setSimpleAdjective] = useState<string>('')
  const [suggestion, setSuggestion] = useState<string>('')

  const handleGetResult = async (): Promise<void> => {
    const conciseAdjective = await generateConciseAdjective(simpleAdjective)
    setSuggestion(conciseAdjective)
  }

  const handleGetRandomResult = async (): Promise<void> => {
    const simpleAdjectiveGenerated = await generateSimpleAdjective()
    setSimpleAdjective(simpleAdjectiveGenerated)
    const conciseAdjective = await generateConciseAdjective(
      simpleAdjectiveGenerated
    )
    setSuggestion(conciseAdjective)
  }

  return (
    <div className='min-h-screen grid place-content-center px-4 bg-slate-900 text-white'>
      <Header />
      <div className='my-8 font-bold flex flex-col justify-center items-center gap-4 lg:flex-row lg:my-36'>
        <p className='text-6xl'>very</p>
        <p className='text-6xl'>+</p>
        <input
          value={simpleAdjective}
          onChange={({ target }) => {
            setSimpleAdjective(target.value)
          }}
          type='text'
          placeholder='boring'
          className='bg-transparent text-6xl w-96 text-center border-slate-500 placeholder:text-slate-500 border-b-2 outline-none'
        />
        <p className='text-6xl'>=</p>
        <p
          className={`text-6xl ${
            suggestion !== '' ? 'text-green-600' : 'text-slate-500'
          }`}
        >
          {suggestion !== '' ? suggestion : 'tedious'}
        </p>
      </div>

      <div className='flex gap-8 justify-center mt-6'>
        <Button handleClick={handleGetResult} label='Get/Refresh Result' />
        <Button handleClick={handleGetRandomResult} label='Random' />
      </div>
    </div>
  )
}
