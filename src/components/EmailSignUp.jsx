import styles from "../styles/EmailSignUp.module.css";
import EmailForm from "./EmailForm";

const EmailSignUp = ({ title, bodyOfText, link, imageUrl }) => {
    return (
        <div className={styles.wrapper} style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative", // Add this for absolute positioning context
            minHeight: "300px", // Add a minimum height
        }}>
            
            {/* Dark overlay */}    
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% opacity black
                zIndex: 0, // Lower than content
                boxSizing: "border-box", // Fixed string value
            }}></div>
            
            {/* Content */}
            <div className={styles.content} style={{ position: "relative", zIndex: 2 }}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <p>{bodyOfText}</p>
                </div>
                
                <EmailForm />
                
            </div>
            <div style={{
                zIndex: 1,
            }}>
               
            </div>
            
        </div>
    );
}
 
export default EmailSignUp;