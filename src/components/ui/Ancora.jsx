import { Link } from "react-router-dom"

export const Ancora = ({ children, path }) => {
    return (
        <Link
            to={path}
            className="font-semibold text-sky-600 hover:text-sky-500 duration-200"
        >
            {children}
        </Link>
    )
}
