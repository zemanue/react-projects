import { useState } from "react";

export default function XFollowCard({ username, initialIsFollowing, name}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const followingText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing ? 'x-followCard-button is-following' : 'x-followCard-button';

    return (
        <article className='x-followCard'>
            <header className='x-followCard-header'>
                <img
                    className='x-followCard-avatar'
                    alt={`El avatar de ${username}`}
                    src={`https://unavatar.io/${username}`}
                />
                <div className='x-followCard-info'>
                    <strong>{name}</strong>
                    <span className='x-followCard-infoUserName'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={() => setIsFollowing(!isFollowing)}>{followingText}</button>
            </aside>
        </article>
    );
}