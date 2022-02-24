import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../Card";

const DashboardMenu = ({ menuList }) => {
    const p = useRouter().pathname

    return (
        <Card className='p-5'>
            {menuList.map((m, i) =>
                <Link key={i} href={m.href}>
                    <a className={`flex items-center mb-8 last:mb-0 ${p == m.href ? 'text-primary font-bold' : 'text-gray-600 font-medium'}`}>
                        <i className={`${m.icon} mr-5 text-2xl`} />
                        <div>{m.title}</div>
                    </a>
                </Link>
            )}
        </Card>
    );
}

export default DashboardMenu;