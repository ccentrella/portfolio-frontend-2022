export const validateRecaptcha = () => {

    const callRecaptcha = () => new Promise((resolve) =>
        grecaptcha.ready(resolve));

    return callRecaptcha()
        .then(() => grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3,
            { action: 'submit' })
        );
}
