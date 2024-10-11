

const HomeCard = ({ icon, title, value, border }) => {
    return (
        <div className={`flex items-center justify-center px-20 ${border ? "border-x border-x-blue": ""}`}>
            {icon}
            <div className="ml-5">
                <h4 className="mb-2 text-blue text-3xl font-bold">{value}</h4>
                <h5 className="w-full text-blue text-base">{title}</h5>
            </div>
        </div>
    )
}

export default HomeCard;