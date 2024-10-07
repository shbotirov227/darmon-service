"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = () => {

    const [rating, setRating] = useState(null);
    const [hoverFill, setHoverFill] = useState(null);

    return (
        <div className="star">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;

                            return (
                            <button
                                key={index}
                                onMouseEnter={() => setHoverFill(ratingValue)}
                                onMouseLeave={() => setHoverFill(null)}
                                onClick={() => setRating(ratingValue)}
                            >
                                <FaStar
                                size={20}
                                style={{
                                    color:
                                    ratingValue <= (rating) ? "#ffe101" : "#ccc",
                                }}
                                onChange={() => setRating(ratingValue)}
                                value={ratingValue}
                                />
                            </button>
                            );
                        })}
                    </div>
    )
}

export default RatingStars;