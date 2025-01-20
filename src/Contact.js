import React, { useState } from 'react';
import axios from 'axios';

function Contact() {

   const [topic, setTopic] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const sendData = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (topic && name && email && message) {
         if (!regexEmail.test(email)) {
            alert("Please enter a valid email.");
            return;
         }

         // Construct the data to send
         const formData = {
            topic,
            name,
            email,
            message
         };

         try {
            // Make an Axios POST request
            const response = await axios.post('https://contact-us-backend-1.onrender.com/api/contact', formData);

            if (response.status === 200) {
               alert("Your query has been submitted successfully!");
               setTopic("");
               setName("");
               setEmail("");
               setMessage("");
            } else {
               alert("Something went wrong. Please try again later.");
            }
         } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred while submitting the form. Please try again later.");
         }
      } else {
         alert("Please fill in all the fields.");
      }
   };

   return (
      <>
         <section className='mt-28 mb-20' id='contact'>
            <div className="grid md:grid-cols-2 gap-12 md:px-10 md:gap-12 lg:px-24 px-3 lg:gap-20 font-websiteFont">

               {/* left part of contact page  */}
               <div id='left-part'>
                  <div className=''>
                     <h1 className='text-3xl lg:pr-28 font-medium text-white'>Contact Us, We're Ready to Help!</h1>
                     <p className='mt-5 lg:pr-28 text-[#9CA3AF]'>
                        We strive to provide you with the best experience and the best platform to find your choice.
                     </p>
                     <p className='mt-5 text-[#9CA3AF]'>
                        Post us any queries and we'll get back to you
                     </p>
                  </div>
                  <div className='flex mt-5 md:mt-14 gap-10'>
                     <div>
                        <i className="fa-regular fa-comments text-5xl "></i>
                     </div>
                     <div className=''>
                        <h2 className='text-xl'>Chat with us !!</h2>
                        <p className='text-[#dededeac]'>Our friendly team is here to help</p>
                        <a href="mailto: hello@toletglobe.in" className='text-custom-teal'>to_let@gmail.com</a>
                     </div>
                  </div>
                  <div className='flex mt-5 gap-12'>
                     <div>
                        <i className="fa-solid fa-phone text-5xl"></i>
                     </div>
                     <div className=''>
                        <h2 className='text-xl'>Call us...</h2>
                        <p className='text-[#dededeac]'>Mon-Fri 8 am to 10 pm</p>
                        <a href="tel: +91 9876543210" className='text-custom-teal'>+91 9876543210</a>
                     </div>
                  </div>
               </div>

               {/* right part of contact page  */}
               <div id='right-part'>
                  <form className='flex flex-col gap-5' onSubmit={sendData}>

                     {/* topic selection  */}
                     <div className='flex flex-col gap-2'>
                        <label htmlFor="topicList" className='text-[#9CA3AF] text-md'>
                           Topic
                        </label>
                        <select name="topicList" id="topicList" className='text-md py-3 pl-4 rounded-lg bg-black text-[#9CA3AF] border' onChange={(e) => setTopic(e.target.value)} value={topic} required>
                           <option value="" className='text-lg py-3 pl-4 rounded-lg bg-white border text-[#9CA3AF] font-websiteFont hover:text-black'>Select a topic</option>
                           <option value="Residential">Residential</option>
                           <option value="Commercial">Commercial</option>
                           <option value="Others">Others</option>
                        </select>
                     </div>

                     {/* user name  */}
                     <div className='flex flex-col gap-2'>
                        <label htmlFor="user" className='text-[#9CA3AF] text-md'>
                           Name
                        </label>
                        <input type="text" name="user" id="user" placeholder='johndoe' autoComplete='off' className='text-md py-3 pl-4 rounded-lg bg-black border' onChange={(e) => setName(e.target.value)} value={name} required />
                     </div>

                     {/* email id  */}
                     <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-[#9CA3AF] text-md'>
                           Email
                        </label>
                        <input type="email" name="email" id="email" placeholder='name@provider.com' autoComplete='off' className='text-md py-3 pl-4 rounded-lg bg-black border' onChange={(e) => setEmail(e.target.value)} value={email} required />
                     </div>

                     {/* message  */}
                     <div className='flex flex-col gap-2'>
                        <label htmlFor="message" className='text-[#9CA3AF] text-md'>
                           Message
                        </label>
                        <textarea name="message" id="message" rows={4} placeholder='Type your message...' autoComplete='off' className='text-md py-3 pl-4 rounded-lg bg-black border' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                     </div>

                     {/* submit button  */}
                     <button type="submit" className='bg-[#6CC1B6] text-black font-normal py-3 rounded-lg'>Submit Query</button>

                  </form>
               </div>
            </div >
         </section >
      </>
   );
}

export default Contact;
