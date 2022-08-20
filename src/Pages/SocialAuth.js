import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Loading from '../Components/Loading/Loading';

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        console.log('click social');
        signInWithGoogle();
    }
    console.log("error: ", error);



    return (
        <>

            {
                loading ? <div className='py-5'>
                    <h1 className='text-center'>Loading...</h1>
                </div>

                    :

                    <div >
                        <div class="divider mx-2">OR</div>
                        <div className='flex justify-center mb-5'>
                            <button onClick={handleSignInWithGoogle} className='btn  cursor-pointer  border-2 border-green-700  active:font-bold text-red-600  text-md px-5 py-2 rounded-3xl  gap-1'><FcGoogle size={25} />Continue with Google</button>
                        </div>

                        <div className="flex justify-center">
                            <span className='text-error mb-5'>{error?.message}</span>
                        </div>

                    </div>
            }



        </>
    );
};

export default SocialAuth;