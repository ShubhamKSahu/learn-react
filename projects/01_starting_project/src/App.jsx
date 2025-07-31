import { useState } from 'react';
import Header from './components/headerComponent/Header';
import CoreConcepts from './components/coreConceptComponent/CoreConcept';
import TabButton from './components/tabButtonComponent/TabButton';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
function App() {
  const [ tabName, setTabName] = useState("Please select a tab!")
  function handleSelect(tab) { 
  setTabName(tab);
}

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              desc={CORE_CONCEPTS[0].desc}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[tabName].title}</h3>
            <p>{EXAMPLES[tabName].description}</p>
            <pre>
              <code>{EXAMPLES[tabName].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
