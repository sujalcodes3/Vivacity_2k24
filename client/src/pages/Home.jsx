import ArtistLineup from '../components/ArtistLineup';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>  
            <div className=' bg-[#030718]'>
                <Navbar />
                <Hero />
                <ArtistLineup />
                <Footer/>
            </div>    
        </>
    );
};

export default Home;
