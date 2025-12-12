import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Success() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { loadUser } = useContext(AuthContext);

    useEffect(() => {
        // 1. Get the token from the URL parameters
        const token = searchParams.get("token");

        if (token) {
            // 2. CRITICAL: Save it with the EXACT name your axiosClient expects
            localStorage.setItem("access_token", decodeURIComponent(token));

            // 3. Load user data into context
            loadUser();

            // 4. Redirect to dashboard
            navigate("/dashboard");
        } else {
            // If no token, something went wrong, go back to login
            navigate("/login");
        }
    }, [searchParams, navigate, loadUser]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Logging you in...</h2>
                <p>Please wait while we verify your Google account.</p>
            </div>
        </div>
    );
}