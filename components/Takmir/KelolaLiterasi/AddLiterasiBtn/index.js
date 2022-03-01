import Button from "../../../shared/Button";

const AddLiterasiBtn = ({ ...otherProps }) => {
    return (
        <Button type='primary' size='sm' icon='icon-plus' label='Tambah Literasi' {...otherProps} />
    );
}

export default AddLiterasiBtn;