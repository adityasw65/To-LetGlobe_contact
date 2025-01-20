import React, { useState } from "react";
import axios from "axios";

function Contact() {
   const [topic, setTopic] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const sendData = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      // Email validation regex
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Validation checks
      if (topic && name && email && message) {
         if (!regexEmail.test(email)) {
            alert("Please enter a valid email.");
            return;
         }

         // Data to send in the request
         const formData = {
            topic,
            name,
            email,
            message,
         };

         try {
            // Fetch POST request
            const response = await fetch(
               "https://contact-us-backend-1.onrender.com/api/contact",
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData), // Convert data to JSON string
               }
            );

            // Handle success or error
            if (response.ok) {
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
      <form onSubmit={sendData}>
         <div>
            <label>Topic:</label>
            <input
               type="text"
               value={topic}
               onChange={(e) => setTopic(e.target.value)}
               required
            />
         </div>
         <div>
            <label>Name:</label>
            <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
            />
         </div>
         <div>
            <label>Email:</label>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </div>
         <div>
            <label>Message:</label>
            <textarea
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               required
            ></textarea>
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}

export default Contact;
