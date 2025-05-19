import styles from "../../styles/Btn.module.css"

const BtnLArrow = () => {
    return (
        <button className={styles.btnArrow} >
            <img 
                src="/naturhistoriskmuseum/assets/images/arrow.svg" 
                alt="right"
                style={{ transform: "rotate(180deg)" }}
             />
        </button>
    );
};
 
export default BtnLArrow;
