import { useState } from "react";
import mapFormField from "../../../../utils/mapFormField";
import Button from "../../../shared/Button";
import Modal from "../../../shared/Modal";
import ModalFooter from "../../../shared/Modal/ModalFooter";
import ModalTitle from "../../../shared/Modal/ModalTitle";
import formFields from "./formFields";

const initInput = formFields.reduce((acc, curr) => (acc[curr.name] = curr.value, acc), {})

const AddEditLowonganModal = ({ show, onClose, kegiatanData }) => {
    const [input, setInput] = useState(initInput)

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

    console.log(input)

    return (
        <Modal show={show} onClose={onClose}>
            <ModalTitle title='Tambah Lowongan' />
            <form className="grid gap-5">
                {mapFormField(formFields, input, handleChange)}
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

export default AddEditLowonganModal;