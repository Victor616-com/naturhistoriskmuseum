import styles from "../styles/BuyTikets.module.css";
import BtnDefault from "./buttons/btnDefault";
import BtnTranparent from "./buttons/BtnTransparent";


const BuyTikets = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <h2 className={styles.title}>Purchase Your Tickets for Exciting Exhibitions</h2>
                    <p className={styles.description}>Explore our diverse ticket options to experience nature like never before. Secure your spot online and enjoy exclusive access.</p>
                </div>
                <div className={styles.admissionTypes}>
                    <div className={styles.admissionType}>
                        <h5 className={styles.admissionTitle}>General Admission</h5>
                        <p className={styles.admissionDescription}>Access to all exhibitions and interactive displays for one day.</p>
                    </div>
                    <div className={styles.admissionType}>
                        <h5 className={styles.admissionTitle}>Free admission for children</h5>
                        <p className={styles.admissionDescription}>Bring the whole family and save on admission for two adults and children.</p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <BtnDefault >Buy Tickets</BtnDefault>
                    <BtnTranparent>Learn More</BtnTranparent>
                </div>
            </div>
            <div className={styles.img} style={{
                backgroundImage: `url("/naturhistoriskmuseum/assets/images/adults_and_kids.png")`}}>
            </div>
        </div>
    );
}
 
export default BuyTikets;