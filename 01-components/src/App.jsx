
import './App.css'
import XWhoToFollow from './components/XWhoToFollow'
import XPost from './components/XPost'

function App() {

  return (
    <>
      <h1>↓ X Components ↓</h1>
      <h2>Posts</h2>
      <XPost
        name="Miguel Angel"
        username="midudev"
        date="2h"
        content="¡Nuevo video en mi canal de YouTube! 🎥"
        image="https://i.ytimg.com/vi/7iobxzd_2wY/hqdefault.jpg"
        replies={12}
        reposts={4}
        likes={56}
        views={1000}
      />
      <h2>Who to follow card:</h2>
      <XWhoToFollow />
    </>

  )
}

export default App
