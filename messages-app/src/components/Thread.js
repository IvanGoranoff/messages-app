import React, { useState } from 'react';

const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function Thread({ messages }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => setIsExpanded(!isExpanded);
    const highScoreExists = messages.some(msg => msg.score >= 6);

    const renderPlaceholders = () => {
        // Проверява дали екранът не е разгърнат и има повече от едно съобщение
        return !isExpanded && messages.length > 1 && Array.from({ length: messages.length - 1 }, (_, index) => (
            <div key={index} className="placeholder-card" style={{
                zIndex: 2 - index, // Намалява z-index за всеки следващ плейсхолдер, започвайки от 2
                transform: `translate(${10 * (index + 1)}px, ${10 * (index + 1)}px)` // Нарастващо изместване
            }}></div>
        ));
    };

    return (
        <div className="thread" onClick={toggleExpanded} aria-expanded={isExpanded}>
            {renderPlaceholders()} {/* Render placeholders first */}
            <div className={`message-card ${highScoreExists ? 'high-rating' : ''}`} style={{ zIndex: 5 }}>
                <div className="metadata-content">
                    <h4 style={{ color: messages[0].score >= 6 ? '#9335ff' : '#e89d40' }}>{messages[0].subject}</h4>
                    <p>{messages[0].question}</p>
                    <p style={{ fontSize: '18px' }}>{messages[0].text}</p>
                </div>
                <div className="metadata-details">
                    <h5>{messages[0].team}</h5>
                    <h5>{formatDate(messages[0].created_at)}</h5>
                </div>
                {messages.length > 1 && !isExpanded && (
                    <div className="count" style={{ backgroundColor: messages[0].score >= 6 ? '#27aae1' : '#e89d40' }}>
                        {messages.length} messages
                    </div>
                )}
            </div>
            {isExpanded && messages.slice(1).map((message, index) => (
                <div key={index} className="message-card" style={{ marginTop: '10px' }}>
                    <div className="metadata-content">
                        <h4 style={{ color: message.score >= 6 ? '#9335ff' : '#e89d40' }}>{message.subject}</h4>
                        <p>{message.question}</p>
                        <p style={{ fontSize: '18px' }}>{message.text}</p>
                    </div>
                    <div className="metadata-details">
                        <h5>{message.team}</h5>
                        <h5>{formatDate(message.created_at)}</h5>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Thread;
