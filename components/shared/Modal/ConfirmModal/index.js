import Modal from "..";
import Button from "../../Button";

const ConfirmModal = ({ show, onClose, onConfirm, text }) => {
    return (
        <Modal show={show} onClose={onClose} className='w-[400px]'>
            <h1 className="mt-4 mb-8 text-xl font-bold text-center">{text}</h1>
            <div className="grid grid-cols-2 gap-8">
                <Button type='accent' label='Batal' onClick={onClose} />
                <Button type='primary' label='Ya' onClick={onConfirm} />
            </div>
        </Modal>
    );
}

export default ConfirmModal;