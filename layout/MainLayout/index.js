import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="max-w-[1400px] relative mx-auto min-h-screen mt-40 mb-10 px-20">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;