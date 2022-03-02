import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";
import LoadingScreen from "../shared/LoadingScreen";

const NotAuthenticatedPage = (Component) => {
    function NotAuthenticated({ ...otherProps }) {
        const { authUser, loading } = useAuth()
        const router = useRouter()

        if (loading && !authUser) {
            return <LoadingScreen />
        }

        if (authUser) {
            router.push('/')
            return ''
        }

        return (
            <Component {...otherProps} />
        );
    }

    return NotAuthenticated
}

export default NotAuthenticatedPage;