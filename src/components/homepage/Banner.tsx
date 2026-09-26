import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='bg-black py-20'>

        <div className="grid grid-cols-2 gap-4 items-center container mx-auto p-4 rounded-4xl ">
            <div className='space-y-4'>
                <h4>WORKOUT LIBRARY</h4>
                <h1 className='text-5xl font-bold '>TRAIN WITH INTENT. 
                    LOG<br /> 
                    EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                <button className='btn btn-success'>BROWSE WORKOUTS</button>
            </div>

            <div>
                {/* <Image bannerImg /> */}
                     <Image
            src={bannerImg}
            alt="Workout Banner"
            width={600}
            height={400}
            className="rounded-lg"
          />
            </div>
        </div>
        </section>
    );
};

export default Banner;