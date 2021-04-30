import Image from 'next/image'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MovieIcon from '@material-ui/icons/Movie';
import ImageIcon from '@material-ui/icons/Image';
import Link from 'next/link'

export default function Header({search, searchValueRef, searchValue}) {
    return (
        <header>
          
            <div className="flex flex-col md:flex-row width-full h-20 md:h-20 items-center  mt-2  mx-2"  >
               <div className="cursor-pointer px-3 flex items-center justify-center">
                     <Image src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" width={92} height="30" />
                </div>

                <div className="h-10 shadow-sm md:h-12 mt-1 w-full md:w-searchbar-md flex items-center justify-center rounded-full border-2 border-gray-200  hover:shadow-md focus-within:shadow-md">
                    <div onClick={search} className="px-3 cursor-pointer"><SearchIcon  /></div>
                         <input ref={searchValueRef} defaultValue={searchValue} type="search " className="flex-grow h-full text-lg focus:outline-none " />
                    <div className="px-3"><MicIcon/></div>
                 </div>
            </div>

            <div className="flex  w-full md:w-searchbar-md h-10 md:h-12 items-center justify-around md:ml-24 md:w-97">
                <div  className="flex text-gray-500 border-b-2 border-blue-800 h-full items-center justify-center  cursor-pointer">
                    <SearchIcon className="" />
                    <p className="font-normal">All</p>
                </div>
                <div className="flex text-gray-500  h-full items-center justify-center  cursor-pointer">
                    <ImageIcon className="" />
                    <p className="font-normal">Images</p>
                </div>
                <div className="flex text-gray-500 broder-b-2  items-center justify-center cursor-pointer">
                    <MovieIcon className="" />
                    <p className="font-normal">videos</p>
                </div>
                <div className="flex text-gray-500  h-full items-center justify-center cursor-pointer">
                    <LocalOfferIcon className="" />
                    <p className="font-normal">shopping</p>
                </div>
            </div>

            <hr></hr>
        </header>
    )
}
