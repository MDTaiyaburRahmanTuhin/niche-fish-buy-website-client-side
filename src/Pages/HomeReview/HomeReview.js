import React, { useEffect, useState } from 'react';
import HomeReviews from './HomeReviews';

const HomeReview = () => {
    const [ratings, setRating] = useState([])
    useEffect(() => {
        fetch('https://ancient-sea-96085.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setRating(data))
    }, [])
    return (
        <div>
            <h2>Review</h2>
            <div className="container">
                <div className="row">
                    {
                        ratings.map(rating => (
                            <div className='col-lg-4 col-md-6 col-12 mb-4'>
                                <HomeReviews
                                    key={rating._id}
                                    rating={rating}
                                ></HomeReviews>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeReview;