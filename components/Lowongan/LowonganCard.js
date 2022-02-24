import Image from "next/image";
import Card from "../shared/Card";

const LowonganCard = ({ type, status, image, name, location, date }) => {
    const statusStyle = {
        'Masih Buka': 'bg-gray-300',
        'Ditutup': 'bg-red-500 text-white'
    }

    return (
        <Card className='p-4'>
            <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-primary">
                    {type}
                </div>
                <div className={`p-1 text-[10px] rounded ${statusStyle[status]}`}>
                    {status}
                </div>
            </div>
            <div className="flex items-center">
                <div className="relative flex-shrink-0 w-16 h-16 mr-4">
                    <Image src={image} layout='fill' className="object-cover object-center rounded-lg" />
                </div>
                <div>
                    <div className="font-bold line-clamp-1">{name}</div>
                    <div className="my-1.5 text-gray-700 text-xs">{location}</div>
                    <div className="text-[10px] font-bold">{date}</div>
                </div>
            </div>
        </Card>
    );
}

export default LowonganCard;