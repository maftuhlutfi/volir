import Image from 'next/image'
import Button from '../../../shared/Button'

const MasjidTable = () => {
    return (
        <table className="text-sm table-fixed table-new-user">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nama Masjid</th>
                    <th>Alamat</th>
                    <th>Tanggal Ditambahkan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='w-20 text-center'>
                        <Image src={'/masjid.jfif'} width={80} height={80} className='object-cover object-center rounded-lg' />
                    </td>
                    <td className='w-[18%]'>
                        <div className='line-clamp-2'>
                            Masjid Al Iman Klebengan
                        </div>
                    </td>
                    <td className='w-[20%]'>
                        <div className='line-clamp-2'>
                            Jalan Klebengan Blok CT No.8, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                        </div>
                    </td>
                    <td className='text-center w-[140px]'>18 Februari 2022</td>
                    <td className='w-[120px]'>
                        <div className='grid grid-cols-3 gap-4'>
                            <Button type='blue' size='sm' icon='icon-users' full />
                            <Button type='secondary' size='sm' icon='icon-edit' full />
                            <Button type='danger' size='sm' icon='icon-trash' full />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default MasjidTable;