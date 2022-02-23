import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        icon: 'icon-mail',
        href: 'mailto:volir2021@gmail.com'
    },
    {
        icon: 'icon-whatsapp',
        href: 'wa.me/085702774243'
    },
    {
        icon: 'icon-instagram',
        href: '#'
    },
]

const Footer = () => {
    return (
        <footer className="text-white bg-dark-green">
            <div className="w-full flex flex-col items-center max-w-[1440px] py-6 px-20">
                <Link href={'/'}>
                    <a className="relative w-16 h-12">
                        <Image src={'/logo-white.svg'} layout='fill' className="object-contain object-center" />
                    </a>
                </Link>
                <div className="flex items-center mt-4">
                    {socialLinks.map((s, i) =>
                        <a key={i} href={s.href} className='mr-4 text-2xl last:mr-0'>
                            <i className={`${s.icon} text-white`} />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;