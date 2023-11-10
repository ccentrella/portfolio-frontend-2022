import './global.css';

import React from 'react';

import Header from './(layout)/Header';
import Footer from './(layout)/Footer';
import AppLoading from './(layout)/AppLoading';

const metaConfiguration = {
    url: 'https://chriscentrella.com',
    title: 'Welcome to Chris\'s Portfolio',
    description: '10 years of coding experience, with extensive knowledge of ' +
    'frontend and backend. Exceptional debugging and problem solving using Root Cause Analysis (RCA).',
    image: 'https://chriscentrella.com/assets/thumbnail.png'
}
export const metadata = {
    author: 'Chris Centrella',
    title: metaConfiguration.title,
    description: metaConfiguration.description,
    openGraph: {
        url: metaConfiguration.url,
        type: 'website',
        title: metaConfiguration.title,
        description: metaConfiguration.description,
        image: metaConfiguration.image
    },
    twitter: {
        card: 'summary_large_image',
        domain: 'chriscentrella.com',
        url: metaConfiguration.url,
        title: metaConfiguration.title,
        description: metaConfiguration.description,
        image: metaConfiguration.image
    }
};

export default function RootLayout({ children }) {

    const recaptchaScript = (
        <script async src={'https://www.google.com/recaptcha/api.js?render=' +
            RECAPTCHA_SITE_KEY_V3}></script>
    )

    return (
        <html lang="en">
        <body>
            <Header />
            <AppLoading />
            {children}
            <Footer />
            {recaptchaScript}
        </body>
        </html>
    );
}