import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [button, setButton] = useState(true)

    const handleInputChange = (e: any) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //sets values submitted to their corresponding const
        //these values can be used once connected to backend
        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }

        //tests if any fields are empty and disables submit button
        if (name.trim().length == 0) {
            setButton(true);}
        if (email.trim().length == 0) {
            setButton(true);}
        if (message.trim().length == 0) {
            setButton(true);}

            // test if all fields are filled and allows submit button to be clicked
        if (name.trim().length != 0) {
            if (email.trim().length != 0) {
                if (message.trim().length != 0) {
                    setButton(false);
                    setError('');
                }
            }
        }

    }

    //if a form input loses focus while empty, triggres an error message with instructions
    const handleBlur = (e: any) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            if (inputValue.trim().length == 0){
            setError('Name cannot be blank')}
        } else if (inputType === 'email') {
            if (inputValue.trim().length == 0){
                setError('Email cannot be blank')}
        } else {
            if (inputValue.trim().length == 0){
                setError('Message cannot be blank')}
        }

        //submit button checks - disables if any field is empty
        if (name.trim().length == 0) {
            setButton(true);}
        if (email.trim().length == 0) {
            setButton(true);}
        if (message.trim().length == 0) {
            setButton(true);}

            //submit button checks - enables if all fields have an entry
        if (name.trim().length != 0) {
            if (email.trim().length != 0) {
                if (message.trim().length != 0) {
                    setButton(false);
                    setError('');
                }
            }
        }
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        //uses helpers.js in utils folder to test email syntax
        if (!validateEmail(email)) {
            setError('Email is invalid');
            return
        }
        
        //notifies user that submit was completed successfully
        alert(`Hello ${name}.  Thank you for stopping by!`);

        setName('');
        setEmail('');
        setMessage('');
        setError('');
        setButton(true);
    }

    return (
        <div className="wholePage container">
            <div className="row">
                <div className="imageBanner contactImg col-4"></div>
                <div className="col-8">
                    <div className="sectionHeader row">
                        <h2>Contact</h2>
                    </div>
                    <div className="sectionBody row justify-content-center">
                        <p className="col-8 text-center">You can contact me by email any time 
                        at <a href="mailto:quickfire25@yahoo.com">quickfire25@yahoo.com</a>, my
                        <a href="https://github.com/SotoTheMayor" target="_blank"> developer</a> and 
                        <a href="https://www.linkedin.com/in/jason-johnson-jd-02a220aa/" target="_blank"> professional </a> 
                        profiles are linked at the bottom of the page, or feel free to leave a message below!</p>
                    </div>
                    <form>
                        <div className="row">
                        <p className="col-2 text-end"><em>Name:</em></p>
                            <input 
                            value={name}
                            name='name'
                            className="col-10"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Please enter your name"
                            />
                        </div>
                        <div className="row">
                        <p className="col-2 text-end"><em>Email:</em></p>
                            <input 
                            value={email}
                            name='email'
                            className="col-10"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Please enter your email"
                            />
                        </div>
                        <div className="row">
                            <p className="col-2 text-end"><em>Message:</em></p>
                            <textarea 
                            value={message}
                            name='message'
                            className="col-10"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="Please enter a message to leave"
                            />
                        </div>
                        <div className="row justify-content-end">
                            <button 
                            type="button"
                            name="button" 
                            className="col-2"
                            disabled={button} 
                            onClick={handleFormSubmit}
                            >Submit</button>
                        </div>
                    </form>
                    {error && (
                        <div>
                            <p className="errorMessage">{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact