import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

import { slideIn } from '../utils/motion';


import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const [emailCopied, setEmailCopied] = useState(false);




  const success = () => {
    toast.success(<div>Email sent!<br />I will respond via email shortly.</div >, {
      icon: "📨",
      transition: Flip,
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const failure = () => {
    toast.error('Looks like there was an error.', {
      transition: Flip,
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    });
  };

  const copied = () => {
    toast.success('Email copied to clipboard.', {
      icon: "👻",
      transition: Flip,
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  const handleEmailClick = () => {
    const email = 'Jonathan.giraud4@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setEmailCopied(true);
        copied();
      })
      .catch((error) => {
        console.error('Failed to copy email: ', error);
      });
  };


  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  const [emailTouched, setEmailTouched] = useState(false); // Track if email field has been touched

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'email') {
      setValidEmail(validateEmail(value));
    } else if (name === 'name') {
      setValidName(value.trim() !== '');
    } else if (name === 'message') {
      setValidMessage(value.trim() !== '');
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === 'email') {
      setEmailTouched(true); // Set emailTouched to true when the email field is blurred
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_wqe2sge',
        'template_5rxgoe7',
        {
          from_name: form.name,
          to_name: 'Jonathan',
          from_email: form.email,
          to_email: 'Jonathan.giraud4@gmail.com',
          message: form.message,
        },
        'oLL9t_diSSDf7Fbd4'
      )
      .then(
        () => {
          setLoading(false);
          success();
          setForm({
            name: '',
            email: '',
            message: '',
          });
          setValidName(false);
          setValidMessage(false);
          setValidEmail(false);
          setEmailTouched(false);
        },
        (error) => {
          failure();
          setLoading(false);
          console.error(error);
        }

      );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isSubmitDisabled = !(validEmail && validName && validMessage);

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <ToastContainer />
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Leave a message,</p>
        <h3 className={styles.sectionHeadText}>contact me:</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="How would you like to be addressed?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              placeholder="What is your email?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ${!validEmail && emailTouched ? 'border-red-500' : ''
                }`}
            />
            {!validEmail && emailTouched && (
              <span className='text-red-500 text-sm'>Please enter a valid email address.</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='What would you like to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <div className="flex justify-between">
            <button
              type='submit'
              className={`bg-tertiary py-3 px-8 font-bold shadow-md shadow-primary outline-none w-fit text-white rounded-xl ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitDisabled}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <div className={`flex items-center`} onClick={handleEmailClick}>
              <FaEnvelope className="mr-2" />
              <span className={`text-white email-text ${emailCopied ? 'glow-animation' : ''}`}>
                Jonathan.giraud4@gmail.com
              </span>
            </div>
          </div>



        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-atuo md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
