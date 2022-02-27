import Image from 'next/image'
import Button from '../../../shared/Button'

const UserTable = () => {
    return (
        <table className="text-sm table-fixed table-new-user">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nama</th>
                    <th>Tanggal Daftar</th>
                    <th>Pendidikan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-center'>
                        <Image src={'/admin-pict.png'} width={48} height={48} className='object-cover object-center rounded-full' />
                    </td>
                    <td className='w-[25%]'>Fulan Muhammad</td>
                    <td className='text-center'>18 Februari 2022</td>
                    <td className='text-center'>Sarjana - S1</td>
                    <td className='w-[240px]'>
                        <div className='grid grid-cols-2 gap-4'>
                            <Button type='accent' size='xs' label='Lihat Profil' />
                            <Button type='primary' size='xs' icon='icon-check' label='Verifikasi' />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='text-center'>
                        <Image src={'/admin-pict.png'} width={48} height={48} className='object-cover object-center rounded-full' />
                    </td>
                    <td className='w-[25%]'>Fulan Muhammad</td>
                    <td className='text-center'>18 Februari 2022</td>
                    <td className='text-center'>Sarjana - S1</td>
                    <td className='w-[240px]'>
                        <div className='grid grid-cols-2 gap-4'>
                            <Button type='accent' size='xs' label='Lihat Profil' />
                            <Button type='danger' size='xs' icon='icon-trash' label='Hapus' />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default UserTable;