import { useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import { Label, TextInput, Select, FileInput } from "flowbite-react";
import { HiUser , HiMail } from "react-icons/hi";
import 'react-international-phone/style.css';

const FormApply = ({handleModal, countries}) => {
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        country: "",
        city: "",
    })
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');
    const [cities, setCities] = useState([])
    // console.log(countries);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log({
            fullname: userData.fullname,
            email: userData.email,
            country: userData.country,
            city: userData.city,
            phone,
            file
        });
        handleModal()
      }

    useEffect(()=> {
        if (userData.country !== "") { 
            async function fetchCity(){
                const response = await fetch(`https://www.universal-tutorial.com/api/states/${userData.country}`, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJvcGVyYXRpb25zQHBzYnBvc3YuY29tIiwiYXBpX3Rva2VuIjoiaVloTjJJMTUtZ3dUbEVyU1B2WV9DOERMLVZ3LVRQSEc5U05PTTdXUjJvaWkyT2dBZFhVdjdLQXc2SU5RcG5NNDk1cyJ9LCJleHAiOjE3MjI0OTMzMDZ9.EIBwgbhFRiQYlrNpqfFKEI2A6OCm8NL4ddUA1uijZ0o",
                        "Accept": "application/json"
                    }
                })
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                setCities(data.map(item => item.state_name));
            } 
            fetchCity()
        }
        setCities([])
    },[userData.country])  
  return (
    <div>
        <form onSubmit={handleSubmit} className="w-full flex max-w-md flex-col gap-4">
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="fullname" value="Your fullname" />
                </div>
                <TextInput id="fullname" type="text" icon={HiUser} placeholder="John Kennedy" value={userData.fullname} onChange={handleChange} required />
            </div>
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" type="email" icon={HiMail} placeholder="name@company.com" value={userData.email} onChange={handleChange} required />
            </div>
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="country" value="Select your country"/>
                </div>
                <Select id="country" value={userData.country} onChange={handleChange} required>
                    <option value="">Select Country</option>
                    {countries.map( (item, index) => (
                        <option key={index-item.length-item.length*Math.random()} value={item}>{item}</option>
                    ))}
                </Select>
            </div>
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="city" value="Select your city" />
                </div>
                <Select id="city" value={userData.city} onChange={handleChange} required>
                    <option value="">Select City</option>
                    {cities?.map( (item, index) => (
                        <option key={index-item.length-item.length*Math.random()} value={item}>{item}</option>
                    ))}
                </Select>
            </div>
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="phone" value="Enter your phone number" />
                </div>
                <PhoneInput
                    id="phone"
                    name="phoneInput"
                    defaultCountry="us"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputProps='rounded-lg'
                    required
                />
            </div>
            <div id="fileUpload" className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput id="file" helperText="Your CV information will be saved carefully" onChange={handleFileChange} required />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                >
                    Send Message
                </button>
            </div>
        </form>
    </div>
  )
}

export default FormApply
