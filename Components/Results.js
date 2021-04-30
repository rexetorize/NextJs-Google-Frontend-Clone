function Results({results}) {
    

    
    return (

        <div className=" w-full lg:w-5xl px-3 mt-5 md:mt-8 ">

            {/* <p className="lg:ml-32 pb-3 text-gray-500 text-sm text-normal">About {results?.searchInformation.formattedTotalResults} results ({results?.searchInformation.searchTime} seconds)</p> */}

            {results && results.items.map(i => {
                return (<div key={i.title}><div  className="flex flex-col  lg:ml-32 mt-2 lg:mt-4">
                    <a className="break-all text-gray-400 text-sm" href={i.link}>{i.formattedUrl}</a>
                    <a  className="break-all link text-lg md:text-2xl text-blue-800 " href={i.link}>{i.title}</a> 
                    <p className="break-all text-md ">{i.snippet}</p>
                   
                
                </div>
                    <br />
                 </div>)
            })}

        </div>
    )
}

export default Results
