import { useState } from "react";
import Button from "../../../shared/Button";
import ImageInput from "../../../shared/Input/ImageInput";
import TextArea from "../../../shared/Input/TextArea";
import TextField from "../../../shared/Input/TextField";
import Modal from "../../../shared/Modal";
import ModalFooter from "../../../shared/Modal/ModalFooter";
import ModalTitle from "../../../shared/Modal/ModalTitle";

const initInput = {
    name: '',
    description: '',
    address: '',
    coordinates: '',
    link: '',
    image: null
}

const AddEditMasjidModal = ({ show, onClose }) => {
    const [input, setInput] = useState(initInput)

    const { name, description, address, coordinates, link, image } = input

    const handleChange = e => {
        const { name, value, files } = e.target

        setInput(p => ({
            ...p,
            [name]: files ? files[0] : value
        }))
    }

    const handleClear = e => {
        e.preventDefault()
        setInput(initInput)
    }

    return (
        <Modal show={show} onClose={onClose}>
            <ModalTitle title='Tambah Masjid' />
            <form className="grid gap-5">
                <TextField id='name' name='name' value={name} onChange={handleChange} label='Nama' placeholder='Masukkan nama masjid' required />
                <TextArea id='description' name='description' value={description} onChange={handleChange} label='Deskripsi' placeholder='Deskripsi singkat masjid' required />
                <TextField id='address' name='address' value={address} onChange={handleChange} label='Alamat' placeholder='Masukkan alamat masjid' required />
                <TextField id='coordinates' name='coordinates' value={coordinates} onChange={handleChange} label='Koordinat' placeholder='Masukkan koordinat, contoh (-7.765930, 110.386660)' required />
                <TextField id='link' name='link' value={link} onChange={handleChange} label='Link Google Maps' placeholder='Masukkan link Google Maps masjid' required />
                <ImageInput id='image' name='image' image={image} onChange={handleChange} label='Foto Masjid' required />
                <ModalFooter>
                    <div className="flex items-center justify-end">
                        <Button onClick={handleClear} type='accent' label='Hapus' className='mr-5' />
                        <Button type='primary' label='Simpan' />
                    </div>
                </ModalFooter>
            </form>
        </Modal>
    );
}

export default AddEditMasjidModal;