import React from 'react';
import Review from './Review';
import people1 from '../../Assets/people/people1.png'
import people2 from '../../Assets/people/people2.png'
import people3 from '../../Assets/people/people3.png'
import quote from '../../Assets/people/quote.svg'
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:people1
        },
        {
            _id:2,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:people2
        },
        {
            _id:3,
            name:'Winson Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:people3
        },
    ]
    return (
        <section className='mt-20 px-10'>
        <div className='flex justify-between'>
            <div>
                <h4 className=' text-xl mr-56 text-accent font-bold'>Testimonials</h4>
                <h2 className='text-4xl'>What our patients say</h2>
            </div>
            <div>
                <img src={quote} className='w-24 lg:w-48' alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>)
            }
        </div>
    </section>
    );
};

export default Testimonials;