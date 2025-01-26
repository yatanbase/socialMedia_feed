import React, { useState } from 'react';

function CreatePost({ onPostCreated }) {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('image', image);
        formData.append('caption', caption);

        try {
            const response = await fetch('http://socialmedia-feed-3.onrender.com:5000/api/posts', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setImage(null);
                setCaption('');
                onPostCreated();
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-post">
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
            />
            <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                required
            />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost; 