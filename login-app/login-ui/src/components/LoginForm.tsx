import React , {useState} from "react";
import GoogleIcon from '@mui/icons-material/Google';

function LoginForm(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
        setEmail("");
        setPassword("");
        setRemember(false);
    }

    return(
        <div
        className="min-h-screen flex justify-center items-center bg-gray-100">
            <form 
            className="rounded rounded-xl bg-white shadow-xl w-full max-w-sm p-8 backdrop-blur-md"
            onSubmit={handleSubmit}
            aria-label="Login form">

                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Sign in</h1>

                <label htmlFor="email"
                className="block mb-1 text-sm font-medium w-full text-gray-700">E-mail</label>
                <input type="email"
                className="block mb-4 p-2 px-3 border border-gray-300 w-full placeholder-gray-400 rounded-lg  text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-200   ease-in-out"
                id="email"
                required
                value={email}
                onChange={ (e)=> setEmail(e.target.value) } 
                placeholder="example@mail.com"
                autoComplete="email"/>

                <label htmlFor="password"
                className="block mb-1 text-sm font-medium w-full text-gray-700">Password</label>
                <input type="password"
                className="block text-sm mb-4 p-2 px-3 border border-gray-300 w-full placeholder-gray-400 rounded-lg  
           focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-200   ease-in-out"
                id="password"
                required
                value={password}
                autoComplete="current-password"
                placeholder="••••••••"
                onChange={ (e)=> setPassword(e.target.value)} />

                <div className="mt-1 mb-2 flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                        <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="w-4 h-4 text-indigo-900 border-gray-300 rounded focus:ring-indigo-900"
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a
                        href="#"
                        className="text-sm font-light text-blue-600 hover:text-gray-900 transition"
                    >
                        Forgot Password?
                    </a>
                </div>


                <button type="submit"
                className="text-sm font-medium mt-4 w-full bg-black rounded rounded-xl text-white py-2 hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md">Sign in</button>
                
                <div className="flex gap-4 justify-center mt-3">
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-xl hover:bg-gray-100 transition duration-200"
                >
                    <svg width="17" height="17" viewBox="0 0 533.5 544.3">
                    <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37.2-4.8-55.1H272v104.3h146.9c-6.3 34.1-25.5 62.9-54.4 82.1v68.2h87.8c51.3-47.2 81.2-116.7 81.2-199.5z" />
                    <path fill="#34a853" d="M272 544.3c73.4 0 135.1-24.2 180.1-65.5l-87.8-68.2c-24.4 16.5-55.8 26.1-92.3 26.1-70.9 0-131-47.9-152.5-112.1h-90v70.4c45.2 89.5 137.8 149.3 242.5 149.3z" />
                    <path fill="#fbbc04" d="M119.5 324.6c-10.3-30.2-10.3-62.7 0-92.9v-70.4h-90c-37.2 72.6-37.2 160.7 0 233.3l90-70z" />
                    <path fill="#ea4335" d="M272 107.3c38.6-.6 75.4 13.5 103.8 39.3l77.8-77.8c-49-45.3-113.2-70.6-181.6-68.7-104.7 0-197.3 59.8-242.5 149.3l90 70c21.5-64.2 81.6-112.1 152.5-112.1z" />
                    </svg>
                    <span className="text-sm font-medium">Sign in with Google</span>
                </button>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <button className="text-sm font-light text-gray-700 hover:text-gray-500 transition-colors duration-200 w-full text-center">
                Don’t have an account?
                </button>

            </form>
        </div>
    )
}


export default LoginForm;