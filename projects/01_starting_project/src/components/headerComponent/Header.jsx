 import reactImg from '../../assets/react-core-concepts.png'
 import './Header.css'
 const description = ['Fundamental', 'Core', 'Crucial'];
 let randomIndex = Math.floor(Math.random() * (description.length));
 
 export default function Header() {
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