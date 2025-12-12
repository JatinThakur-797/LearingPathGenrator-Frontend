import { useState } from "react";
import { signup } from "../api/authApi";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        await signup({ name, email, password: pass });
        alert("Signup successful");
        window.location.href = "/login";
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="w-full border border-gray-300 rounded-lg p-3"
                        placeholder="Password"
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Create Account
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 font-semibold">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
