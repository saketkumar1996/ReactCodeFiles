import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";




function App() {
const [selectedTopic,setSelectedTopic] = useState()

function handleSelect(selectedButton){
  setSelectedTopic(selectedButton)


}

let tabContent = <p>Please select a topic</p>

if(selectedTopic){
  tabContent=<div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
  </div>
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
          <TabButton onSelect={()=>handleSelect('components')} >Components</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>

          </menu>
        {tabContent}
        

        </section>
      </main>
    </div>
  );
}

export default App;
