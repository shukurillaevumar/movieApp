import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [searchText, setSearchText] = useState("");
  const [receivedData, setReceivedData] = useState(null);

  async function findMovie(e)  {
    e.preventDefault();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7553ef4c42d4e9fa752f1280a0cc08de&query=${searchText}`
    );
    setReceivedData(res.data.results);
  };

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
              <>
              {receivedData && <img width="700px" height="300px" src={`https://image.tmdb.org/t/p/w500${receivedData[0].poster_path}`} alt='img' />}
              <div className='groupElement'>
              <span className='filmName'>{receivedData && receivedData[0].original_title}</span>
              <span className='filmPlot'>PLot</span>
              <div className='btnGroup'>
              <button className='btnWatch'>Watch</button>
              <button className='btnPlus'>+</button>
              </div>
              </div>
              </>
            
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
  );
}

export default App;