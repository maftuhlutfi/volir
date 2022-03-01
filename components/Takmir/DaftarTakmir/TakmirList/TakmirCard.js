import Image from "next/image";
import Link from "next/link";
import Card from "../../../shared/Card";

const TakmirCard = ({ image, name, period }) => {
    return (
        <Link href={'#'}>
            <a>
                <Card className='flex items-center max-w-[320px] w-full p-5'>
                    <Image src={image} width={64} height={64} className='object-center object-cover rounded-full' />
                    <div className="ml-4">
                        <h5 className="font-semibold mb-1.5">{name}</h5>
                        <p className="text-sm text-gray-600">{period}</p>
                    </div>
                </Card>
            </a>
        </Link>
    );
}

export default TakmirCard;