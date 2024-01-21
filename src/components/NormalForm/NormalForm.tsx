import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import {z} form 'zod'


const SignUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8 ,'Too sort. Provide minimum 8 character.'),
})

const NormalForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        // e.preventDefault()
        console.log(data)
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className='block' htmlFor="name">Name </label>
                <input type="text" id="name" {...register('name', {required: true})} />
                {errors.name && <span className='text-xs text-red-500'>This field is required.</span>}
            </div>
            <div>
                <label className='block' htmlFor="email">Email </label>
                <input type="email" id="email" {...register('email', {required: true})} />
                {errors.email && <span className='text-xs text-red-500'>This field is required.</span>}
            </div>
            <div>
                <label className='block' htmlFor="password">Password </label>
                <input type="password" id="password" {...register('password', {minLength: 8})} />
                {errors.password && <span className='text-xs text-red-500'>Too sort. type minimum 8 character.</span>}
            </div>
            {/* <div>
                <label className='block' htmlFor="textarea">Textarea </label>
                <input type="textarea" id="textarea" {...register('textarea')} />
            </div> */}
            {/* <div>
                <label className='block' htmlFor="checkbox">Checkbox </label>
                <input type="checkbox" id="checkbox" {...register('checkbox')} />
            </div> */}
            
            {/* <select name="" id="">
                <option value="">one</option>
                <option value="">two</option>
                <option value="">three</option>
                <option value="">four</option>
            </select> */}
            <div className='text-center mt-8'>
            <Button type='submit'>Submit</Button>
            </div>
        </form>
    );
};

export default NormalForm; 