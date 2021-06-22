import React from 'react';
import './shimmer.scss';

function Shimmer() {
    return (
        <div className="timeline-wrapper">
        <div className="timeline-item">
            <div className="animated-background">
                <div className="background-masker header-right" />
                <div className="background-masker header-bottom" />
                <div className="background-masker subheader-bottom" />
            </div>
        </div>
    </div>
    )
}

export default Shimmer;
