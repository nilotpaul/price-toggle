import { useState } from 'react'
import './App.css'

function App() {

  const [annually, setAnnually] = useState(false);
  const handleClick = () => {
    setAnnually(!annually);
  };

  return (
     <div className='background'>
     
      <h2>Pricing</h2>
      <div className="main">
      <p>Annually</p>
      <label className="switch">
        <input type="checkbox" onClick={handleClick}/>
        <span className="slider" />
      </label>
      <p>Monthly</p>
      </div>
      <div className="container">
        <div className="basic">
          <ul>
          <p>Basic</p>
          <li>{annually && <h1>$19.99</h1> || <h1>$199.99</h1>}</li>
          <li><h4>50 GB Storage</h4></li><hr/>
          <li><h4>2 Users Allowed</h4></li><hr/>
          <li><h4>Send Upto 3 GB</h4></li><hr/>
          <a href="/"><button>Learn More</button></a>
          </ul>
        </div>
        <div className="professional">
          <ul>
          <p>Professional</p>
          <li>{annually && <h1>$24.99</h1> || <h1>$249.99</h1>}</li>
          <li><h4>1 TB Storage</h4></li><hr/>
          <li><h4>5 Users Allowed</h4></li><hr/>
          <li><h4>Send Upto 10 GB</h4></li><hr/>
          <a href="/"><button>Learn More</button></a>
          </ul>
        </div>
        <div className="master">
          <ul>
          <p>Master</p>
          <li>{annually && <h1>$39.99</h1> || <h1>$399.99</h1>}</li>
          <li><h4>2 TB Storage</h4></li><hr/>
          <li><h4>10 Users Allowed</h4></li><hr/>
          <li><h4>Send Upto 20 GB</h4></li><hr/>
          <a href="/"><button>Learn More</button></a>
          </ul>
        </div>
      </div>
     </div>
  )
}

export default App
