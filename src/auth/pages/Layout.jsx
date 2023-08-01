import { Title } from "../../components/ui/Title"

export const Layout = ({ title, children }) => {
  return (
    <div
      className="flex min-h-screen bg-gray-950 text-gray-300 flex-col gap-6 justify-center px-6 py-12 lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img class="mx-auto h-10 w-auto" src="" alt="Your Company" /> */}
        <Title>{title}</Title>
      </div>
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
        {children}
      </div>
    </div>
  )
}
