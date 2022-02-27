import ConfirmModal from '../../../shared/Modal/ConfirmModal'

const DeleteModal = ({ show, onClose, onConfirm }) => {
    return (
        <ConfirmModal
            show={show}
            onClose={onClose}
            onConfirm={onConfirm}
            text={'Hapus pengguna ini?'}
        />
    );
}

export default DeleteModal;