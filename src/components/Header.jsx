import styles from "../styles/Header.module.css";

const Header = () => {
    return ( 
        <div className={styles.wrapper}>
            <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.videoBackground}
            >
                <source src="/naturhistoriskmuseum/assets/videos/header_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Discover the wonders of Nature Today</h1>
            </div>
        </div>
     );
}
 
export default Header;