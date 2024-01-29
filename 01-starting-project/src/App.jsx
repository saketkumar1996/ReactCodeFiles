import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png"
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";



function App() {
const [selectedTopic,setSelectedTopic] = useState('please click a button')

function handleSelect(selectedButton){
  setSelectedTopic(selectedButton)


}
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
        <section id="examples">
          <h2>Example</h2>
          <menu>
          <TabButton onSelect={()=>handleSelect('Components')} >Components</TabButton>
          <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>

          </menu>
        {selectedTopic}

        </section>
      </main>
    </div>
  );
}

export default App;
