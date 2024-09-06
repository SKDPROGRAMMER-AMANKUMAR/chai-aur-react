import UserContextProvider from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Hey this is from chai aur code</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
