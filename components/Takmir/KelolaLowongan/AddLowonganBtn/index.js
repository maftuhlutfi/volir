import Button from "../../../shared/Button";

const AddLowonganBtn = ({ ...otherProps }) => {
    return (
        <Button type='primary' size='sm' icon='icon-plus' label='Tambah Lowongan' {...otherProps} />
    );
}

export default AddLowonganBtn;