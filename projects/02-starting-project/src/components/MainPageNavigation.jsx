import { Link } from "react-router-dom";
import styles from './mainPageNavigation.module.css'

function MainPageNavigation(){
  return <header className={styles.header}>
    <nav>
      <ul style={styles.li}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
      </ul>
    </nav>
  </header>;
}
export default MainPageNavigation;