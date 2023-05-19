import React from 'react'
import InputNumber, { InputNumberProps } from '../InputNumber'

interface Props extends InputNumberProps {
  max?: number
  onDecrement?: (value: number) => void
  onIncrement?: (value: number) => void
  onType?: (value: number) => void
  classNameWrapper?: string
}

export default function QuantityController({
  max,
  onDecrement,
  onIncrement,
  onType,
  classNameWrapper = 'ml-10 ',
  value,
  ...rest
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }

    onType && onType(_value)
  }

  const icrement = () => {
    let _value = Number(value) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }

    onIncrement && onIncrement(Number(_value))
  }

  const decrement = () => {
    let _value = Number(value) - 1
    if (_value < 1) {
      _value = 1
    }

    onDecrement && onDecrement(Number(_value))
  }

  return (
    <div className={'flex items-center' + classNameWrapper}>
      <button
        onClick={decrement}
        className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>
      <InputNumber
        className=''
        classNameError='hidden'
        classNameInput='h-8 w-14 border-t border-b border-gray-300 text-center outline-none'
        onChange={(event) => handleChange(event)}
        value={Number(value)}
        {...rest}
      />
      <button
        onClick={icrement}
        className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}
