import React from 'react'

const About = () => {
    return (
        <div className='w-full h-[170vh] '>
            <div className='w-full h-[80vh] relative flex'>

                <img data-scroll data-scroll-speed=".2" className='absolute h-[100%] left-[10%] -top-40' src="https://a.storyblok.com/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg/m/450x637/filters:format(webp):quality(70)" alt="" />


                <img className='absolute right-[22%] top-10 h-[65%]' src="https://a.storyblok.com/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg/m/650x435/filters:format(webp):quality(70)" alt="" />


                <img data-scroll data-scroll-speed=".2" className='absolute right-[16%] bottom-0 h-[17vw]' src="https://a.storyblok.com/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg/m/450x640/filters:format(webp):quality(70)" alt="" />


            </div>
            <div className='text-black font-[TWK Lausanne]'>
                <h1 className='text-6xl w-1/2 mx-auto mb-7 leading-[4.8vw] tracking-tight'>
                We partner with brands and businesses that create exceptional experiences where people live, work and unwind
                </h1>
                <h4 className='ml-[25.5%] opacity-65 text-[1.2vw] leading-8 tracking-tight ' >Interior Design & Furniture</h4>
                <h4 className='ml-[25.5%] opacity-65 text-[1.2vw] leading-8 tracking-tight' >Architecture & Real Estate</h4>
                <h4 className='ml-[25.5%] opacity-65 text-[1.2vw] leading-8 tracking-tight' >Architecture & Real Estate</h4>
                </div>

        </div>
    )
}

export default About