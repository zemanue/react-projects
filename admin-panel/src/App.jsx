import './App.css'
import Header from './components/Header'
import Contador from './components/Contador'
import UserList from './components/UserList'

function App() {
  return (
    <>
      <Header title="Admin Panel" />
      <Contador />
      <UserList />
    </>
  )
}

export default App