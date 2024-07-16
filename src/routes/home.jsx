import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import MainCarousel from "../components/MainCarousel";
import { IoLogoInstagram } from "react-icons/io5";
import { Carousel } from "flowbite-react";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbFileLike } from "react-icons/tb";

const HomePage = () => {
    const [newArrival, setNewArrival] = useState([])
    const [categories, setCategories] = useState([])

    return (
      <>
        <section className="flex justify-center">
            <div className="w-full h-96 lg:h-[600px]">
                <Carousel slideInterval={5000} >
                    <figure className='h-fit relative'>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." className="w-full" />
                        <div className='flex items-center justify-center p-6 absolute h-full w-full top-0 right-0 left-0 bottom-0'>
                            <div className='w-full text-center p-5 rounded-lg'>
                                <h3 className='w-full text-white font-bold text-2xl'>Join Our Remote Work Revolution!</h3>
                                <p className='w-full text-white font-semibold text-xl mt-1'>Join us in reshaping your work experience, unlocking new possibilities through the power of remote work.</p>
                            </div>
                        </div>
                    </figure>
                    <figure className='h-fit relative'>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." className="w-full" />
                        <div className='flex items-center justify-center p-6 absolute h-full w-full top-0 right-0 left-0 bottom-0'>
                            <div className='w-full text-center p-5 rounded-lg'>
                                <h3 className='w-full text-white font-bold text-2xl'>We are different!</h3>
                                <p className='w-full text-white font-semibold text-xl mt-1'>We’re transforming the BPO industry with our people-centric approach, elevating the quality of our service.</p>
                            </div>
                        </div>
                    </figure>
                    <figure className='h-fit relative'>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." className="w-full" />
                        <div className='flex items-center justify-center p-6 absolute h-full w-full top-0 right-0 left-0 bottom-0'>
                            <div className='w-full text-center p-5 rounded-lg'>
                                <h3 className='w-full text-white font-bold text-2xl'>Tailored solutions!</h3>
                                <p className='w-full text-white font-semibold text-xl mt-1'>We craft solutions as unique as your business using a wide range of platforms, connecting you with the right agents for a personalized experience.</p>
                            </div>
                        </div>
                    </figure>
                    <figure className='h-fit relative'>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." className="w-full" />
                        <div className='flex items-center justify-center p-6 absolute h-full w-full top-0 right-0 left-0 bottom-0'>
                            <div className='w-full text-center p-5 rounded-lg'>
                                <h3 className='w-full text-white font-bold text-2xl'>Supportive Team, Bright Future!</h3>
                                <p className='w-full text-white font-semibold text-xl mt-1'>Realize your potential. Competitive salaries, a caring team, and a fantastic work environment await you!</p>
                            </div>
                        </div>
                    </figure>
                </Carousel>
            </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center my-14 gap-5">
            <div className="flex flex-col order-2 md:order-first justify-end">
                <img src="https://i0.wp.com/iccbpo.com/wp-content/uploads/2023/12/Group-5.png?w=635&ssl=1" alt="" />
            </div>
            <div className="flex flex-col justify-between items-center gap-4 w-full max-w-[710px]">
                <h2 className="text-center text-4xl text-primary font-bold">Choose To Be Different</h2>
                <p>Our mission is clear: to contribute to our client’s success by guaranteeing the best experience and results while creating a positive work experience for each one of our collaborators. We envision a future where we lead the industry as a work-from-home provider, both for our clients and our dedicated collaborators.</p>
                <div className="flex justify-between gap-5 p-4">
                    <LiaFileContractSolid className="w-1/4 h-auto text-primary" />
                    <div className="text-colorText w-3/4">
                        <h4 className="text-primary"><strong>Integrity: The Cornerstone of Our Actions</strong></h4>
                        <p>We firmly believe in doing the right thing, anytime and anywhere. It’s a commitment we uphold, ensuring trust, honesty, and transparency in everything we do.</p>
                    </div>
                </div>
                <div className="flex justify-between gap-5 p-4 w-full">
                    <TbFileLike className=" h-auto text-primary w-1/4" />
                    <div className="text-colorText w-3/4">
                        <h4 className="text-primary font-bold">Honesty: The Key to Success</h4>
                        <p>Being fair, sincere, and transparent is the only way to success. We aim to build trust and foster strong relationships.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center my-14 gap-5 bg-[#6200cb]">
            <div className="flex flex-col order-2 md:order-first items-center gap-16 text-white text-center p-5">
                <h2 className="w-full text-[40px] mt-24">ICC's Guiding Values</h2>
                <p className="w-full text-2xl">Foundations of Excellence:</p>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <article className="flex flex-col items-center gap-3 border rounded bg-[#FFFFFF6B] w-60 h-52 p-4">
                        <LiaFileContractSolid className="size-20"/>
                        <h3>Integrity</h3>
                        <p>We show up and make it happen!</p>
                    </article>
                    <article className="flex flex-col items-center gap-3 border rounded bg-[#FFFFFF6B] w-60 h-52 p-4">
                        <LiaFileContractSolid className="size-20"/>
                        <h3>Agility</h3>
                        <p>We show up and make it happen!</p>
                    </article>
                    <article className="flex flex-col items-center gap-3 border rounded bg-[#FFFFFF6B] w-60 h-52 p-4">
                        <LiaFileContractSolid className="size-20"/>
                        <h3>Ownership</h3>
                        <p>We show up and make it happen!</p>
                    </article>
                </div>
                <Link to={"#"} className="w-[80%] bg-white text-primary rounded-full text-lg px-10 py-2.5">know more about our culture</Link>
            </div>
        </section>
      </>
    );
}

export default HomePage