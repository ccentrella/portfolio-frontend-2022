'use client'

import { useState, useEffect } from 'react';
import Subscribe from '@/components/Subscribe';
import BlogEntry from '@/components/blog/BlogEntry';
import {getPosts} from "@/services/blog";
import StatusMessagePane from "@/layout/StatusMessagePane";

const Page = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getPosts()
            .then((posts) => {
                setPosts(posts);
            })
            .catch(() => setError(true))
        ;
    }, []);

    return (
        <>
            <p className="section-title thin">Blog</p>
            <main className="container">
                <div className='blog-description'>
                    <p>
                        I&apos;m a Christian who believes that Jesus wants each of us to have an
                        intimate relationship with Him, and that all might read the Word of
                        God &ldquo;as one having authority and not as the scribes.&rdquo; (Matthew
                        7:28-9). Rather than repeating what is currently popular in
                        Christianity or the Church, I&apos;m absolutely convinced that Jesus gave
                        us His Word so that each of us might not only apply it to our lives
                        but comprehend amid our own limitations the mysteries of God, which He
                        has revealed to the little (Matthew 11:25-6).
                    </p>
                    <p>
                        I write for this purpose: That all men and women might see the mighty
                        works of God in our time through the eyes of faith, and that one day
                        everyone will experience the glory of God, alive in the Church!
                    </p>
                </div>
                {error && <StatusMessagePane statusType='warning'
                                             statusMessage='An error occurred. Posts may not have loaded correctly.' />}
                {Array.isArray(posts) &&
                    posts.map((post) => <BlogEntry post={post} key={post.slug} />)}
            </main>
            <Subscribe />
        </>
    );
}

export default Page;
