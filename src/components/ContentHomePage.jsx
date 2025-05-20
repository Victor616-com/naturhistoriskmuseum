// ContentHomePage.js
import styles from "../styles/ContentPage.module.css";
import AboutContent from "./AboutContent";
import BtnText from "./buttons/BtnText";
import BuyTikets from "./BuyTikets";
import EmailSignUp from "./EmailSignUp";
import EventCard from "./EventCard";
import ExhibitionCard from "./ExhibitionCard";
import Extras from "./Extras";
import NewAddition from "./NewAddition";
import Slideshow from "./Slideshow";


const exhibitionCardsContent = [
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/global_back_yard.png",
        title: "The Global Backyard",
        description: "Discover the new exhibition Beetles! The obsession with a colection"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/oops.png",
        title: "Oops!",
        description: "Discover the new exhibition Beetles! The obsession with a colection"
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

const eventCardsContent = [
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/event1.png",
        title: "Animals in cities",
        description: "Join Vimse on an adventure in the city and meet lots of exiting animals",
        date: "Fri 09 Feb"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/event2.png",
        title: "Tours with Morten DD",
        description: "Join us on exciting tours with Morten DD. Find our program and tickets here",
        date: "Every Month"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/event3.png",
        title: "Experience the wild horses",
        description: "Get a very special experience in Denmarks most beautiful enviroment.",
        date: "Fri 10 Feb"
    },
    {
        imageUrl: "/naturhistoriskmuseum/assets/images/event3.png",
        title: "Experience the wild horses",
        description: "Get a very special experience in Denmarks most beautiful enviroment.",
        date: "Fri 10 Feb"
    }
]


const ContentHomePage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topRightButton}>
                <BtnText>Buy Tickets</BtnText>
            </div>
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
                    link = "/naturhistoriskmuseum/spotlight"
                    imageUrl="/naturhistoriskmuseum/assets/images/new_addition_cover.png"
                />
                <Slideshow
                    title= "Exhibitions"
                    items={exhibitionCardsContent}
                    renderItem={(item) => <ExhibitionCard {...item} />}
                />
                <BuyTikets />
                <Slideshow
                    title= "Events"
                    items={eventCardsContent}
                    renderItem={(item) => <EventCard {...item} />}
                />
                <EmailSignUp 
                    title = "Stay Connected with Us"
                    bodyOfText = "Subscribe to our newsletter for the latest updates on exhibitions, events, and more!"
                    link = "..."
                    imageUrl="/naturhistoriskmuseum/assets/images/email_sign_up_bg.jpg"
                />
                <Extras />
            </div>
        </div>
    );
}

export default ContentHomePage;