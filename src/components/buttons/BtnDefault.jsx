import styles from "../../styles/Btn.module.css"

const BtnDefault = ({ children = "Click me" }) => {
    return (
        <button className={styles.btnDefault}>
            {children}
        </button>
    );
};
 
export default BtnDefault;
