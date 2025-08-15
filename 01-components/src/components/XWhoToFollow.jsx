import XFollowCard from "./XFollowCard";

export default function WhoToFollow({ users }) {
    return (
        <aside className="x-whoToFollow">
            <h2 className="x-card-title">A quién seguir</h2>
            {users.map(user => (
                <XFollowCard
                    key={user.username}
                    username={user.username}
                    initialIsFollowing={user.initialIsFollowing}
                    name={user.name}
                />
            ))}
        </aside>
    );
}