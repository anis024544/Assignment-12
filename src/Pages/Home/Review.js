import React from 'react';

const Review = ({review}) => {
    return (
        <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          
          <p>{review.review}</p>

          <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img className="w-16" src={review.img} alt=''/>
              </div>
            </div>
            <div >
            <h2 className="text-xl">{review.name}</h2>
            <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Review;