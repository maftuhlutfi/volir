import Image from "next/image";
import Card from "../../shared/Card";

const MasjidProfileCard = () => {
    return (
        <Card className='flex items-center w-full p-5 mb-6'>
            <div className="relative w-16 h-16 overflow-hidden rounded-lg">
                <Image src='/masjid.jfif' layout="fill" className="object-cover object-center" />
            </div>
            <div className="ml-4">
                <p className="mb-1 font-semibold">Masjid Al Mujahidin UNY</p>
                <div className="text-sm text-gray-700 line-clamp-1">Sleman - Yogyakarta</div>
            </div>
        </Card>
    );
}

export default MasjidProfileCard;