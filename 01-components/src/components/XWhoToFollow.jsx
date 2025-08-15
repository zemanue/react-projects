import XFollowCard from "./XFollowCard";

export default function WhoToFollow() {
    return (
        <aside>
            <h2>A quién seguir</h2>
            <XFollowCard
                username="midudev"
                initialIsFollowing={true}
                name="Miguel Angel"
            />
            <XFollowCard
                username="mouredev"
                initialIsFollowing={false}
                name="Brais Moure"
            />
            <XFollowCard
                username="todo_code"
                initialIsFollowing={false}
                name="Todo Code"
            />
        </aside>
    );
}
