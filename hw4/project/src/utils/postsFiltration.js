const postsFiltration = (posts, formInput) => {
    let filtredPosts = [];

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.toLowerCase().includes(formInput.toLowerCase())) {
            filtredPosts.push(posts[i]);
        }
    }

    return filtredPosts;
}

export default postsFiltration;