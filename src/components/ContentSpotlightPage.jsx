import styles from "../styles/ContentPage.module.css";
import AboutContent from "./AboutContent";
import Images from "./Images";
import Quotes from "./Quotes";
import Topics from "./Topics";
import BuyTikets from "./BuyTikets";
import Slideshow from "./Slideshow";
import EmailSignUp from "./EmailSignUp";
import ExhibitionCard from "./ExhibitionCard";
import BtnText from "./buttons/BtnText";

const imagePaths = [
    "/naturhistoriskmuseum/assets/images/spotlight_img1.png",
    "/naturhistoriskmuseum/assets/images/spotlight_img2.png",
    "/naturhistoriskmuseum/assets/images/spotlight_img3.png"
];

const exhibitionCardsContent = [
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/global_back_yard.png",
        title: "The Global Backyard",
        description: "Discover the new exhibition Beetles! The obsession with a colection"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/oops.png",
        title: "Oops!",
        description: "From evolutionary errors to unexpected wonders."
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/expedition_to_africa.png",
        title: "Expedition to Africa",
        description: "You are invited to join us on a fantastic journey from Denmark to Kenya"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/beetles.png",
        title: "Crazy!",
        description: "Discover the new exhibition Beetles! The obsession with a colection"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/the_future_man.png",
        title: "The future man",
        description: "On June 14th, our new special exhibition “The Man of the Future - How Far Will You Go?"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/our_nature.png",
        title: "Our Nature",
        description: "In Our Nature there are exhibitions about the natural history of the Danish landscapes."
    },
]

const ContentSpotlightPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topRightButton}>
                <BtnText>Buy Tickets</BtnText>
            </div>
            <div className={styles.contentWrapper}>
                <AboutContent 
                    title= "Spotlight. A new way to bring awareness." 
                    description="Discover a series of small booths throughout the museum, each offering a quiet moment to reflect, respond, and see what matters to others like you. Along the way, you’ll also have the opportunity to share your own perspective within the museum community."
                    buttonText="About us"
                    link=""
                />
                <Images imageUrls={imagePaths} />
                <Topics />
                <Quotes
                    quotes={[
                        {
                        imageURL: "/naturhistoriskmuseum/assets/images/quote1.png",
                        alt: "Danish man",
                        quote: '"I don’t have all the answers, but I think we need to start talking about the uncomfortable stuff—otherwise nothing really changes."'
                        },
                        {
                        imageURL: "/naturhistoriskmuseum/assets/images/quote2.png",
                        alt: "Danish man",
                        quote: '“This is what we need, more of these honest moments—unfiltered, personal, and willing to start a conversation about things that matter to you.”'
                        }
                    ]}
                />
                <BuyTikets />
                <Slideshow
                    title= "Exhibitions"
                    items={exhibitionCardsContent}
                    renderItem={(item) => <ExhibitionCard {...item} />}
                />
                <EmailSignUp 
                    title = "Stay Connected with Us"
                    bodyOfText = "Subscribe to our newsletter for the latest updates on exhibitions, events, and more!"
                    link = "..."
                    imageUrl="/naturhistoriskmuseum/assets/images/email_sign_up_bg.jpg"
                />
            </div>
            
        </div>
    );
}
 
export default ContentSpotlightPage;