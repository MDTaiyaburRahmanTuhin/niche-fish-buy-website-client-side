import React from 'react';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import './HomeReviews.css'
const HomeReviews = ({ rating }) => {
    const { user } = useAuth()
    const { description, review } = rating;
    return (
        <div>
            <div className="card border-0 shadow ">
                <div className="card-body">
                    <p>{user.displayName}</p>
                    <p>{description}</p>
                    <p>{review}</p>
                    <Rating initialRating={review} emptySymbol='far fa-star icon-color' fullSymbol='fas fa-star icon-color' readonly></Rating>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;