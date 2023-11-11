import { validateRecaptcha } from "@/services/recaptcha";

export const submitContactForm = async (contact) => {

    const token = await validateRecaptcha();
    return fetch('/api/v1/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, 'g-recaptcha-response': token }),
    });
}