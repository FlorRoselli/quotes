import './style.css';
import './App.css';
import Data from './quotes.json'
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';
import NewQuote from './components/NewQuote';


function App() {
  document.title = "Quotes Machine"
  const data = Data.quotes;

  const color = [
    "#ff9d72",
    "#999b84",
    "#83a95c",
    "#ff4646",
    "#c9cbff",
    "#fdb827",
    "#98acf8",
    "#b088f9",
    "#7FFF00",
    "#00FFFF",
    "#DEB887",
    "#8FBC8F",
    "#00CED1",
    "#00BFFF",
    "#DCDCDC",
    "#FFD700",
    "#ff98da",
    "#87a8d0",
    "#2eac6d",
    "#c3b4d2",
    "#e16262",
    "#3e31ae",
    "#fbd400",
    "#40a798",
    "#f6e97f",
    "#00e0ff",
    "#8e9fe6",
    "#a2792f"
  ];

  let colorRandom = Math.round(Math.random() * (color.length -1));
  let random = Math.round(Math.random() * (data.length -1));

  const [colors, setColors] = useState(color[colorRandom]);
  const [quote, setQuote] = useState(data[random].quote);
  const [author, setAuthor] = useState(data[random].author);

  const handleClick = () => {
    colorRandom = Math.round(Math.random() * (color.length -1));
    setColors(color[colorRandom])
    random = Math.round(Math.random() * (data.length - 1));
    setQuote(data[random].quote);
    setAuthor(data[random].author);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ background: colors}}>
        <div className="container mobile">
          <div className="box">
        <QuoteBox colors= {colors} quote = {quote} author = {author}/>
        <NewQuote colors= {colors} handleClick = {handleClick}/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
