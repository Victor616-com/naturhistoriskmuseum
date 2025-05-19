import styles from "../../styles/Btn.module.css"

const BtnTranparent = ({ children = "Click me" }) => {
    return (
        <button className={styles.btnTranparent}>
            {children}
            <img src="/naturhistoriskmuseum/assets/images/arrow.svg" alt="arrow" />
        </button>
    );
};
 
export default BtnTranparent;
