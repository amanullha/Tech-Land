import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialAuth from "./SocialAuth";




const SignUp = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loadingFirebase,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);


    const { register, formState: { errors, loading }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';


    if (user) {

        console.log("login user: ", user);
        console.log("from: ", from);
        navigate(from, { replace: true });
    }



    const onSubmit = async (data) => {

        await createUserWithEmailAndPassword(data.mail, data.password);
        await updateProfile({ displayName: data.name });


        reset();

    }



    const handleForgetPassData = () => {
        navigate('/forget-password')
    }

    const handleLoginData = () => {
        navigate('/login')
    }







    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">


                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center pt-10 font-bold text-3xl'>Register </h1>

                        <form class="card-body py-0" onSubmit={handleSubmit(onSubmit)}>


                            <div class="form-control">

                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type='text' class="input input-bordered" {...register("name", { required: "Name is required" })} />
                                <p className='text-red-500 mt-1'>{errors?.name?.message}</p>

                            </div>

                            <div class="form-control">

                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type='email' class="input input-bordered" {...register("mail", { required: "Email is required" })} />
                                <p className='text-red-500 mt-1'>{errors?.mail?.message}</p>



                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>

                                <input class="input input-bordered" {...register("password", { required: true })} />
                                < p className='text-red-500 mt-1'> {errors.password?.type === 'required' && "Password is required"}</p>


                            </div>

                            {
                                (loadingFirebase || updating) ?
                                    <div className="flex justify-center">
                                        <h1>Loading...</h1>

                                    </div> :
                                    (
                                        loading ? <input class="btn btn-primary" type="submit" value="Loading..." /> : <input class="btn btn-primary" type="submit" />
                                    )
                            }



                            <div className="flex justify-center">
                                <span className="text-error">{error?.message} {errorUpdate?.message}</span>
                            </div>

                            <label class="label flex justify-start gap-2">
                                <small>Already have an account? </small>
                                <a onClick={handleLoginData} href="#" class="text-lg text-yellow-700 font-bold label-text-alt link link-hover">Login</a>

                            </label>


                        </form>


                        <SocialAuth />

                    </div>

                </div>

            </div>


        </div>
    );
};

export default SignUp;