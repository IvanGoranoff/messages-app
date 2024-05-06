import React, { useState } from 'react';

function Thread({ messages }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    // Determine the class based on the score
    const getMessageClass = (score) => score >= 6 ? 'high-rating' : '';

    // Helper function to determine the color based on the score
    const getColorByScore = (score) => {
        return score >= 6 ? '#27aae1' : '#e89d40';
    }

    return (
        <div className={`thread ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleExpanded}>
            {isExpanded ? (
                messages.map(message => (
                    <div key={message.id} className="message">
                        <h4 className={getMessageClass(message.score)}>{message.subject}</h4>
                        <p>{message.text}</p>
                    </div>
                ))
            ) : (
                <div>
                    <h4 className={getMessageClass(messages[0].score)}>{messages[0].subject}</h4>
                    <p>{messages.length > 1 ? `${messages.length} messages` : messages[0].text}</p>
                    {messages.length > 1 && (
                        <div className="count" style={{ backgroundColor: getColorByScore(messages[0].score) }}>
                            {messages.length}
                        </div>
                    )}
                </div>
            )}
        </div>

    );
}

export default Thread;
