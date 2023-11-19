const environmentVariables = {
    ROOT_URL: process.env.ROOT_URL,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3
}

const config = {...environmentVariables}

export default config;