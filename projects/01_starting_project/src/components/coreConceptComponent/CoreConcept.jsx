
import {CORE_CONCEPTS} from '../../data'
import './CoreConcepts.css'
export default function CoreConcepts({desc, image, title}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}