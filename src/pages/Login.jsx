import { useContext, useState } from "react";
import { login } from "../api/authApi";
import { AuthContext } from "../auth/AuthContext";

export default function Login() {
    const { loadUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await login({ email, password: pass });
        console.log(res);
        localStorage.setItem("access_token", res.data.accessToken);
        await loadUser();
        window.location.href = "/dashboard";
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Login to Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="w-full border border-gray-300 rounded-lg p-3"
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6">
                    <button
                        className="w-full bg-red-500 text-white rounded-lg py-3 mb-3 hover:bg-red-600"
                        onClick={() =>
                        (window.location.href =
                            "http://localhost:5050/oauth2/authorization/google")
                        }
                    >
                        Login with Google
                    </button>

                    <button
                        className="w-full bg-gray-800 text-white rounded-lg py-3 hover:bg-black"
                        onClick={() =>
                        (window.location.href =
                            "http://localhost:5050/oauth2/authorization/github")
                        }
                    >
                        Login with GitHub
                    </button>
                </div>

                <p className="mt-4 text-center text-sm">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-blue-600 font-semibold">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
