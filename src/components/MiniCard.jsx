import Link from "next/link";

const MiniCard = ({ cls, icon, title, link, url, target }) => {
    return (
        <div className={`${cls ? cls : ""} w-[300px] h-full text-center p-10 bg-white shadow-xl rounded-[30px] flex flex-col items-center justify-center`}>
            <div className="flex items-center justify-center h-16 w-16 mb-4">
                {icon}
            </div>
            <h3 className="text-black font-semibold mb-3">{title}</h3>
            {link && (
                <Link className="text-black py-3" target={target ? "_blank" : ""} href={url}>
                    {link}
                </Link>
            )}
        </div>
    );
}

export default MiniCard;
