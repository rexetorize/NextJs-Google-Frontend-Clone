import Head from 'next/head'
import Image from 'next/image'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useRef} from 'react'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()
  const searchValueRef = useRef(null)
  
  const search = (e) => {
    e.preventDefault()
    const term = searchValueRef.current.value;

    if (term === '') return;

    router.push(`/search?term=${term}&page=${0}`)
  }

  return (
    <div >
      <Head>
        <title>Google-Next.Js Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div className="w-full h-10 flex justify-end space-x-4 p-4 lg:p-8 items-center">
       
        <p className="link">Gmail</p>
        <p className="link">Images</p>
       
        <div className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>


        <div className="size-lg transition duration-150 transform hover:scale-150 cursor-pointer"><AccountCircleIcon /></div>
     
      </div>


      {/* Body */}

      
      <form className="w-full flex items-center justify-center">
        <div className=" w-100 mt-20 px-3 flex flex-col items-center justify-center mt-32 lg:mt-48">
        <Image src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" width={300} height="100" />
        <div className="w-full h-12  flex items-center justify-center rounded-full border-2 border-gray-200 mt-4 hover:shadow-md focus-within:shadow-md">
          <div className="px-3 cursor-pointer"><SearchIcon  /></div>
          <input ref={searchValueRef} type="search " className="flex-grow h-full text-lg focus:outline-none " />
          <div className="px-3"><MicIcon/></div>
          </div>
          <div className=" flex flex-col lg:flex-row  items-center justify-center mt-5 lg:mt-5 ">
            <div onClick={search} className="w-44  h-10 bg-gray-100 flex items-center justify-center my-2 lg:mx-2 cursor-pointer hover:bg-gray-200 "><p>Google Search</p></div>
            <div onClick={search} className="w-44 h-10 bg-gray-100 flex items-center justify-center my-2 lg:mx-2 cursor-pointer hover:bg-gray-200"><p>I'm Feeling Lucky</p></div>
          </div>
        </div>
      </form>
      {/* Footer */}

      <footer className="w-full h-20 bg-gray-200 ele-btm flex justify-space-between md:justify-start space-x-4 p-4 lg:p-8 items-center">
          
            <p className="link">About</p>
            <p className="link">Advertising</p>
            <p className="link">Bussines</p>
            <p className="link">How Search works</p>
       
      </footer>
    </div>
  )
}
