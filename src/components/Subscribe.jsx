'use client'

import {useState} from 'react';
import StatusMessagePane from "@/layout/StatusMessagePane";
import {subscribe} from "@/services/subscribe";

const Subscribe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('warning');

    const resetForm = () => {
        setName('');
        setEmail('');
    }

    const submitHandler = async (e) => {

        e.preventDefault()

        const response = await subscribe({name, email_address: email});
        switch (response['status']) {
            case 200:
                resetForm();
                setStatusMessage('Thank you for subscribing!');
                setStatusType('success');
                break;
            case 409:
                setStatusMessage(
                    'You are already subscribed. Please check your spam folder if you are not receiving messages.'
                );
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
                    "That's not you; it's us. A system error prevented us from completing your subscription request."
                );
                setStatusType('error');
        }
    }

    return (
        <>
            <StatusMessagePane statusType={statusType}
                               statusMessage={statusMessage}/>

            <form id="contact-form"
                  className="contact-form"
                  onSubmit={(e) => submitHandler(e)}>
                <div className="container form-container">
                    <h2>Subscribe</h2>
                    <p>
                        Wanna learn more about the mighty work God is doing right now?
                        Subscribe to my blog!
                    </p>
                    <p>
                        I write for this purpose: That all men and women might see the
                        mighty works of God in our time through the eyes of faith, and
                        that one day everyone will experience the glory of God, alive in
                        the Church!
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Name (Optional)"
                    className="field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>

                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br/>

                <button className="field submit-button">Subscribe Now!</button>
            </form>
        </>
    );
}

export default Subscribe;
