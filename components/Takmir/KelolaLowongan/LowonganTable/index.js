import Image from "next/image";
import Button from "../../../shared/Button";

const LowonganTable = () => {
    return (
        <table className="text-sm table-fixed table-new-user">
            <thead>
                <tr>
                    <th>Nama Kegiatan</th>
                    <th>Status</th>
                    <th>Tipe</th>
                    <th>Tanggal Dibuka</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-center w-[20%]'>
                        Takmir Masjid
                    </td>
                    <td className="text-center w-[120px]">
                        <div className='bg-red-500 w-min relative mx-auto rounded-[4px] p-2 text-white'>
                            Ditutup
                        </div>
                    </td>
                    <td className='text-center w-[140px]'>
                        Relawan
                    </td>
                    <td className='text-center w-[140px]'>22 Maret 2022</td>
                    <td className='w-[140px]'>
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

export default LowonganTable;