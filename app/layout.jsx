import './global.scss';
// import '/styles/typography.scss'

import React from 'react';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import AppLoading from '@/layout/AppLoading';
import Script from "next/script";

const metaConfiguration = {
    url: 'https://chriscentrella.com',
    title: 'Welcome to Chris\'s Portfolio',
    description: '10 years of coding experience, with extensive knowledge of ' +
    'frontend and backend. Exceptional debugging and problem solving using Root Cause Analysis (RCA).',
    image: 'https://chriscentrella.com/images/thumbnail.png'
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
        <Script async src={'https://www.google.com/recaptcha/api.js?render=' +
            process.env.RECAPTCHA_SITE_KEY_V3}></Script>
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