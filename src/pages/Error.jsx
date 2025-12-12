export default function Error() {
    return (
        <div className="flex items-center justify-center h-screen bg-red-50">
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-red-600">Login Failed</h1>
                <p className="mt-2 text-gray-700">
                    Something went wrong while authentication.
                </p>

                <a
                    href="/login"
                    className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Try Again
                </a>
            </div>
        </div>
    );
}
