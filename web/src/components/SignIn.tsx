import { User } from 'lucide-react'

export function SignIn () {
  return (
    <a href={`http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex item-center gap-3 text-left hover:text-gray-50  transition-colors">
          <div className=" flex h-10 w-10 rounded-full bg-gray-400 hover:bg-gray-200 items-center justify-center">
            <User className="h-5 w-5 text-gray-500 " />
          </div>
          <p className='max-w-[140px] text-sm leanding-snug'><span className='underline '>Crie sua conta</span> e salve suas memórias!</p>
    </a>
  )
}