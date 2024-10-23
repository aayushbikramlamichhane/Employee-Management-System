

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("hello try hard");
        
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-xl">
                <form
                onSubmit={ (e) => {
                    submitHandler(e);
                }}
                className="flex flex-col  items-center justify-center p-20">
                    <input required className="border-2 border-emerald-600 text-xl  outline-none bg-transparent px-5 py-4 rounded-full placeholder:text-gray-400" type="text" placeholder="Enter Your Email" />
                    <input className="border-2 border-emerald-600 text-xl  outline-none bg-transparent px-5 py-4 rounded-full mt-3 placeholder:text-gray-400" type="password" placeholder="Enter Your Password" />
                    <button className="border-2 bg-emerald-600 text-xl text-white outline-none  px-5 py-4 rounded-full mt-5">Log In</button>
                </form>
            </div>
        
        </div>
    )
}

export default Login
