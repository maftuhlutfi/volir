import ConfirmModal from '../../../shared/Modal/ConfirmModal'

const VerifModal = ({ show, onClose, onConfirm }) => {
    return (
        <ConfirmModal
            show={show}
            onClose={onClose}
            onConfirm={onConfirm}
            text={'Verifikasi pengguna ini?'}
        />
    );
}

export default VerifModal;