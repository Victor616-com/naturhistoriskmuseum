import styles from "../styles/Quotes.module.css";

const Quotes = ({ quotes }) => {
    return (
        <div className={styles.wrapper}>
            <h3>Quotes from testimonies:</h3>
            <div className={styles.quoteCardWrapper}>
                {quotes.map((quoteObj, index) => (
                    <div key={index} className={styles.quoteCard}>
                        <img 
                            src={quoteObj.imageURL} 
                            alt={quoteObj.alt || "Quote image"} 
                            className={styles.image}
                        />
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <p>{quoteObj.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quotes;
