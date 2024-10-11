import { Icon } from "@iconify/react";
import Image from "next/image";


const FeedbackCard = ({ img, name, role, text}) => {
    return (
        <div className="w-full bg-white py-8 px-10 relative rounded-[30px]">
            <div className="flex">
                <Image className="w-[20%] h-14 mr-5" src={img} alt="feedback-card-img" />
                <div className="w-[80%] mb-6">
                    <h4 className="text-semibold text-[18px] mb-3">{name}</h4>
                    <h4 className="text-txtColor text-[18px]">{role}</h4>
                </div>
            </div>

            <p className="text-txtColor text-base mb-10 pb-16 border-b border-b-blue leading-9">{text}</p>
            {/* <span className="absolute w-full overflow-hidden h-[1px] bg-blue "></span> */}
            <Icon className="bg-bgBase absolute bottom-11 inset-x-0 mx-auto rounded-full p-3 text-blue size-14 text-center m-auto" icon="bxs:quote-alt-right" />
        </div>
    )
}

export default FeedbackCard;