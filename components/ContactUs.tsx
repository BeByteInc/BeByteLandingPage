import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

export default function ContactUs({ }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:support@bebyte.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. 
    ${formData.message}`
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='title'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10 mt-5 md:mt-28'>
        <h4 className='text-l md:text-2xl font-semibold text-center'>
          We have got what you need. {" "}
          <span className='decoration-gray-900/50 underline'>Contact Us</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-gray-900 h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-md md:text-xl font-semibold'>+905417878485</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-gray-900 h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-md md:text-xl font-semibold'>support@bebyte.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-gray-900 h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-md md:text-xl font-semibold'>Kahramanmaraş</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />

          <button className='bg-gray-900 py-5 px-10 rounded-md text-white font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}