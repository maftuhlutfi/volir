import Button from "../../../shared/Button";

const AddMasjidBtn = ({ ...otherProps }) => {
    return (
        <Button type='primary' size='sm' icon='icon-plus' label='Tambah Masjid' {...otherProps} />
    );
}

export default AddMasjidBtn;