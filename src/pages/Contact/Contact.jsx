import React from 'react'
import Heading from "../../helper/Heading/Heading";
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import "./contact.css"
import RequestSubmit from '../../shared/RequestSubmit/RequestSubmit';

const Contact = () => {
  return (
    <section className='contactus'>
      <h1 className='hero__heading'>Contact with Us</h1>
      <RequestSubmit />
    </section>
  )
}

export default Contact