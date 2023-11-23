import { validateRecaptcha } from "@/services/recaptcha";
import config from "@/config";

export const submitContactForm = async (contact) => {

    const token = await validateRecaptcha();
    return fetch(`${config.NEXT_PUBLIC_BACKEND_URL}/api/v1/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, 'g-recaptcha-response': token }),
    });
}