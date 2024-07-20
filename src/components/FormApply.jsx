import { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import { Label, TextInput, Select, FileInput } from "flowbite-react";
import { HiUser , HiMail } from "react-icons/hi";
import 'react-international-phone/style.css';

const FormApply = ({handleModal}) => {
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        country: "",
        city: "",
    })
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');
    
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
        console.log(userData);
        console.log(phone);
        console.log(file);
        handleModal()
      }
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
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
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
            </div>
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="city" value="Select your city" />
                </div>
                <Select id="city" value={userData.city} onChange={handleChange} required>
                    <option value="">Select City</option>
                    <option>San Salvador</option>
                    <option>San Miguel</option>
                    <option>Santa Ana</option>
                    <option>La Libertad</option>
                </Select>
            </div>
            <div className="max-w-2xl">
                <div className="mb-2 block">
                    <Label htmlFor="phone" value="Enter your phone number" />
                </div>
                <PhoneInput
                    id="phone"
                    defaultCountry="us"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputProps='rounded-lg'
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
