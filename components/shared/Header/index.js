import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthUserContext";
import Button from '../Button'
import ProfilMenu from "./ProfilMenu";

const menu = [
    {
        title: 'Beranda',
        href: '/'
    },
    {
        title: 'Masjid',
        href: '/masjid'
    },
    {
        title: 'Kegiatan',
        href: '/kegiatan'
    },
    {
        title: 'Lowongan',
        href: '/lowongan'
    },
    {
        title: 'Literasi',
        href: '/literasi'
    },
]

const Header = () => {
    const pathname = useRouter().pathname
    const { authUser } = useAuth()

    return (
        <header className="fixed top-0 z-40 w-full">
            <div className="flex relative mx-auto bg-white items-center justify-between max-w-[1440px] py-10 px-20">
                <Link href={'/'}>
                    <a className="relative w-16 h-12">
                        <Image src={'/logo.svg'} priority layout='fill' className="object-contain object-center" />
                    </a>
                </Link>
                <div className="flex items-center text-sm">
                    {menu.map((m, i) =>
                        <Link key={i} href={m.href}>
                            <a className={`${pathname == m.href ? 'font-bold' : 'text-gray-600'} mr-12 last:mr-0`}>
                                {m.title}
                            </a>
                        </Link>
                    )}
                </div>
                <div className="flex items-center">
                    {authUser ?
                        <ProfilMenu />
                        :
                        <Link href={'/login'}>
                            <a>
                                <Button type='primary' label='Login' />
                            </a>
                        </Link>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;