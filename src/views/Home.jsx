import ContentHomePage from "../components/ContentHomePage";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <>
            <Header 
                type="video" 
                src="/naturhistoriskmuseum/assets/videos/header_video.mp4" 
                title = "Discover the wonders of Nature Today"/>
            <ContentHomePage />
        </>
     );
}
 
export default Home;
