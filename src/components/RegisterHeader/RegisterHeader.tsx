import { Link, useMatch } from 'react-router-dom'
import Logo from '../Logo'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register') // Kiểm tra trên đường link có phải là register
  const isRegister = Boolean(registerMatch)

  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          <Link to='/'>
            <Logo color='fill-orange' />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}
