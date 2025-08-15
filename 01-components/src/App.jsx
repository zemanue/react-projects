
import './App.css'
import XWhoToFollow from './components/XWhoToFollow'
import XPost from './components/XPost'

function App() {

  const users = [
    {
      username: "midudev",
      name: "Miguel Angel",
      initialIsFollowing: true
    },
    {
      username: "mouredev", 
      name: "Brais Moure",
      initialIsFollowing: false
    },
    {
      username: "otrodev",
      name: "Otro Desarrollador",
      initialIsFollowing: false
    }
  ]

  return (
    <>
      <h1>↓ X Components (no state) ↓</h1>
      <h2>X Post</h2>
      <XPost
        name={users[0].name}
        username={users[0].username}
        date="2h"
        content="¡Nuevo video en mi canal de YouTube! 🎥"
        image="https://i.ytimg.com/vi/7iobxzd_2wY/hqdefault.jpg"
        replies={12}
        reposts={4}
        likes={56}
        views={1000}
      />
      <h2>Who to follow card</h2>
      <XWhoToFollow users={users} />
    </>

  )
}

export default App
