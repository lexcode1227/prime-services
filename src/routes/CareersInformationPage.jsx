import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { Modal, List } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import FormApply from '../components/FormApply';
import { API_URL, COUNTRIES_API_TOKEN, COUNTRIES_USER_EMAIL } from '../../config';

const CareersInformationPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [countries, setCountries] = useState([])
    const jobInformation = useLoaderData();
  
    if (!jobInformation) {
      return <div className='h-screen'>Job not found</div>;
    }
  
    const job = jobInformation[0];
    const handleModal = ()=> {
      setOpenModal(false)
    }

    useEffect(()=> {
      const fetchCountriesWithToken = async (token) => {
        const response = await fetch(`${API_URL}/countries`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
        });
  
        if (!response.ok) {
          if (response.status === 500) {
            const newToken = await getAccessToken();
            if (newToken) {
              fetchCountriesWithToken(newToken);
            }
          } else {
            throw new Error(`Response status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          setCountries(data.map(item => item.country_name));
        }
      }
  
      const getAccessToken = async () => {
        const response = await fetch(`${API_URL}/getaccesstoken`, {
          headers: {
            "Accept": "application/json",
            "api-token": COUNTRIES_API_TOKEN,
            "user-email": COUNTRIES_USER_EMAIL
          }
        });
  
        if (!response.ok) {
          throw new Error(`Token fetch error: ${response.status}`);
        }
  
        const data = await response.json();
        const expirationTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem('BEARER_TOKEN', data.auth_token);
        localStorage.setItem('TOKEN_EXPIRATION', expirationTime);
        return data.auth_token;
      }

      const checkToken = async () => {
        const storedToken = localStorage.getItem('BEARER_TOKEN');
        const tokenExpiration = localStorage.getItem('TOKEN_EXPIRATION');
  
        if (storedToken && tokenExpiration && Date.now() < tokenExpiration) {
          fetchCountriesWithToken(storedToken);
        } else {
          const newToken = await getAccessToken();
          fetchCountriesWithToken(newToken);
        }
      }
  
      checkToken();
  },[])
  
    return (
      <section className="bg-white mt-24">
          <Link to={"/careers"} className="ml-3 mt-14 inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm rounded-full bg-primary" role="alert">
            <span className="text-sm  rounded-full text-white px-4 py-1.5 mr-3 flex items-center gap-2"> <IoIosArrowBack /> Back to Careers List </span>     
          </Link>
          <div className="flex flex-col items-center gap-3 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12">
              <span className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full" role="alert">
                  <span className="text-sm bg-primary rounded-full text-white px-4 py-1.5 mr-3 flex items-center gap-2"> <FaLocationDot /> {job.styleWork}</span> <span className="text-sm font-medium">We invest in the world’s potential</span> 
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </span>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {job.title}
              </h1>
              <p className="mb-4 text-lg text-justify font-normal lg:text-xl">    
                {job.longDescription}
              </p>
              <div className="flex flex-col mb-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <button onClick={() => setOpenModal(true)} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-primary dark:focus:ring-primary">
                      Apply Now
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button> 
              </div>
              <div className='flex flex-col items-start gap-3 mt-5 w-full'>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Requirement:</h2>
                <List className='text-justify'>
                  {job.requirement?.split("|").map((item, index)=> (
                    <List.Item className='' key={`${index}-${item.length}`}>{item}</List.Item>
                  ))}
                </List>
              </div>
              <div className='flex flex-col items-start gap-3 mt-5 w-full'>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Benefits:</h2>
                <List className='text-justify'>
                  {job.benefits?.split("|").map((item, index)=> (
                    <List.Item key={`${index}-${item.length}`}>{item}</List.Item>
                  ))}
                </List>
              </div>
              <div className='flex flex-col items-start gap-3 mt-5 w-full'>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Responsabilities:</h2>
                <List className='text-justify'>
                  {job.responsabilities?.split("|").map((item, index)=> (
                    <List.Item key={`${index}-${item.length}`}>{item}</List.Item>
                  ))}
                </List>
              </div>
              <div className='flex flex-col items-start gap-3 mt-5 w-full'>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Skills:</h2>
                <List className='text-justify'>
                  {job.skills?.split("|").map((item, index)=> (
                    <List.Item key={`${index}-${item.length}`}>{item}</List.Item>
                  ))}
                </List>
              </div>
          </div>
          <Modal show={openModal} size="lg" popup onClose={handleModal}>
            <Modal.Header />
            <Modal.Body>
                <FormApply handleModal={handleModal} countries={countries} />
            </Modal.Body>
          </Modal>
      </section>
    );
  };

export default CareersInformationPage