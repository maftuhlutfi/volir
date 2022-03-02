import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAuth } from "../../../context/AuthUserContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Button from "../Button";

const ProfilMenu = () => {
    const { authUser: { name, photo, role, email }, signOut } = useAuth()
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef()
    const router = useRouter()

    useOnClickOutside(ref, () => setShowMenu(false))

    const handleKeluar = () => {
        signOut()
            .then(() => {
                router.push('/login')
            })
    }

    return (
        <>
            {role == 'admin' &&
                <Link href='/admin'>
                    <a>
                        <Button type='accent' label='Dashboard' className='mr-8' />
                    </a>
                </Link>
            }
            <div ref={ref} className="w-12 h-12 relative cursor-pointer">
                <Image src={photo || '/user-default.svg'} layout='fill' className="object-center object-cover rounded-full" onClick={() => setShowMenu(p => !p)} />
                <div className={`px-0 w-44 py-2 absolute top-full right-0 mt-4 text-center ${showMenu ? 'flex' : 'hidden'} flex-col overflow-hidden bg-white shadow-md border border-gray-300 rounded-[20px]`}>
                    <p className="font-bold w-full py-3 line-clamp-1">{name || email}</p>
                    <Link href='/profil'>
                        <a className="py-3 my-2 w-full hover:bg-primary hover:text-white hover:font-semibold">Profil</a>
                    </Link>
                    <Button type='danger' label='Keluar' className='mx-4' onClick={handleKeluar} />
                </div>
            </div>
        </>
    );
}

export default ProfilMenu;