import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import useSearchProduct from 'src/hooks/useSearchProduct'
import Logo from '../Logo'
import NavHeader from '../NavHeader'

export default function CartHeader() {
  const { register, onSubmitSearch } = useSearchProduct()
  return (
    <div className='border-b border-b-black/10'>
      <div className='bg-orange text-white'>
        <div className='container'>
          <NavHeader />
        </div>
      </div>
      <div className='bg-white py-6'>
        <div className='container'>
          <div className='md:flex md:items-center md:justify-between'>
            <Link to={path.home} className='flex flex-shrink-0 items-end'>
              <Logo color='fill-orange' />
              <div className='mx-4 h-8 w-[1px] bg-orange' />
              <div className='whitespace-nowrap capitalize text-orange lg:text-xl'>Giỏ hàng</div>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%]' onSubmit={onSubmitSearch}>
              <div className='flex rounded-sm border border-orange bg-white '>
                <input
                  type='text'
                  {...register('name')}
                  placeholder='Freeship đơn từ 0 đồng'
                  className='w-full flex-grow border-none px-3 py-1 text-black outline-none'
                />
                <button className='flex-shrink-0 rounded-sm bg-orange px-6 py-2 hover:opacity-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
