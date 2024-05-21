import React, { useState } from "react";
import './Review.css';
import ReviewHistory from "./ReviewHistory";

export default function Review() {
    const [formData, setFormData] = useState({
        name: '',
        review: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:80?api=second', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit review');
            }

            const responseData = await response.json();
            console.log('Response data:', responseData); // Log the response data for debugging

            setResponseMessage(responseData.message || 'Review submitted successfully!');

            setFormData({
                name: '',
                review: ''
            });
        } catch (error) {
            console.error('Error submitting review:', error);
            setResponseMessage('Error submitting review: ' + error.message);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <ReviewHistory />
            <div className="container">
                <h1>Add A Review</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="review"
                        placeholder="Your review"
                        value={formData.review}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit">Submit Review</button>
                </form>
                {responseMessage && <div className="response-message">{responseMessage}</div>}
            </div>
        </>
    );
}
