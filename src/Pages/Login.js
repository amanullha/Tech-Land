import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialAuth from "./SocialAuth";


const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loadingFirebase,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors, loading }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();


    const onSubmit = async (data) => {

        await signInWithEmailAndPassword(data.mail, data.password);
        reset();


    }



    const handleForgetPassData = () => {
        navigate('/forget-password')
    }

    const handleRegisterData = () => {
        navigate('/signup')
    }





    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center pt-10 font-bold text-3xl'>Login </h1>




                        <form class="card-body py-0" onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">

                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type='email' class="input input-bordered" {...register("mail", { required: "Email is required" })} />
                                <p className='text-red-500 mt-1'>{errors.mail?.message}</p>



                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>

                                <input class="input input-bordered" {...register("password", { required: true })} />
                                < p className='text-red-500 mt-1'> {errors.password?.type === 'required' && "Password is required"}</p>


                            </div>
                            <label class="label">
                                <a href="#" onClick={handleForgetPassData} class="text-yellow-700    label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            {
                                loadingFirebase ?
                                    <div className="flex justify-center">
                                        <h1>Loading...</h1>
                                    </div>
                                    :
                                    <input class="btn btn-primary" type="submit" />
                            }

                            <div className="flex justify-center">
                                <span className="text-error">{error?.message}</span>
                            </div>

                            <label class="label flex justify-start gap-2">
                                <a onClick={handleRegisterData} href="#" class="text-lg text-yellow-700 font-bold label-text-alt link link-hover">Create new account</a>
                            </label>


                        </form>



                        {/* <div className='flex justify-center mb-5'>
                                    <h1 onClick={handleSignInWithGoogle} className=' cursor-pointer active:bg-green-700 font-bold text-lg text-red-500 bg-green-200 px-5 py-2 rounded-3xl   '>Continue with Google</h1>
                                </div> */}


                        <SocialAuth />






                    </div>


                </div>
            </div>

        </div>
    );
};

export default Login;

