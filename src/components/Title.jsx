import React from "react";

const Title = ({ title, text }) => {
    return (
        <div className="text-center my-16">
            <h3 className="text-black font-semibold mb-3 text-[28px]">{title}</h3>
            <h3 className="text-blue font-bold text-[30px]">{text}</h3>
        </div>
    )
}

export default Title;