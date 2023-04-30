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

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }

        if (name.trim().length == 0) {
            setButton(true);}
        if (email.trim().length == 0) {
            setButton(true);}
        if (message.trim().length == 0) {
            setButton(true);}

        if (name.trim().length != 0) {
            if (email.trim().length != 0) {
                if (message.trim().length != 0) {
                    setButton(false);
                    setError('');
                }
            }
        }

    }

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

        if (name.trim().length == 0) {
            setButton(true);}
        if (email.trim().length == 0) {
            setButton(true);}
        if (message.trim().length == 0) {
            setButton(true);}

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

        if (!validateEmail(email)) {
            setError('Email is invalid');
            return
        }
        
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
                        <p className="col-8 text-center">This is the section where I do a write up about me, 
                        how I got here, and what I want to achieve.</p>
                    </div>
                    <form>
                        <input 
                        value={name}
                        name='name'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Please enter your name"
                        />
                        <input 
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="Please enter your email"
                        />
                        <input 
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Please enter a message to leave"
                        />
                        <button 
                        type="button"
                        name="button" 
                        disabled={button} 
                        onClick={handleFormSubmit}
                        >Submit</button>
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