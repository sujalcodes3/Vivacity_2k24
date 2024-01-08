import ArtistLineup from '../components/ArtistLineup';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';

const Home = () => {
    return (
        <>
            <div className="m-0 p-0 overflow-y-scroll snap-mandatory snap-y h-screen">
                <Navbar />
                <Hero />
                <ArtistLineup />
                {/* <AfterMovie/> */}
                <Sponsors />
                <Footer />
            </div>
        </>
    );
};

export default Home;
