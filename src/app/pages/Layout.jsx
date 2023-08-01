
export const Layout = ({ children }) => {
    return (
        <div
            className="flex min-h-screen bg-gray-950 text-gray-300 flex-col gap-6 justify-center px-6 py-12 lg:px-8"
        >
            <div
                className="flex flex-col gap-4 p-4 border border-gray-800 bg-gray-900 hover:border-gray-700 duration-300 rounded sm:mx-auto sm:w-full sm:max-w-sm"
            >
                {children}
            </div>
        </div>
    )
}
