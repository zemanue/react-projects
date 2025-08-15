export default function XFollowCard({ username, initialIsFollowing, name}) {
    const followingText = initialIsFollowing ? 'Siguiendo' : 'Seguir';

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
                <button className='x-followCard-button'>{followingText}</button>
            </aside>
        </article>
    );
}