import "./XPost.css";

export default function XPost({
    name,
    username,
    date,
    content,
    image,
    replies = 0,
    reposts = 0,
    likes = 0,
    views = 0
}) {
    return (
        <article className="x-post">
            <img className="x-post-avatar" src={`https://unavatar.io/${username}`} alt={name} />
            <div className="x-post-body">
                <header className="x-post-header">
                    <span className="x-post-name">{name}</span>
                    <span className="x-post-username">@{username}</span>
                    <span className="x-post-dot">·</span>
                    <span className="x-post-date">{date}</span>
                </header>
                <div className="x-post-content">{content}</div>
                {image && (
                    <div className="x-post-image">
                        <img src={image} alt="post media" />
                    </div>
                )}
                <footer className="x-post-footer">
                    <span className="x-post-replies">💬 {replies}</span>
                    <span className="x-post-reposts">🔁 {reposts}</span>
                    <span className="x-post-likes">❤️ {likes}</span>
                    <span className="x-post-views">👁️ {views}</span>
                </footer>
            </div>
        </article>
    )
}
