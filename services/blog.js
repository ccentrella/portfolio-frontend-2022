import {validateRecaptcha} from "@/services/recaptcha";

export const createPost = async (post) => {

    const token = await validateRecaptcha();
    return fetch('/api/v1/blog/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post, 'g-recaptcha-response': token }),
    });
}