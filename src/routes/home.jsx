import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbFileLike } from "react-icons/tb";
import { FaAward, FaHandshakeSimple } from "react-icons/fa6";
import { FaUserShield, FaHandHoldingUsd } from "react-icons/fa";
import FAQ from "../components/FAQ";

const HomePage = () => {
    return (
      <>
        <section className="flex justify-center mt-[116px]">
            <div className="w-full h-80 lg:h-[600px] px-4">
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
        <section className="flex flex-col lg:flex-row justify-center my-14 px-4 gap-5">
            <div className="flex flex-col order-2 md:order-first justify-end">
                <img className="max-w-full lg:max-w-[600px]" src="https://res.cloudinary.com/dwuv0l98b/image/upload/ar_1:1,c_crop,g_center/wsdzttgu8jvy4qo62e4o.jpg" alt="girl working for our company" />
            </div>
            <div className="flex flex-col justify-between items-center gap-4 text-justify w-full max-w-[710px]">
                <h2 className="text-center text-4xl text-primary font-bold">We aim for a change</h2>
                <p>We are dedicated to transforming the lives of our team members by offering a work experience that prioritizes quality of life. We provide the opportunity to work from the comfort of home, allowing for a flexible schedule that accommodates personal needs and promotes work-life balance. We recognize and reward the hard work of our interpreters with fair and competitive compensation, ensuring that our employees feel valued and appreciated. Our mission is to create a supportive and enriching environment where everyone can thrive, professionally and personally.</p>
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
        <section className="flex flex-col md:flex-row justify-center my-14 gap-5 bg-gradient-to-t from-[#004aad] from-10% via-[#5654d2] via-30% to-[#1d1d95] to-95%">
            <div className="flex flex-col order-2 md:order-first items-center gap-16 text-white text-center px-5 py-24">
                <h2 className="w-full text-[40px] font-bold">PSBPO's Guiding Values</h2>
                <p className="w-full text-2xl">Foundations of Excellence:</p>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center items-center">
                    <article className="flex flex-col items-center gap-3 border rounded bg-transparent w-60 h-80 p-4 text-justify">
                        <FaAward className="size-20"/>
                        <h3 className="font-bold">Quality</h3>
                        <p>Delivering top-notch interpretation services that consistently exceed industry standards. Ensuring client satisfaction through accuracy and professionalism.</p>
                    </article>
                    <article className="flex flex-col items-center gap-3 border rounded bg-transparent w-60 h-80 p-4 text-justify">
                        <FaUserShield className="size-20"/>
                        <h3 className="font-bold" >Integrity</h3>
                        <p>Conducting business with transparency, fostering trust with clients and interpreters. Upholding high ethical standards and maintaining confidentiality.</p>
                    </article>
                    <article className="flex flex-col items-center gap-3 border rounded bg-transparent w-60 h-80 p-4 text-justify">
                        <FaHandshakeSimple className="size-20"/>
                        <h3 className="font-bold" >Reliability</h3>
                        <p>Providing consistent, dependable support to our clients at all times. Ensuring timely and effective communication to meet client needs.</p>
                    </article>
                    <article className="flex flex-col items-center gap-3 border rounded bg-transparent w-60 h-80 p-4 text-justify">
                        <FaHandHoldingUsd className="size-20"/>
                        <h3 className="font-bold" >Efficiency</h3>
                        <p>Maximizing operational efficiency for cost-effective services. Continuously streamlining processes to reduce waste and enhance turnaround times.</p>
                    </article>
                </div>
                <Link to={"/about-us"} className="w-full sm:max-w-[340px] bg-white text-primary rounded-full font-bold text-lg px-10 py-2.5 cursor-pointer">Know more about our culture</Link>
            </div>
        </section>
        <section>
            <FAQ/>
        </section>
      </>
    );
}

export default HomePage