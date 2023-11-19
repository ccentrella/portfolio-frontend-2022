'use client'

import LoadingScreen from '@/layout/LoadingScreen';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import {getPost} from "@/services/blog";
import StatusMessagePane from "@/layout/StatusMessagePane";

function BlogReader() {
    const [loaded, setLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [post, setPost] = useState();
    const params = useParams();

    useEffect(() => {
        getPost(params.slug)
            .then((post) => {
                setPost(post)
                setLoaded(true)
            })
            .catch(() => setIsError(true))
    }, [loaded, params.slug]);

    if (!loaded) {
        return (
            <>
                <div className="container">
                    <h1>Loading...</h1>
                </div>
                <LoadingScreen />
            </>
        );
    } else if (!post) {
        document.title = "Page Doesn't Exist | Chris Centrella";
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
    }
    return (
        <>
            <article className="post">
                <section className="post-header">
                    <div className="post-header-top">
                        <Link
                            className="posts-back-icon"
                            href="/blog"
                            title="View All Articles">
                            <i className="icon left-arrow medium"></i>
                        </Link>
                        {/* <% if user_signed_in? %>
                <%= link_to "<i className='icon pencil large'></i>".html_safe, edit_post_path(@post), class: "post-edit-icon", title: "Edit Post" %>
            <% end %> */}
                        <h1>{post.title}</h1>
                    </div>
                    <div className="post-header-bottom">
                        <div className="post-details">
                            <p>
                                <i className="calendar large"></i> {post.date}{' '}
                            </p>
                            <p>
                                <i className="clock large"></i> {post.time}{' '}
                            </p>
                        </div>
                    </div>
                    <div className="post-header-additional container">
                        <div className="center">
                            <p className="post-author button-label">
                                <i className="person large"></i> {post.author}{' '}
                            </p>
                        </div>
                        <p className="post-description">{post.description}</p>
                    </div>
                </section>
                {isError && <StatusMessagePane statusType='warning'
                                             statusMessage='An error occurred. Post may not have loaded correctly.' />}
                <section className="post-content container">
                    {console.log(post.content)}
                    {post.content && parse(post.content)}
                </section>
            </article>
        </>
    );
}

export default BlogReader;
