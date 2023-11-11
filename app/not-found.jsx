import Link from "next/link";

export const metadata = {
    title: "Page Not Found"
}

export default function NotFound() {
    return (
        <main>
            <div className="container">
                <h1>Page Not Found</h1>
                <p className="large">
                    Oops! It looks like this page doesn&lsquo;t exist. Have a look at my blog or
                    visit my homepage!
                </p>
            </div>
            <div className="button-fixed-container-dark">
                <Link href="/blog" className="button-fixed">
                    View Blog
                </Link>
                <Link href="/" className="button-fixed">
                    View Homepage
                </Link>
            </div>
        </main>
    );
}
