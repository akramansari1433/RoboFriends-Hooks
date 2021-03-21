

const SearchBox=({searchChange})=>{
    return(
       <div className='pa3'> 
           <input 
                className='pa3 ba b--green bg-lightest-blue br3' 
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
           />
        </div>
    )
}

export default SearchBox;