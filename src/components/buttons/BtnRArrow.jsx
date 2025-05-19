import styles from "../../styles/Btn.module.css"

const BtnRArrow = () => {
    return (
        <button className={styles.btnArrow}>
            <img
                src="/naturhistoriskmuseum/assets/images/arrow.svg" 
                alt="right" 
            />
        </button>
    );
};
 
export default BtnRArrow;
