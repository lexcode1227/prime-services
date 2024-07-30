import { useState } from 'react'
import { Card } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';

const CareersPage = () => {
    const jobsInformation = useLoaderData();

  return (
    <section className='flex flex-col items-center gap-5 my-14 h-[50vh]'>
        <h2 className="w-full text-[40px] text-center text-primary font-bold">Available Careers</h2>
        <div className='flex flex-col flex-wrap justify-between items-center gap-5'>
            {jobsInformation?.map((job)=>(
                <Card key={job.id} href={`/careers/${job.id}`} className="max-w-sm" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-primary">
                        {job.title}
                    </h5>
                    <div className='flex justify-start gap-5'>
                        <span className='flex items-center gap-2'><FaLocationDot /> {job.styleWork}</span>
                    </div>
                    <p className="font-normal">{job.shortDescription}</p>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default CareersPage