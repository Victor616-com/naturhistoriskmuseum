import styles from "../styles/Images.module.css";

const Images = ({ imageUrls }) => {
    return ( 
        <div className={styles.wrapper}>
            {imageUrls.map((url, index) => (
                <div
                    key={index}
                    className={styles.image}
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
            ))}
        </div>
    );
};

export default Images;
