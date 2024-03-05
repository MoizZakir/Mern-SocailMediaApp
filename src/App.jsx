import { Feed } from './components/feed/Feed'
import { Rightbar } from './components/rightbar/Rightbar'
import { Sidebar } from './components/sidebar/Sidebar'
import Topbar from './components/topbar/topbar'
import   './App.css'

function App() {
  

  return (
    <>
    <Topbar/>
    <div className="bodyContainer">
      
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

export default App
