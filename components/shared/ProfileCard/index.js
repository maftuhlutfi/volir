import Image from "next/image";
import Card from "../Card";

const ProfileCard = () => {
    return (
        <Card className='flex items-center p-5 w-full mb-6'>
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image src='/admin-pict.png' layout="fill" className="object-cover object-center" />
            </div>
            <p className="font-semibold ml-4">Admin</p>
        </Card>
    );
}

export default ProfileCard;