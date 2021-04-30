import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from 'next/link';
import {useRouter} from 'next/router';

function Pagination({ results }) {
    const router = useRouter()
    const pageNo = Number(router.query.page) 
   


    return (
        <div className="w-full lg:w-5xl px-3 mt-5 md:mt-8 mr-8 mb-2 ">
            <div className="flex   lg:ml-32 mt-2 lg:mt-4 px-8  pb-2 justify-around">
                {pageNo > 0 && <Link href={`/search?term=${router.query.term}&page=${pageNo - 10}`}><div className="cursor-pointer flex flex-col items-center justify-center">
                    <ArrowBackIosIcon  />
                    <p className="link text-blue-800">Prev</p>
            </div></Link>}
            
           {results.queries.nextPage !== undefined &&  <Link href={`/search?term=${router.query.term}&page=${pageNo + 10}`}><div className="cursor-pointer flex flex-col items-center justify-center" >
                    <ArrowForwardIosIcon  />
                    <p className="link text-blue-800">Next</p>
                </div>
                
            </Link>}

            </div>
        </div>
    )
}

export default Pagination
