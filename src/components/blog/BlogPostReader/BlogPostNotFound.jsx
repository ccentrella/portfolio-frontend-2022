import Link from "next/link";

const BlogPostNotFound = () => {
    return (
        <div className="container">
            <h1>This post doesn&apos;t exist or has been removed.</h1>
            <div className="button-fixed-container thin">
                <Link className="button-fixed" href="/">
                    View Homepage
                </Link>
                <Link className="button-fixed" href="/blog">
                    Blog Home
                </Link>
            </div>
        </div>
    );
};

export default BlogPostNotFound;