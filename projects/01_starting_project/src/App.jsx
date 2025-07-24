import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
const description = ['Fundamental', 'Core', 'Crucial'];
let randomIndex = Math.floor(Math.random() * (description.length));
console.log(randomIndex);

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description[randomIndex]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({desc, image, title}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}

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
      </main>
    </div>
  );
}

export default App;
