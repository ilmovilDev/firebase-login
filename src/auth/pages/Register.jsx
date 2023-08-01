import { Ancora } from "../../components/ui"
import { Layout } from "./Layout"
import styled from "../../mokups/styled.json"
import { useAuth, useForm } from "../../hooks";

export const Register = () => {

    const { inputStyled, labelStyled } = styled;
    const { formState: { displayName, email, password }, onChange, onReset } = useForm({ displayName: "", email: "", password: "" })
    const { startCreatingUserWithEmailPassword, errorMessage } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        startCreatingUserWithEmailPassword({ displayName, email, password })
        //onReset()
    }

    console.log(errorMessage)

    return (
        <Layout title="Create a new account">
            <form onSubmit={handleSubmit} className="space-y-4" action="#" method="POST">
                {/* input name */}
                <div>
                    <label htmlFor="displayName" className={labelStyled}>Name</label>
                    <div className="mt-2">
                        <input
                            id="displayName"
                            name="displayName"
                            type="text"
                            required
                            placeholder="luis carrasco"
                            className={inputStyled}
                            onChange={onChange}
                            value={displayName}
                        />
                    </div>
                </div>

                {/* input email */}
                <div>
                    <label htmlFor="email" className={labelStyled}>Email address</label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="ilmovil@google.com"
                            className={inputStyled}
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                </div>

                {/* input password */}
                <div>
                    <label htmlFor="password" className={labelStyled}>Password</label>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="*******"
                            className={inputStyled}
                            onChange={onChange}
                            value={password}
                            pattern=".{6,12}"
                            title="The password must be between 6 and 12 characters"
                        />
                    </div>
                </div>

                <div className={`${!!errorMessage ? "block" : "hidden"}`}>
                    <p className="text-red-500 tracking-wider font-medium text-sm ">
                        {errorMessage}
                    </p>
                </div>

                {/* button Create account */}
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center duration-200 rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                        Create account
                    </button>
                </div>

            </form>

            <div className="flex items-center justify-end gap-2">
                <Ancora
                    path="/auth/login"
                >
                    Sign in to your account
                </Ancora>
            </div>

        </Layout>
    )
}
