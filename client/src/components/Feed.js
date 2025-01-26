import React, { useState, useEffect } from 'react';
import CreatePost from './CreatePost';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div className="feed">
            <CreatePost onPostCreated={fetchPosts} />
            <div className="posts">
                {posts.map(post => (
                    <div key={post._id} className="post">
                        <img src={post.imageUrl} alt="Post" />
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed; 