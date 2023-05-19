import './index.scss';


const extensions: string[] = ['360р', '720р', 'HD', 'Full HD', '4K'];

function Top() {

  const handleClick =(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
    if (event.target instanceof HTMLButtonElement) {
      const buttonText = event.target.textContent;
      alert(`Клик на кнопку: ${buttonText}`);
    }
  }

  return <div 
    onClick={handleClick}
    className='top'
  >
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    <div className='top_btns'>

    {/* обычно в качестве key прописывается id, но в данном случае иожно и index, так как изменяться они не будут */}
    {extensions.map((item, index) => 
      <button 
        key={index} 
        className='btn'
      >{item}</button>
    )}
    </div>
  </div>
}

export default Top;