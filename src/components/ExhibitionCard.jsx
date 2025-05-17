import styles from "../styles/ExhibitionCard.module.css";
import BtnRArrow from "./buttons/BtnRArrow";

const ExhibitionCard = ( {imageUrl, title, description, link}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img} style={{
            backgroundImage: `url(${imageUrl})`,
            
        }}></div>
            <div className={styles.devider}></div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles.btn}><BtnRArrow /> </div>
                
            </div>
        </div>
    );
}
 
export default ExhibitionCard;