import styles from "../styles/EventCard.module.css";
import BtnRArrow from "./buttons/BtnRArrow";

const EventCard = ( {imageUrl, title, description, link, date}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img} style={{
            backgroundImage: `url(${imageUrl})`,
            
        }}></div>
            <div className={styles.devider}></div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                
                <div className={styles.btn}>
                    <h4>{date}</h4>
                    <BtnRArrow /> 
                    </div>
                
            </div>
        </div>
    );
}
 
export default EventCard;