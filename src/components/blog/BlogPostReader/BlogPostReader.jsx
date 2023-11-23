'use client'

import {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import {useParams} from 'next/navigation';
import {getPost} from "@/services/blog";
import StatusMessagePane from "@/layout/StatusMessagePane";
import BlogPostNotFound from "@/components/blog/BlogPostReader/BlogPostNotFound";
import BlogPostLoading from "@/components/blog/BlogPostReader/BlogPostLoading";
import BlogPostHeader from "@/components/blog/BlogPostReader/BlogPostHeader";

const BlogPostReader = () => {
    const [loaded, setLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [post, setPost] = useState({});
    const params = useParams();

    useEffect(() => {
        getPost(params.slug)
            .then((post) => {
                setPost(post)
                setLoaded(true)
            })
            .catch(() => setIsError(true))
    }, [params.slug]);

    if (!loaded) {
        return <BlogPostLoading />
    }
    else if (!post) {
        return <BlogPostNotFound />
    }

    return (
        <article className="post">
            <BlogPostHeader post={post} />
            {isError && <StatusMessagePane statusType='warning'
                                           statusMessage='An error occurred. Post may not have loaded correctly.'/>}
            <section className="post-content container">
                {parse(post.content)}
            </section>
        </article>
    );
}

export default BlogPostReader;
