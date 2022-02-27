import ImageInput from "../components/shared/Input/ImageInput";
import Select from "../components/shared/Input/Select";
import TextArea from "../components/shared/Input/TextArea";
import TextField from "../components/shared/Input/TextField";

const mapFormField = (formFields, input, handleChange) => {
    return (
        <>
            {formFields.map((f, i) => {
                switch (f.type) {
                    case 'textarea':
                        return <TextArea key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]} />
                        break;
                    case 'select':
                        return (
                            <Select key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]}>
                                {f.options.map((o, oIndex) =>
                                    <option key={oIndex} value={o.value}>{o.name}</option>
                                )}
                            </Select>
                        )
                    case 'image':
                        return <ImageInput id={f.name} name={f.name} label={f.label} image={f.value} onChange={handleChange} />
                    default:
                        return <TextField key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]} />
                }
            }
            )}
        </>
    );
}

export default mapFormField;