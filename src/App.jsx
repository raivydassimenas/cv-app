import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

function App() {
  return (
    <div className="container">
    <h1>CV</h1>
    <div className="app-container">
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
    </div>
  )
}

export default App
