import { validateRecaptcha} from "@/services/recaptcha";
import config from "@/config";

export const subscribe = async (subscriber) => {

    const token = await validateRecaptcha();
    return fetch(`${config.NEXT_PUBLIC_BACKEND_URL}/api/v1/subscribers/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriber, 'g-recaptcha-response': token }),
    });
}