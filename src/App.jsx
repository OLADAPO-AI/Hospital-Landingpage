import Header1 from "./Header"
import Header2 from "./Header2"
import Hero from "./Hero"
import FindDoctor from "./FindDoctor"
import Results from "./results"
import Reason from "./reason"
import Service from "./service"
import MeetTeam from "./MeetTeam"
import Client from "./Client"
import Newsletter from "./newsletter"
import Footer from "./footer"
function App() {
 

  return (
    <div className="w-full h-auto flex flex-col " style={{backgroundColor: "#ECECEC"}}>
       <Header1 />
       <Header2 />
       <Hero />
       <FindDoctor />
       <Results />
       <Reason />
       <Service />
       <MeetTeam />
       <Client />
       <Newsletter />
       <Footer />
    </div>
  )
}

export default App
