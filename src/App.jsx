import { Feed } from './components/feed/Feed'
import { Rightbar } from './components/rightbar/Rightbar'
import { Sidebar } from './components/sidebar/Sidebar'
import Topbar from './components/topbar/topbar'
import   './App.css'

function App() {
  

  return (
    <div >
    <Topbar/>
    <div className="bodyContainer">
      
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </div>
  )
}

export default App
