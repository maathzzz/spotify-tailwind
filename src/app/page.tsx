import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 md:w-34 bg-zinc-950 p-6">
          <div className="flex items-center gap-2 fixed">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>
          <nav className='space-y-5 mt-10'> 
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">&.</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">working/chilling</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">só música legal.</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">pra ouvir na chuva.</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-4xl mt-10 lg:text-center"> Good Afternoon </h1>

          <div className="grid grid-cols-3 lg:grid-cols-1 md:grid-cols-1 gap-4 mt-4">
            <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xl:gap-1 lg:flex-col xl:justify-center xl:w-full'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do Album do Pink Floyd" className="lg:w-full h-full"/>
              <strong className="text-center"> The Dark Side of the Moon </strong>
              <button className="h-12 w-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
            <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xl:gap-1 lg:flex-col xl:justify-center xl:w-full'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do Album do Pink Floyd" className="lg:w-full h-full"/>
              <strong className="text-center"> The Dark Side of the Moon </strong>
              <button className="h-12 w-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a><a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xl:gap-1 lg:flex-col xl:justify-center xl:w-full'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do Album do Pink Floyd" className="lg:w-full h-full"/>
              <strong className="text-center"> The Dark Side of the Moon </strong>
              <button className="h-12 w-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a><a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xl:gap-1 lg:flex-col xl:justify-center xl:w-full'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do Album do Pink Floyd" className="lg:w-full h-full"/>
              <strong className="text-center"> The Dark Side of the Moon </strong>
              <button className="h-12 w-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a><a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xl:gap-1 lg:flex-col xl:justify-center xl:w-full'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do Album do Pink Floyd" className="lg:w-full h-full"/>
              <strong className="text-center"> The Dark Side of the Moon </strong>
              <button className="h-12 w-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a><a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xl:gap-1 lg:flex-col xl:justify-center xl:w-full'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do Album do Pink Floyd" className="lg:w-full h-full"/>
              <strong className="text-center"> The Dark Side of the Moon </strong>
              <button className="h-12 w-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
          </div>

          <h2 className="font-bold text-2xl mt-10 md:text-center"> Made for Matheus </h2>

          <div className="grid grid-cols-8 md:grid-cols-2 gap-4 mt-4 mb-28">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white-10">
              <Image className='w-full' src="/album2.jpg" width={120} height={120} alt="Capa do Album do Foo Fighters"/>
              <strong className="font-semibold"> Daily Mix 1 </strong>
              <span className='text-sm text-zinc-400'> Wallow, COINm, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white-10">
              <Image className='w-full' src="/album2.jpg" width={120} height={120} alt="Capa do Album do Foo Fighters" />
              <strong className="font-semibold"> Daily Mix 1 </strong>
              <span className='text-sm text-zinc-400'> Wallow, COINm, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white-10">
              <Image className='w-full' src="/album2.jpg" width={120} height={120} alt="Capa do Album do Foo Fighters" />
              <strong className="font-semibold"> Daily Mix 1 </strong>
              <span className='text-sm text-zinc-400'> Wallow, COINm, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white-10">
              <Image className='w-full' src="/album2.jpg" width={120} height={120} alt="Capa do Album do Foo Fighters" />
              <strong className="font-semibold"> Daily Mix 1 </strong>
              <span className='text-sm text-zinc-400'> Wallow, COINm, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white-10">
              <Image className='w-full' src="/album2.jpg" width={120} height={120} alt="Capa do Album do Foo Fighters" />
              <strong className="font-semibold"> Daily Mix 1 </strong>
              <span className='text-sm text-zinc-400'> Wallow, COINm, girl in red and more</span>
            </a>
          </div>

        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between fixed bottom-0 left-0 w-full">
          {/* w-60 para centralizar */}
          <div className='flex items-center gap-2 w-60'>
            <Image src="/album2.jpg" width={48} height={48} alt="Capa do Album do Foo Fighters" />
            <div className='flex flex-col'>
              <strong className='font-normal'>Rope</strong>
              <span className='text-xs text-zinc-400'>Foo Fighters</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className='flex items-center gap-6'>
              <Shuffle size={20} className='text-zinc-200'/>
              <SkipBack size={20} className='text-zinc-200'/>

              <button className="h-10 w-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black">
                <Play fill="bg-zinc-400"/>
              </button>

              <SkipForward size={20} className='text-zinc-200'/>
              <Repeat size={20} className='text-zinc-200'/>
            </div>
            <div className="flex items-center gap-2">
              <span className='text-xs text-zinc-500'>0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
              </div>
              <span className='text-xs text-zinc-500'>2:14</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20}/>
            <div className='flex items-center gap-1'>
              <Volume size={20} />
              <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className="bg-zinc-200 w-11 h-1 rounded-full"></div>
              </div>
            </div>
            <Maximize2 size={20}/>
          </div>
      </footer>
    </div>
  )
}