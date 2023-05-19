import './index.scss';


const items: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adioiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem insum dolor sit amet consectetur adiniscing olit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lore ipsum dolor sit amet, consectetur adipiscina Aran Amom incid dunt ut labore et colore magna aliqua'
]

function Bottom() {

  return <div className="bottom">
    <ul className="bottom__list">
      {items.map((item, index) => 
        <li 
          key={index} 
          className="bottom__item"
        >
          <div>{++index}</div>
          <p>{item}</p>
        </li>
      )}
    </ul>
  </div>
}


export default Bottom;