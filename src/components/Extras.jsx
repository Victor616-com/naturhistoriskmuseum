import styles from "../styles/Extras.module.css";
import BtnDefault from "./buttons/btnDefault";
import BtnTranparent from "./buttons/BtnTransparent";

const cardContent = [
    {
        title: "Visit Our Café for Refreshing Delights",
        description: "Enjoy a variety of delicious snacks and beverages.",
        imageUrl: "/naturhistoriskmuseum/assets/images/cafe.png"
    },
    {
        title: "Shop Unique Nature-Inspired Souvenirs and Gifts",
        description: "Find the perfect memento to remember your visit.",
        imageUrl: "/naturhistoriskmuseum/assets/images/shop.png"
    },
    {
        title: "Engaging Learning Programs for All Ages",
        description: "Join us for hands-on experiences and workshops.",
        imageUrl: "/naturhistoriskmuseum/assets/images/learning.png"
    }
];

const Extras = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headerTitle}>We are not only a museum</h2>
                <p className={styles.headerDescription}>
                    Dive deeper into the world of nature and science. Our interactive features invite you to explore, learn, and enjoy.
                </p>
            </div>

            <div className={styles.cardsWrapper}>
                {cardContent.map((card, index) => (
                    <div className={styles.card} key={index}>
                        <div
                            className={styles.img}
                            style={{ backgroundImage: `url(${card.imageUrl})` }}
                        ></div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.btnWrapper}>
                <BtnDefault>Explore</BtnDefault>
                <BtnTranparent>Join</BtnTranparent>
            </div>
        </div>
    );
};

export default Extras;
