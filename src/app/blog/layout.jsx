import Subscribe from "@/components/Subscribe";

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Subscribe />
        </>
    )
}
const metaConfiguration = {
    url: `${process.env.ROOT_URL}/blog`,
    siteName: 'ccentrella-blog',
    title: 'Welcome to Chris\'s Blog',
    description: 'Broken Christian who strives to follow the Lord Jesus, ' +
        'passionate about reviving worship, that the faith might come alive.',
    image: `/images/thumbnail.png`
}
export const metadata = {
    applicationName: metaConfiguration.siteName,
    keywords: ['chris centrella', 'worship', 'blog', 'christian'],
    title: {
        template: '%s | Chris\'s Blog',
        default: 'Blog | Chris Centrella',
        absolute: metaConfiguration.title
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

export default Layout;
