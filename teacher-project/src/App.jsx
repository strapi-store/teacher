import {AboutMe} from "./components/aboutMe/AboutMe"
import {Header} from "./components/header/Header"
import {MethodologicalActivity} from "./components/methodologicalActivity/MethodologicalActivity"
import {StudentDevelopment} from "./components/studentDevelopment/StudentDevelopment"
import {Contacts} from "./components/contacts/Contacts"
import {Awards} from "./components/awards/Awards"


function App() {


  return (
    <div>
      <Header />
      <AboutMe />
      <StudentDevelopment />
      <MethodologicalActivity />
      <Awards />
      <Contacts />
    </div>
  )
}

export default App
