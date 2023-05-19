import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { MemoriesEmpty } from '@/components/MemoriesEmpty'
import { SignIn } from '@/components/SignIn'




export default function Home() {
  return (
    <main className=" grid min-h-screen grid-cols-2 ">
      {/* Left */}
      <div className=" relative flex flex-col  bg-[url('../assets/bg-stars.svg')] bg-cover items-start justify-between border-r border-white/10 overflow-hidden px-28 py-16">
        {/* blur */}
        <div className=" absolute right-0 top-1/2 -translate-y-1/2 h-[288px] w-[526px] rounded-full translate-x-1/2 bg-purple-700 blur-full" />
        {/* stripes */}
        <div className=" absolute right-1 top-0 bottom-0 bg-stripes w-2 hover:text-gray-50  transition-all" />
        {/* sign in  */}
        <SignIn />
        {/* hero  */}
        <Hero />
        {/* copyright  */}
        <Copyright />
      </div>
   
      {/* Rigth */}
      <MemoriesEmpty />
      
    </main>
  )
}