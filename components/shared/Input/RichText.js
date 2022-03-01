import 'react-quill/dist/quill.snow.css';
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

const RichText = ({ id, label, name, className, modules, value, onChange }) => {
    const handleChange = content => {
        const e = {
            target: {
                name,
                value: content
            }
        }

        onChange(e)
    }

    return (
        <div className={`w-full ${className}`}>
            <label htmlFor={id} className='mb-2 font-semibold'>{label}</label>
            <ReactQuill id={id} modules={modules} onChange={handleChange} value={value} className='prose mt-2 w-full max-w-full'>
                <div className='my-editing-area'>

                </div>
            </ReactQuill>
        </div>
    );
}

export default RichText;