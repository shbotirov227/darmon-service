import Loading from "./Loading";

const LoadingIntro = () => {
    return (
        <div className="absolute w-full h-screen animate-out fade-out-0 ease-in-out slide-out-to-top-1/4 fill-mode-forwards duration-500 z-50">
            <Loading />
        </div>
    );
}

export default LoadingIntro;
