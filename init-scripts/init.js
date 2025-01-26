// Switch to the desired database
db = db.getSiblingDB('image_db'); 

// Create a collection named 'posts'
db.createCollection('posts');

// Insert initial sample data into the 'posts' collection
db.posts.insertMany([
    {
        imageUrl: 'https://example.com/image1.jpg',
        caption: 'First post'
    },
    {
        imageUrl: 'https://example.com/image2.jpg',
        caption: 'Second post'
    }
]);