import { useState } from 'react'
import styles from './XFollowButton.module.css';

export default function XFollowButton({ initialFollowingState }) {
    const [isFollowing, setIsFollowing] = useState(initialFollowingState);
    const followingText = (isFollowing) ? "Siguiendo" : "Seguir";
    const [buttonText, setButtonText] = useState(followingText);
    const buttonClass = (isFollowing) ? `${styles.button} ${styles.isFollowing}` : styles.button;

    const handleClick = () => {
        setIsFollowing(!isFollowing);
        setButtonText(isFollowing ? 'Seguir' : 'Dejar de seguir');
    };

    const handleMouseEnter = () => {
        if (isFollowing) {
            setButtonText('Dejar de seguir');
        }
    };

    const handleMouseLeave = () => {
        if (isFollowing) {
            setButtonText('Siguiendo');
        }
    };

    return (
        <button
            className={buttonClass}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {buttonText}
        </button>
    );
}