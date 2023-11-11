'use client'

import { useEffect, useState } from 'react';
import { submitContactForm } from "@/services/contact";
import StatusMessagePane from "@/layout/StatusMessagePane";

const Page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('warning');

    useEffect(() => {
        document.title = 'Get In Touch | Chris Centrella';
        return () => {
            document.title = '';
        }
    }, []);

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const submitHandler = async (e) => {

        e.preventDefault();

        const response = await submitContactForm({ name, email, message });
        switch (response['status']) {
            case 200:
                resetForm();
                setStatusMessage('The message was sent successfully!');
                setStatusType('success');
                break;
            case 400:
                setStatusMessage(
                    'Verification failed. Please ensure all fields are properly filled in, and try again.'
                );
                setStatusType('warning');
                break;
            default:
                setStatusMessage(
                    "That's not you; it's us. A system error prevented us from successfully sending your message."
                );
                setStatusType('error');
        }
    }

    return (
        <>
            <p className="section-title thin">Contact Me</p>
            <div className="container">
                <p>
                    Thank you for visiting my website. You can reach out to me via the
                    form below.
                </p>
                <p>If you prefer, you can message me on&nbsp;
                    <a className='emphasis'
                       target='_blank'
                       href="https://linkedin.com/in/ccentrella">LinkedIn</a>.</p>
            </div>

            <StatusMessagePane statusType={statusType}
                           statusMessage={statusMessage}/>

            <form id="contact-form"
                  className="contact-form"
                  onSubmit={(e) => submitHandler(e)}>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    className="field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <textarea
                    placeholder="Message"
                    required
                    className="field field-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />

                <button className="field submit-button">Send Message</button>
            </form>
        </>
    );
}

export default Page;
