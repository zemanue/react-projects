import './App.css'
import Header from './components/Header'
import Contador from './components/Contador'
import ContadorDefectuoso from './components/ContadorDefectuoso'
import UserList from './components/UserList'

function App() {
  return (
    <>
      <Header title="Admin Panel" />
      <h3>Contador defectuoso (sin useState)</h3>
      <ContadorDefectuoso />
      <h3>Contador funcional (con useState)</h3>
      <Contador />
      <UserList />
    </>
  )
}

export default App