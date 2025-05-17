// ContentHomePage.js
import styles from "../styles/ContentHomePage.module.css";
import AboutContent from "./AboutContent";
import ExhibitionCard from "./ExhibitionCard";
import NewAddition from "./NewAddition";


const ContentHomePage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topBorder}></div>
            <div className={styles.contentWrapper}>
                
                <AboutContent 
                    title= "Naturhistorik Museum" 
                    description="Discover Naturhistorisk Museum Aarhus — where science and nature meet curiosity. Through hands-on, thoughtful experiences, the museum invites visitors to explore life’s complexity, reflect on our connection to the planet, and leave with a deeper sense of wonder. It’s a space to learn, feel, and return to."
                    buttonText="About us"
                    link=""
                />
                <NewAddition 
                    title = "New addition to the museum"
                    bodyOfText = "Discover a series of small booths throughout the museum, each offering a quiet moment to reflect, respond, and see what matters to others like you. Along the way, you’ll also have the opportunity to share your own perspective within the museum community."
                    link = "..."
                    imageUrl="/naturhistoriskmuseum/assets/images/new_addition_cover.png"
                />
                <ExhibitionCard 
                    imageUrl= "/naturhistoriskmuseum/assets/images/beetles.png"
                    title= "Beetles!"
                    description= "Discover the new exhibition Beetles! The obsession with a colection"
                />
                
            </div>
        </div>
    );
}

export default ContentHomePage;