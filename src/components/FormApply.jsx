import { useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import { Label, TextInput, Select, FileInput } from "flowbite-react";
import { HiUser , HiMail } from "react-icons/hi";
import 'react-international-phone/style.css';
import { API_URL } from '../../config';

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
            const storedToken = localStorage.getItem('BEARER_TOKEN');
            async function fetchCity(){
                const response = await fetch(`${API_URL}/states/${userData.country}`, {
                    headers: {
                        "Authorization": `Bearer ${storedToken}`,
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
                <FileInput id="file" accept='.pdf' helperText="Your CV information will be saved carefully" onChange={handleFileChange} required />
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
