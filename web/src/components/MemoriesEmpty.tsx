export function MemoriesEmpty () {
  return (
    <div className=" flex flex-col bg-[url('../assets/bg-stars.svg')] bg-cover p-16 flex-1 ">
        <div className="flex flex-1 justify-center items-center">
          <p className=" text-center leading-relaxed w-[360px] ">Você ainda não registrou nenhuma lembrança, comece a <a className=" underline hover:text-gray-50" href="#">criar agora</a>!</p>
    </div>
  </div>
  )
}