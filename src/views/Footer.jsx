import EmailForm from "../components/EmailForm";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.emailSubscription}>
                <div className={styles.emailText}>
                    <h3>Subscribe for updates</h3>
                    <p>Stay informed about our latest exhibitions and events.</p>
                </div>
                <div className={styles.formWrapper}>
                    <EmailForm 
                        buttonText = "Join"
                    />
                </div>
                
            </div>
            <div className={styles.mainContent}>
                <div className={styles.contacts}>
                    <div className={styles.contactCard}>
                        <h4>Natural History Museum</h4>
                        <div className={styles.contactCardContent}>
                            <p>Wilhelm Meyers Allé 10 8000 Aarhus C</p>
                            <p>Tel. 86 12 97 77</p>
                            <p>nm@nathist.dk</p>
                            <p>CVR: 29073910</p>
                        </div>
                    </div>
                    <div className={styles.contactCard}>
                        <h4>The Mols Laboratory</h4>
                        <div className={styles.contactCardContent}>
                            <p>Strandkærvej 6, Femmøller 8400 Ebeltoft</p>
                            <p>Tel. 86 36 25 35 or 86 12 97 77</p>
                            <p>molslab@molslab.dk</p>
                        </div>
                    </div>
                </div>
                <div className={styles.usefulLinks}>
                    <div className={styles.columnsWrapper}>
                        <div className={styles.column}>
                            <h5>Museum opening hours</h5>
                            <div className={styles.program}>
                                <p>Monday: <span>Closed</span></p>
                                <p>Tuesday: <span>9-16</span></p>
                                <p>Wednesday: <span>9-21</span></p>
                                <p>Thursday - Sunday: <span>9-16</span></p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <h5>Quick Links</h5>
                            <ul className={styles.links}>
                                <li>Exhibitions</li>
                                <li>Events Calendar</li>
                                <li>Visit Us</li>
                                <li>Contact Us</li>
                                <li>Support Us</li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h5>Social Media</h5>
                            <ul className={styles.links}>
                                <li>Facebook Page</li>
                                <li>Events Calendar</li>
                                <li>Instagram Feed</li>
                                <li>YouTube Channel</li>
                                <li>LinkedIn Profile</li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h5>Legal</h5>
                            <ul className={styles.links}>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Cookie Policy</li>
                                <li>Accessibility</li>
                                <li>Site Map</li>
                            </ul>
                        </div>
                    </div>
                    <p className={styles.smileyReport}>The Danish Veterinary and Food Administration's smiley reports - click <span onClick={() => window.open("https://www.findsmiley.dk/1391187", "_blank")}>here</span></p>
                </div>
                
            </div>
            <div className={styles.devider}></div>
            <div className={styles.bottom}>
                <div className={styles.copyright}>
                    <p>© 2025 Natural History Museum. All rights reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Settings</p>
                </div>
                <div className={styles.socials}>
                    <img src="/naturhistoriskmuseum/assets/images/icons/Facebook.svg" alt="Facebook Icon" />
                    <img src="/naturhistoriskmuseum/assets/images/icons/Instagram.svg" alt="Facebook Icon" />
                    <img src="/naturhistoriskmuseum/assets/images/icons/X.svg" alt="Facebook Icon" />
                    <img src="/naturhistoriskmuseum/assets/images/icons/LinkedIn.svg" alt="Facebook Icon" />
                    <img src="/naturhistoriskmuseum/assets/images/icons/Youtube.svg" alt="Facebook Icon" />

                </div>
            </div>
        </div>
    );
}
 
export default Footer;