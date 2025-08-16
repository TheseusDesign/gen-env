import './CoreConcept.css'

export default function CoreConcept({header,paragraph,attribute = "peasant",children}) {
  return (
    <li className='CoreConcept'>
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <p>{attribute}</p>
      {children}
    </li>)
}