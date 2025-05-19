import styles from "../styles/NewAddition.module.css";
import BtnText from "./buttons/BtnText";
import { Link } from "react-router-dom";

const NewAddition = ({ title, bodyOfText, link, imageUrl }) => {
    return (
        <div className={styles.wrapper} style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "300px",
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 0,
                boxSizing: "border-box",
            }}></div>

            <div className={styles.content} style={{ position: "relative", zIndex: 2 }}>
                <h2>{title}</h2>
                <p>{bodyOfText}</p>
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
                <Link to={link} style={{ textDecoration: 'none' }}>
                    <BtnText>See more</BtnText>
                </Link>
            </div>
        </div>
    );
};

export default NewAddition;
