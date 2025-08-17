import XFollowButton from './XFollowButton'; 

export default function XFollowCard({ username, initialIsFollowing, name}) {

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
                <XFollowButton initialFollowingState={initialIsFollowing} />
            </aside>
        </article>
    );
}