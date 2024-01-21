import { useFormContext } from "react-hook-form";

const InputField = () => {
    const {register} = useFormContext()
    return (
        <div>
            <label className='block' htmlFor="name">Name </label>
            <input type="text" {...register('something')} />
        </div>
    );
};

export default InputField;