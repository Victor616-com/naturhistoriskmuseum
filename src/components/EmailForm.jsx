import styles from "../styles/EmailForm.module.css";
import BtnText from "./buttons/BtnText";
import { useState } from 'react';

const EmailForm = ({ buttonText = "Join Now", text }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // "success", "error", or null

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setStatus('error');
            return;
        }

        // Simulate successful submission
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 500);
    };

    return (
        <div className={styles.wrapper}>
            {status === 'success' ? (
                <h4 className={styles.thankYouMessage}>Thank you for signing up!</h4>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                    <BtnText type="submit">{buttonText}</BtnText>
                </form>
                
            )}
            <p className={styles.terms}>By clicking Join Now, you agree to our Terms and Conditions.</p>
        </div>
    );
};

export default EmailForm;
