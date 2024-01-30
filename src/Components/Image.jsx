import React from 'react'

const Image = () => {
    return (
        <div className='w-full h-[230vh] bg-zinc-900 relative overflow-hidden'>

            <img data-scroll data-scroll-speed="-1" className='  w-full  object-cover opacity-80' src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/1920x2017/filters:format(webp):quality(70)" alt="" />

            <div className='container w-[76%] h-full mt-72 ml-36 absolute top-0  font-[500] '>
                <h1 className='text-[10vw] leading-none tracking-tighter capitalize '>building</h1>
                <h1 className='text-[10vw] leading-none tracking-tighter capitalize'>digitial</h1>
                <h1 className='text-[10vw] leading-none tracking-tighter capitalize'>presence</h1>
                <p className='pt-8 text-zinc-300 p-2'>Digitial experiences with maximum emotional impact</p>

                <div className='w-[60%] h-full  ml-[55%] mt-[25%] '>
                    <h3 className=' text-[1.6vw]'> We explore and push the boundaries of digital <br /> for brands and businesses that strive to enhance <br /> people's lives through exceptional experiences.</h3>
                    <p className='pt-8 text-zinc-300 leading-normal  tracking-tight text-[1.2vw] '>
                        For over a decade, we've been using profound design <br /> aesthetics, meticulously crafted details, and surprising <br /> interactions to create digital experiences that spark <br />conversation, inspire action, and drive desirability.
                    </p>
                </div>
            </div>



        </div>


    )
}

export default Image
