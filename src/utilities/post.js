export const getDate = (post) => {
    const date = new Date(post.createdAt.$date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString("en-US", options);
}

export const getTime = (post) => {
    const words = post.content.replace(/<[^>]+>/g, '').split(' ')
    const minutes = Math.round(Math.max(1, words.length / 200))
    return `${minutes} ${minutes !== 1 ? 'minutes' : 'minute'}`
}

export const getAuthor = (post) => {
    return post.userId === 1 ? 'Chris Centrella' : 'Author'
}