import {validateRecaptcha} from "@/services/recaptcha";
import config from "@/config";

export const createPost = async (post) => {

    const token = await validateRecaptcha();
    return fetch(`${config.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post, 'g-recaptcha-response': token }),
    });
}

export const getPost = (slug) => {

    return fetch(`${config.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog/${slug}`)
        .then((response) => {
            return response.json()
        });
}

export const getPosts = () => {

    return fetch(`${config.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog`)
        .then((response) => {
            return response.json()
        });
}

export const getLatestPost = () => {

    return fetch(`${config.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog?limit=1`)
        .then((response) => response.json())
        .then((documents) => documents[0]);
}