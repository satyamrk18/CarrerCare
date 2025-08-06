import React from "react";
import "./Contact.css";     


const Contact =()=>{
return(
    <>
    <h1>Contact Page </h1>
    <h2>Get in Touch</h2>
    <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
    </form>
    </>
)
}
export default Contact;
