/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
        attendees: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call payment processing API to charge user for event creation
        const paymentSuccessful = await processPayment();

        if (paymentSuccessful) {
            // Payment successful, proceed with creating the event
            console.log('Event created:', eventData);
            // Here you can handle further logic like saving event data to a database
        } else {
            // Payment failed, show error message or handle accordingly
            console.log('Payment failed. Event creation aborted.');
        }
    };

    const processPayment = async () => {
        // Mock implementation: Simulate payment processing (e.g., with a delay)
        return new Promise(resolve => {
            setTimeout(() => {
                const paymentSuccessful = Math.random() < 0.8; // 80% success rate
                resolve(paymentSuccessful);
            }, 2000); // Simulate a 2-second delay
        });
    };

    return (
        <div>
            <h2>Create Event (Paid)</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input type="text" name="name" value={eventData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" value={eventData.location} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={eventData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Number of Attendees:</label>
                    <input type="number" name="attendees" value={eventData.attendees} onChange={handleChange} required />
                </div>
                <button type="submit">Create Event (Pay Now)</button>
            </form>
        </div>
    );
};

export default CreateEvent;