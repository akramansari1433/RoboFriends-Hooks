const Card=(props)=>{
    return(
        <div className='dib bg-light-green ma2 pa3 br3 bw2 grow shadow-5 tc'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robot'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Card;