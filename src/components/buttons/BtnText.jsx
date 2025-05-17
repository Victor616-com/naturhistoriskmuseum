import styles from "../../styles/Btn.module.css"

const BtnText = ({ children = "Click me" }) => {
    return (
        <button className={styles.btnText}>
            {children}
        </button>
    );
};
 
export default BtnText;
