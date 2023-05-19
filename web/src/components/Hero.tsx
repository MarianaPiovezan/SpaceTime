import logo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export  function Hero () {
  return (
    <div className='space-y-5'>
        <Image src={logo} alt='NLW Space Time' />
          <div className=' max-w-[420px] space-y-1'>
            <h1 className='text-5xl mt-5 font-bold leading-tight text-gray-50 '>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>
              Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>
          <a className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm hover:bg-green-700 transition-colors text-black leading-none uppercase' href="">CADASTRAR LEMBRANÇA</a>
        </div>
  )
} 