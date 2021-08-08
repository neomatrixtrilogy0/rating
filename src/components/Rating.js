import React, {useState} from 'react'
import reviews from '../data'
import Review from './Review'

const Rating = () => {
    const [index, setIndex] = useState(reviews)
    


    const checkNumber = number => {
        if (number > index.length - 1) {
            return 0
        }
        if (number < 0) {
            return index.length -1
        }
        return number
    }
    return (
        <div>
            {index.map(review => {
                const {id, name, job, image, text} = review
                return (
                    <Review key={id} name={name} job={job} image={image} text={text}/>
                )
            })}
        </div>
    )
}

export default Rating
