import Image from "next/image";
import RatingStars from "@/components/RatingStars";
import Link from "next/link";

const DoctorCard = ({ cls, img, doctorName, experience, job, stars }) => {
    return (
        <div className={`${cls} w-[20%] p-6 rounded-3xl border border-[#E3E3E3] shadow-[5.0px_5.0px_10.0px_rgba(0,0,0,0.20)]`}>
            <Link href="/doctor-detail">
                <Image className="object-center mb-5" src={img} alt="doctor-img" />
            </Link>

            <div>
                <Link href="/doctor-detail" className="block my-5 font-semibold text-2xl">{doctorName}</Link>

                <div className="flex items-center">
                    {/* <ReactStars value={5} size={24} /> */}
                    <RatingStars />
                    <span className="ml-2 text-sm">{stars}</span>
                </div>

                <h5 className="text-blue text-lg my-3">{job}</h5>
                <h5 className="text-lg">{experience} yil tajriba</h5>
            </div>
        </div>
    )
}

export default DoctorCard;