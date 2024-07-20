import React from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const FormApply = () => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <ContactInputBox
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Kennedy"
                  />
                  <label htmlFor="email">Email</label>
                  <ContactInputBox
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="phone">Phone Number</label>
                  <PhoneInput
                    id="phone"
                    defaultCountry="us"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    className='mt-3 mb-6 rounded border border-solid border-[#6B7280]'
                  />
                  <label htmlFor="details">Your Message</label>
                  <ContactTextArea
                    row="6"
                    placeholder="Write what you need..."
                    name="details"
                    id="details"
                    defaultValue=""
                  />
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

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
      <>
        <div className="mt-3 mb-6">
          <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
            defaultValue={defaultValue}
          />
        </div>
      </>
    )
}
  
  const ContactInputBox = ({ type, placeholder, name, id }) => {
    return (
      <>
        <div className="mt-3 mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            required
            className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          />
        </div>
      </>
    );
};