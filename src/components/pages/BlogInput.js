import { NavBar } from '../NavBar';
import React, { useState } from 'react';
import axios from 'axios'; // Or use fetch if preferred

const BlogInput = () => {
    const [adminPassword, setAdminPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [key, setKey] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');
    const [imageName, setImageName] = useState('');
    const [error, setError] = useState('');
    
    const handleAdminLogin = async () => {
        // Replace 'yourPassword' with the actual admin password
        if (adminPassword === 'yourPassword') {
            setIsAuthenticated(true);
        } else {
            setError('Invalid password');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogEntry = {
            Title: title,
            Body: body,
            Date: date,
            Image: imageName,
        };

        try {
            await axios.post('/api/blogs', { Key: key, ...blogEntry });
            alert('Blog entry added successfully!');
        } catch (err) {
            console.error(err);
            setError('Failed to add blog entry');
        }
    };

    return (
        <div>
            {!isAuthenticated ? (
                <div>
                    <h2>Admin Login</h2>
                    <input
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        placeholder="Enter admin password"
                    />
                    <button onClick={handleAdminLogin}>Login</button>
                    {error && <p>{error}</p>}
                </div>
            ) : (
                <div>
                    <h2>Add New Blog Entry</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Key:</label>
                            <input
                                type="text"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Title:</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Body:</label>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Image Name:</label>
                            <input
                                type="text"
                                value={imageName}
                                onChange={(e) => setImageName(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default BlogInput;

