import styles from "../styles/Topics.module.css";
import TopicCard from "./TopicCard";
const Topics = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Topics you will explore</h3>
            <div className={styles.cardsWrapper}>
                <TopicCard 
                        imageUrl="/naturhistoriskmuseum/assets/images/topic1.jpg"
                        title= "Science, nature & meaning"
                        description= "Where do we find beauty, responsibility, and wonder in the world around us?"
                    />
                <TopicCard 
                        imageUrl="/naturhistoriskmuseum/assets/images/topic2.jpg"
                        title= "Science, nature & meaning"
                        description= "Where do we find beauty, responsibility, and wonder in the world around us?"
                    />
                <TopicCard 
                        imageUrl="/naturhistoriskmuseum/assets/images/topic3.jpg"
                        title= "Science, nature & meaning"
                        description= "Where do we find beauty, responsibility, and wonder in the world around us?"
                    />
            </div>
            
            
        </div>
    );
}
 
export default Topics;