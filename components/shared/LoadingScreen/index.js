import Spinner from "../Spinner";

const LoadingScreen = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Spinner className='border-primary' />
        </div>
    );
}

export default LoadingScreen;