export const handleSubmit = (e, isValid, submit) => {
    e.preventDefault();

    if (!isValid()) {
        return;
    }

    grecaptcha.ready(() => {
        grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3, { action: 'submit' })
            .then((token) => submit(token))
    });
};