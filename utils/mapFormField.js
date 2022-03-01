import DateRangeInput from "../components/shared/Input/DateRangeInput";
import ImageInput from "../components/shared/Input/ImageInput";
import Select from "../components/shared/Input/Select";
import TextArea from "../components/shared/Input/TextArea";
import TextField from "../components/shared/Input/TextField";

const mapFormField = (formFields, input, handleChange) => {
    return (
        <>
            {formFields.map((f, i) => {
                if (f.condition && input[f.condition.name] != f.condition.value) {
                    return ''
                }

                switch (f.type) {
                    case 'textarea':
                        return <TextArea key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]} />
                    case 'select':
                        return (
                            <Select key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]}>
                                {f.options.map((o, oIndex) =>
                                    <option key={oIndex} value={o.value}>{o.name}</option>
                                )}
                            </Select>
                        )
                    case 'image':
                        return <ImageInput key={i} id={f.name} name={f.name} label={f.label} image={input[f.name]} onChange={handleChange} />
                    case 'date-range':
                        return <DateRangeInput key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]} />
                    default:
                        return <TextField key={i} id={f.name} {...f} onChange={handleChange} value={input[f.name]} />
                }
            }
            )}
        </>
    );
}

export default mapFormField;