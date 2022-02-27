import Button from "../../../shared/Button";

const AddKegiatanBtn = ({ ...otherProps }) => {
    return (
        <Button type='primary' size='sm' icon='icon-plus' label='Tambah Kegiatan' {...otherProps} />
    );
}

export default AddKegiatanBtn;