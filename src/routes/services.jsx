import React from 'react'

const ServicesPage = () => {
  return (
    <>
      <section className="flex justify-center bg-white mt-24 pb-10 pt-20 lg:pb-20 lg:pt-[120px] lg:px-[50px] lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap max-w-full">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-full text-justify lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Discover the Power of Smart Investments
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Solutions
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Welcome to our world of solutions designed to simplify your experience! In our digital corner, you’ll find a dedicated team turning challenges into solutions.
                  We are passionate about transforming your challenges into successes and are excited to have you on board!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap max-w-full">
            <BlogCard
              date="Interpreting"
              CardTitle="Over The Phone Interpretation"
              CardDescription="Over-the-phone interpretation (OPI) is a service where an interpreter bridges the communication gap between two parties speaking different languages through a three-way call. The interpreter may be located either on-site with the client or remotely."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Interpreting"
              CardTitle="Video Remote Interpretation"
              CardDescription="Video Remote Interpretation (VRI) is a service where an interpreter facilitates communication between two parties who speak different languages via a video call. The interpreter may be situated either in the same location as the client or in a remote setting, providing visual and auditory support to enhance the interaction."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div className='text-justify'>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
