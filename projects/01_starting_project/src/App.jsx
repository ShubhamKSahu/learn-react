
import Header from './components/headerComponent/Header';
import CoreConcepts from './components/coreConceptComponent/CoreConcept';
import TabButton from './components/tabButtonComponent/TabButton';
import { CORE_CONCEPTS } from './data';
function App() {
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
            <CoreConcepts
            {...CORE_CONCEPTS[1]}
            ></CoreConcepts>
            <CoreConcepts
              {...CORE_CONCEPTS[2]}
            ></CoreConcepts>
            <CoreConcepts
             {...CORE_CONCEPTS[3]}
            ></CoreConcepts>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
