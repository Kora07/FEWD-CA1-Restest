import React from 'react'

function ServiceCard({ title, description }) {
    return (
        <>
            <div className="serviceMain">
                <h2> Title: {title} </h2>
                <p> {description} </p>
            </div>
        </>
    )
}

export default ServiceCard;
