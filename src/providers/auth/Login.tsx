import IMAGES from "@/assets/Images"
import Button from "@/components/button/Button"

function Login() {
  return (
    <div className='container mx-auto bg-quad h-screen px-56 flex justify-center items-center'>
        <div className='grid grid-cols-4 gap-4 bg-white p-7 items-center rounded-md'>
            <div className="col-span-2">
                <img src={IMAGES.loginImg} alt="login img" className="w-full" />
            </div>
            <div className='col-span-2'>
                <div>
                    <div className="text-center login-logo-block mb-10">
                        <IMAGES.logoSvg />
                    </div>
                    <form>
                        <input className="border border-grey rounded-md py-4 px-4 w-full outline-0 mb-5" placeholder="User ID" />
                        <div className="relative">
                            <input className="border border-grey rounded-md py-4 px-4 w-full outline-0" placeholder="password" />
                            <span className="absolute top-1/2 right-9 -translate-y-1/2">
                                <IMAGES.passwordEyeSvg />
                            </span>
                        </div>
                        <div className="text-center">
                            <Button useClass='border border-secondary rounded-full text-secondary px-28 py-4 my-5 inline-block' buttonText='Login'/>
                            <h5 className="text-2xl uppercase mb-5">Or</h5>
                            <Button useClass='border border-primary rounded-full text-black px-20 py-4 inline-block' buttonText='Google Login'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login