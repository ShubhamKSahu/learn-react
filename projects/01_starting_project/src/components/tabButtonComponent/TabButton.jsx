import './TabButton.css'
export default function TabButton(props) {
    function clickHandler(){
        console.log("Button Clicked!")
    }
  return (
    <li>
      <button onClick={clickHandler}>{props.children}</button>
    </li>
  );
}
