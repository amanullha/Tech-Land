import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import auth from "../firebase.init";

const ForgetPassword = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const { register, formState: { errors, loading }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {

        console.log(data.mail);

        await sendPasswordResetEmail(data.mail)
        reset();
    }




    const handleLoginData = () => {
        navigate('/login')
    }

    const handleRegisterData = () => {
        navigate('/signup')
    }






    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">


                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center pt-10 font-bold text-3xl'>Reset Password </h1>
                        <div class="card-body pt-0">



                            {sending ?


                                <div>
                                    <h1 className="text-center">Reset password mail sending...</h1>
                                    <Loading />
                                </div>

                                :


                                <form class="card-body py-0" onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control">


                                        <input placeholder='Enter your email' type='email' class=" mt-4 input input-bordered" {...register("mail", { required: "Email is required" })} />
                                        <p className='text-red-500 mt-1'>{errors.mail?.message}</p>



                                    </div>



                                    <input class="btn btn-primary" type="submit" value="RESET" />

                                    <div className="flex justify-center">
                                        <small className="text-error">{error?.message}</small>
                                    </div>

                                    <label class="label px-2 ">
                                        <a onClick={handleLoginData} href="#" class="text-lg text-yellow-600 label-text-alt link link-hover">Login </a>
                                        <a onClick={handleRegisterData} href="#" class="text-lg text-yellow-600 label-text-alt link link-hover">Register</a>
                                    </label>


                                </form>


                            }




                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default ForgetPassword;