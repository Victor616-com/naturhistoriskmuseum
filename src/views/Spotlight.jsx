import ContentSpotlightPage from "../components/ContentSpotlightPage";
import Header from "../components/Header";

const Spotlight = () => {
    return (
        <>
            <Header 
                type="image" 
                src="/naturhistoriskmuseum/assets/images/new_addition_cover.png" 
                title = "Come and Experience the Spotlight"
                description = "The newest addition to our museum that shines light on things that matter today."
             />
            <ContentSpotlightPage />
        </>
    );
}
 
export default Spotlight
