import { Text } from "../../components";
import { useAuth } from "../../hooks"
import { Layout } from "./"
import { LuLogOut } from 'react-icons/lu';

export const Home = () => {

    const { displayName, photoURL, startLogout } = useAuth();
    const avatar = photoURL === null ? "https://res.cloudinary.com/dihhlrchn/image/upload/v1690852780/social/account_wccjxx.png" : photoURL

    return (
        <Layout>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 text-gray-200 rounded-full" src={avatar} alt={`Avatar ${displayName}`} />
                    <Text>{displayName}</Text>
                </div>
                <div>
                    <LuLogOut onClick={startLogout} className="text-2xl cursor-pointer" />
                </div>
            </div>
        </Layout>
    )
}
