import React, { useState } from 'react';

const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function Thread({ messages }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => setIsExpanded(!isExpanded);
    const highScoreExists = messages.some(msg => msg.score >= 6);

    return (
        <div className="thread">
            <div className={`message-card ${highScoreExists ? 'high-rating' : ''}`}
                onClick={toggleExpanded}>
                <div className="metadata-content">
                    <h4 style={{ color: messages[0].score >= 6 ? '#9335ff' : '#e89d40' }}>{messages[0].subject}</h4>
                    <p>{messages[0].question}</p>
                    <p style={{ fontSize: '18px' }}>{messages[0].text}</p>
                </div>
                <div className="metadata-details">
                    <p>{messages[0].team}</p>
                    <p>{formatDate(messages[0].created_at)}</p>
                </div>
                {messages.length > 1 && !isExpanded && (
                    <div className="count" style={{ backgroundColor: messages[0].score >= 6 ? '#27aae1' : '#e89d40' }}>
                        {messages.length}  messages
                    </div>
                )}
            </div>
            {isExpanded && messages.slice(1).map((message, index) => (
                <div key={index} className="message-card">
                    <div className="metadata-content">
                        <h4 style={{ color: message.score >= 6 ? '#9335ff' : '#e89d40' }}>{message.subject}</h4>
                        <p>{message.question}</p>
                        <p style={{ fontSize: '18px' }}>{message.text}</p>
                    </div>
                    <div className="metadata-details">
                        <p>{message.team}</p>
                        <p>{formatDate(message.created_at)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Thread;
