// components/reusable/AboutContent.js
import styles from "../styles/AboutContent.module.css";
import BtnDefault from "./buttons/btnDefault";

const AboutContent = ({ title, description, buttonText}) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <div className={styles.content}>
                <p>{description}</p>
                <BtnDefault>{buttonText}</BtnDefault>
            </div>
        </div>
    );
}
 
export default AboutContent;