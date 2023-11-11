import './global.scss';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import AppLoading from '@/layout/AppLoading';
import Script from "next/script";

const RootLayout = ({ children }) => {

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

const metaConfiguration = {
    url: process.env.ROOT_URL,
    siteName: 'ccentrella-portfolio',
    title: 'Welcome to Chris\'s Portfolio',
    description: '10 years of coding experience, with extensive knowledge of ' +
        'frontend and backend. Exceptional debugging and problem solving using Root Cause Analysis (RCA).',
    image: `/images/thumbnail.png`
}
export const metadata = {
    metadataBase: new URL(process.env.ROOT_URL),
    referrer: 'origin-when-cross-origin',
    author: { name: 'Chris Centrella', url: 'https://linkedin.com/in/ccentrella' },
    creator: 'Chris Centrella',
    publisher: 'Chris Centrella',
    applicationName: metaConfiguration.siteName,
    keywords: ['chris centrella', 'software engineer', 'designer', 'photography'],
    title: {
        template: '%s | Chris Centrella',
        default: metaConfiguration.title,
    },
    description: metaConfiguration.description,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: metaConfiguration.url,
        siteName: metaConfiguration.siteName,
        title: metaConfiguration.title,
        description: metaConfiguration.description,
        image: metaConfiguration.image
    },
    twitter: {
        card: 'summary_large_image',
        domain: process.env.DOMAIN,
        url: metaConfiguration.url,
        title: metaConfiguration.title,
        description: metaConfiguration.description,
        image: metaConfiguration.image
    }
};

export default RootLayout;
