import styles from "../styles/TopicCard.module.css";

const TopicCard = ({imageUrl, title, description}) => {
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
                
            </div>
        </div>
    );
}
 
export default TopicCard;