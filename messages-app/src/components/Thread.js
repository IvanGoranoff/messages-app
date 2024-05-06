import React, { useState } from 'react';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function Thread({ messages }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(!isExpanded);
    const highScoreExists = messages.some(msg => msg.score >= 6);

    return (
        <div className={`thread ${isExpanded ? 'expanded' : 'collapsed'} ${highScoreExists ? 'high-rating' : ''}`} onClick={toggleExpanded}>
            <div className="thread-metadata">
                <h4>Subject: {messages[0].subject}</h4>
                <p>Team: {messages[0].team}</p>
                <p>First Question: {messages[0].question}</p>
                <p>Created at: {formatDate(messages[0].created_at)}</p>
            </div>
            {isExpanded ? (
                messages.map((message, index) => (
                    <div key={index} className="message">
                        <h4 style={{ color: message.score >= 6 ? '#9335ff' : '#e89d40' }}>{message.subject}</h4>
                        <p>{message.text}</p>
                    </div>
                ))
            ) : (
                <div>
                    <h4 style={{ color: messages[0].score >= 6 ? '#9335ff' : '#e89d40' }}>{messages[0].subject}</h4>
                    <p>{messages.length > 1 ? `${messages.length} messages` : messages[0].text}</p>
                    <div className="count" style={{ backgroundColor: messages[0].score >= 6 ? '#27aae1' : '#e89d40' }}>
                        {messages.length}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Thread;
