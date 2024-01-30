import { motion } from 'framer-motion'
import React from 'react'


const Black = () => {
    return (
        <div className='w-full h-[360vh] bg-[#0D0E13] relative'>
            <div className=' p-32 w-'>
                <h3 className='mb-10'> How we work</h3>
                <h1 className='text-4xl leading-[3.5vw] tracking-tight'>We believe that all good things are <br /> achieved by those who are willing to put <br /> in passion, courage and craftsmanship.</h1>
            </div>

            <div className='w-1/2 absolute left-[20%]'>
                <h1 className='text-5xl leading-[4.1vw] opacity-80 tracking-tight mb-10 font-semibold'>Elevating <br /> sophistication <br /> across all senses</h1>
                <h3 className='opacity-80 text-[1.2vw]'>We ensure that the high standards and <br /> sophistication of your product are <br /> experienced by all senses while <br /> blurring the lines between the physical <br /> and the digital world. We go deep into <br /> details to provide a holistic experience <br /> that leaves a lasting impression on <br /> your customers and fits seamlessly <br /> into your existing ecosystem.</h3>

                <div className=' absolute w-[40%] top-36 left-[70%]'>
                    <h1 className='text-5xl leading-[4vw] opacity-80 tracking-tight mb-10 font-semibold'>To be human<br />is our greatest <br /> quality</h1>
                    <h3 className='opacity-80 text-[1.2vw]'>We believe that intuition is the most advanced technology we have, and curiosity is our most powerful tool. Our team is guided by the principles of compassion and honesty in our day-to-day communications, and we understand that people value feeling more than information. That's why we pour a lot of soul and passion into our work, delivering experiences that touch people on a deeper level..</h3>
                </div>
            </div>




            <div className='w-full flex items-center  absolute top-[50%] overflow-hidden whitespace-nowrap '>
                <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className='text-[18vw]  flex gap-10 font-semibold leading-none tracking-tight'>
                    Forever Upwards

                    <svg viewBox="0 0 169 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12vw] -mb-10 " data-v-774e5e2b=""><path d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z" fill="currentColor" data-v-774e5e2b=""></path>
                    </svg>







                </motion.div>

                <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className='text-[18vw] flex gap-10  font-semibold leading-none tracking-tight'>
                    Forever Upwards

                    <svg viewBox="0 0 169 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12vw] -mb-20 " data-v-774e5e2b=""><path d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z" fill="currentColor" data-v-774e5e2b=""></path>
                    </svg>







                </motion.div>

            </div>


            <div className='w-full h-96  absolute bottom-96'>
                <div className='w-1/2 absolute left-[20%]'>
                    <h1 className='text-5xl leading-[4.1vw] opacity-80 tracking-tight mb-10 font-semibold'>Simplicity is<br />the dot on<br /> our horizon</h1>
                    <h3 className='opacity-80 text-[1.2vw] '>In today's world, we have become <br /> information-rich and time-poor. It is <br /> those who focus on what really <br /> matters that set the tone. We <br /> approach every project with a keen <br /> eye for simplicity and elegance. Great <br /> digital design is the perfect blend of <br /> form and function that focuses on the <br /> essentials and leaves behind the <br /> frivolous.</h3>

                    <div className=' absolute w-[40%] top-36 left-[70%]'>
                        <h1 className='text-5xl leading-[4vw] opacity-80 tracking-tight mb-10 font-semibold'>Uncompromising<br />standard of <br />excellence</h1>
                        <h3 className='opacity-80 text-[1.2vw]'>We aim to push boundaries and exceed expectations with every project, consistently delivering award-winning digital experiences. We recognize that true art lies in the intricacies, so we approach each project with a meticulous eye for detail and a commitment to crafting tailor-made experiences that capture the essence of your brand. Down to earth but reaching for the stars</h3>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Black