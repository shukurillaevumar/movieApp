import { useState } from 'react';
import './App.css';
import axios from 'axios';

const MovieFinder = () => {
  const [searchText, setSearchText] = useState("");
  const [receivedData, setReceivedData] = useState([]);
}
  async function findMovie(e)  {
    e.preventDefault();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7553ef4c42d4e9fa752f1280a0cc08de&query=${searchText}`
    );
    setReceivedData(res.data.results);
  };
function App() {
  return (
    <div className="App">
      <div className="sections">
        <div className="firstSection">  
          <div className="title">
            <span><i class="bi bi-cassette"></i> Exxmon.</span>
          </div>
          <div className='settings'>
            <div className='menu'>
              <span>Home</span>
              <span>Community</span>
              <span>Discovery</span>
              <span>Coming soon</span>
            </div>
            <div className='social'>
              <span>Friends</span>
              <span>Parties</span>
              <span>Media</span>
            </div>
            <div className='general'>
              <span>Setting</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className='options'>
            <span>TV series</span>
            <span>Movies</span>
            <span>Animes</span>
          </div>
          <div className='filmImage'>
            <img width="700px" height="300px" src='data:image/png;base64,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' alt='img' />
            <div className='groupElement'>
              <span className='filmName'>DEADPOOL</span>
              <span className='filmPlot'>PLot</span>
              <div className='btnGroup'>
              <button className='btnWatch'>Watch</button>
              <button className='btnPlus'>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdSection">
          <form onSubmit={findMovie}>
            <div className='inputGroup'>
            <i class="bi bi-search"></i>
            </div>
            <input type='text' placeholder="Search" className="inputSearch" onChange={(e) => setSearchText(e.target.value)} />
            <button type='submit' className='btnSubmit'>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;