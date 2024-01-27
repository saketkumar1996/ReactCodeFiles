import reactImg from "./assets/react-core-concepts.png"
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";



function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}
          />
          <CoreConcept  {...CORE_CONCEPTS[1]}
          />
          <CoreConcept {...CORE_CONCEPTS[2]}
          />
          <CoreConcept
          />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
