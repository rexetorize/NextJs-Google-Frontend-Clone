import Head  from 'next/head'
import Header from '../Components/Header'
import { useRef } from 'react'
import {useRouter} from 'next/router'
import {API_KEY, CONTEXT_KEY} from '../keys'
import DummyAPI  from '../DummyAPI'
import Results  from '../Components/Results'
import Pagination from '../Components/Pagination'


export default function search(props) {

  const router = useRouter()
  const searchValueRef = useRef(null)
  const pageNo = Number(router.query.page) 
    
  const search = (e) => {
    e.preventDefault()
    const term = searchValueRef.current.value;

    if (term === '') return;

    router.push(`/search?term=${term}&page=${pageNo}`)
  }

    
    return (
        <>
            <Head>
                <title>{props.searchValue} | Search Results</title>
            </Head>
        <div className="w-full h-full">
          

            <Header searchValueRef={searchValueRef} searchValue={props.searchValue} search={search} />
            
            <Results results={props.results}/>
            <hr/>
            <Pagination results={props.results} />
        </div>
        </>
    )
}


export async function getServerSideProps(context) {

    const useDummyData = false;
   
    
    const data = useDummyData ? DummyAPI : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${context.query.page}`).then(res => res.json())
   
    return {
        props: {
            results: data,
            searchValue: context.query.term
        }
    }
}