import SignUp from './(auth)/SignUp';
import SignIn from './(auth)SignIn';
import './App.css'


const App = () => {

  return (
    <div>
    <h1>Welcome to My App</h1>
    <SignUp />
    <SignIn />
  </div>
   
  )
}

export default App
