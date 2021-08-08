import React from 'react'
import Rating from './Rating'

const Index = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="title">
                    <h2 className='header'>Ratings</h2>
                    <div className="underline"></div>
                </div>
            </div>
            <Rating />
            
        </div>
    )
}

export default Index
