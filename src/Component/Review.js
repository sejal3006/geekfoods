import './Review.css'

function Review(props){
    return(
        <div>
            <div className='review'>
                <p>{props.review}</p>
            </div>
            <div className = "details">
                <img src = {props.imgSrc}></img>
                <div>
                    <p className='name'>{props.Name}</p>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;