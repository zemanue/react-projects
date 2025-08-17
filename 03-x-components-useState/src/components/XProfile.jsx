import { useState } from 'react';
import './XProfile.css';
import XFollowButton from './XFollowButton'; 

export default function XProfile({
    name,
    username,
    banner,
    bio,
    professionalCategory,
    location,
    link,
    joinDate,
    following,
    followers,
    initialIsFollowing
}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const followingText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing ? 'x-profile-follow-btn is-following' : 'x-profile-follow-btn';


    return (
        <div className="x-profile-page">
            <div className="x-profile-banner">
                <img src={banner} alt="Banner" />
            </div>
            <div className="x-profile-header-row">
                <div className="x-profile-avatar-container">
                    <img className="x-profile-avatar" src={`https://unavatar.io/${username}`} alt={`Avatar de ${name}`} />
                </div>
                <div className="x-profile-header-actions">
                    <button className="x-profile-action-btn">•••</button>
                    <button className="x-profile-action-btn">✉️</button>
                    <XFollowButton initialFollowingState={initialIsFollowing} />
                </div>
            </div>
            <div className="x-profile-info">
                <h2 className="x-profile-name">
                    {name} <span className="x-profile-verified">✔️</span>
                </h2>
                <div className="x-profile-username">@{username}</div>
                <div className="x-profile-bio">
                    {bio} <br />
                    <a href="#" className="x-profile-bio-more">Ver más</a>
                </div>
                <div className="x-profile-extra">
                    <span role="presentation" aria-label="category">💼</span> {professionalCategory}<br />
                    <span role="presentation" aria-label="location">📍</span> {location}<br />
                    <span role="presentation" aria-label="userUrl">🌐</span> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a><br />
                    <span role="presentation" aria-label="calendar">📅</span> Se unió en {joinDate}
                </div>
                <div className="x-profile-stats">
                    <span><b>{following}</b> Siguiendo</span>
                    <span><b>{followers}</b> Seguidores</span>
                </div>
            </div>
        </div>
    );
}
