import Image from "next/image";
import Card from "../shared/Card";

const KegiatanCard = ({ price, date, title, penceramah, masjid }) => {
    return (
        <Card className='p-4'>
            <div className="relative mb-4">
                <Image src='/kegiatan.jpg' width={264} height={180} layout='responsive' className="object-cover object-center rounded-lg" />
                <div className="bg-secondary p-2 text-[10px] rounded-lg absolute left-[10px] top-[10px] font-semibold">
                    {price == 0 ? 'GRATIS' : `Rp. ${price}`}
                </div>
                <div className="bg-white p-2 text-[10px] rounded-lg absolute right-[10px] top-[10px] font-semibold">
                    {date}
                </div>
            </div>
            <h5 className="mb-3 text-lg font-bold">
                <span className="text-primary">{penceramah}: </span>
                {title}
            </h5>
            <div className="flex items-center">
                <div className="relative flex-shrink-0 w-8 h-8 mr-4">
                    <Image src='/masjid.jfif' layout="fill" className="object-cover object-center rounded-full" />
                </div>
                <div>
                    <div className="mb-1 text-xs font-semibold">{masjid.name}</div>
                    <div className="text-[10px] text-gray-700">{masjid.location}</div>
                </div>
            </div>
        </Card>
    );
}

export default KegiatanCard;