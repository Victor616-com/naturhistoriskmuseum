import styles from "../styles/Header.module.css";

const Header = ({ type = "video", src, alt = "Header background", title, description = "" }) => {
    return (
        <div className={styles.wrapper}>
            {type === "video" ? (
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className={styles.videoBackground}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img 
                    src={src} 
                    alt={alt} 
                    className={styles.imageBackground}
                />
            )}
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Header;
