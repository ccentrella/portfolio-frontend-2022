import { validateRecaptcha} from "@/services/recaptcha";

export const subscribe = async (subscriber) => {

    const token = await validateRecaptcha();
    return fetch('/api/v1/subscribers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriber, 'g-recaptcha-response': token }),
    });
}