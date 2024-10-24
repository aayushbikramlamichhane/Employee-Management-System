import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email is", email);
        console.log("Password is", password);
        
        setEmail('');
        setPassword('');
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-xl">
                <form
                onSubmit={ (e) => {
                    submitHandler(e);
                }}
                className="flex flex-col  items-center justify-center p-20">
                    <input
                    value={email}
                    onChange={ (e) => {
                        setEmail(e.target.value);
                    }}
                    required
                    className="border-2 border-emerald-600 text-xl  outline-none bg-transparent px-5 py-4 rounded-full placeholder:text-gray-400" 
                    type="email" 
                    placeholder="Enter Your Email" />
                    <input
                    value={password}
                    onChange={ (e) => {
                        setPassword(e.target.value);
                    }}
                    className="border-2 border-emerald-600 text-xl  outline-none bg-transparent px-5 py-4 rounded-full mt-3 placeholder:text-gray-400" 
                    type="password" 
                    placeholder="Enter Your Password" />
                    <button className="border-2 bg-emerald-600 text-xl text-white outline-none  px-5 py-4 rounded-full mt-5">Log In</button>
                </form>
            </div>
        
        </div>
    )
}

export default Login
