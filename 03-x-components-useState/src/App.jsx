
import './App.css'
import XWhoToFollow from './components/XWhoToFollow'
import XPost from './components/XPost'
import XProfile from './components/XProfile'

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
      <h1>↓ X Components ↓</h1>
      
      <h2>Who to follow card</h2>
      <XWhoToFollow users={users} />
      <br />
      
      <h2>Post</h2>
      <XPost
        name={users[0].name}
        username={users[0].username}
        date="2h"
        content="¡Estoy aprendiendo React! 🥳"
        image="https://i.ytimg.com/vi/7iobxzd_2wY/hqdefault.jpg"
        replies={12}
        reposts={4}
        likes={56}
        views={1000}
      />
      <br />

      <h2>Profile</h2>
      <XProfile
        name={users[1].name}
        username={users[1].username}
        banner="https://pbs.twimg.com/profile_banners/3057747517/1740491967/1080x360"
        bio={`📚 Te enseño programación desde cero
        💻 Software engineer | Freelance fullstack
        ⭐️ GitHub Star | Microsoft MVP
        🤘 Únete al campus de la comunidad: http://mouredev.pro`}
        professionalCategory="Ciencia y tecnología"
        location="Building software with love from Galicia (Spain) to the world" 
        link="https://mouredev.pro/"
        joinDate="Marzo 2015"
        following={404}
        followers="254,9 mil"
        initialIsFollowing={true}
      />
      <br />
    </>

  )
}

export default App
