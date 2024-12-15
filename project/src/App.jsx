import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Details from './components/Details.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';

import Dec24 from './components/Dec24.jsx';

export default function App() {
    return (
        <>
            <Header />
            <AudioPlayer />
            <Details />
            <Dec24 />
            <Footer />
        </>
    );
}
