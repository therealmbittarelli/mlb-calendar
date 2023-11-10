import Lights from './Lights.js';
// CSS and assets
import './AdventApp.css';
import './index.css';
import './Lights.css'
import image from './house-sketch.png';
import dailyData from './data.json';

// Libraries
import Snowfall from 'react-snowfall';

/**
 * Renders the main content of the page.
 */
function AdventApp() {
  // Build formatted date (m/dd)
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  let formattedDate = 'not december!';

  // If it's december, update `day` and `formattedDate` accordingly
  if (month === 12) {
    let day = date.getUTCDate();
    formattedDate = `${month}/${day}`;
  }

  // Initialize object to hold today-specific data
  let todaysData = {};
  // Grab today-specific data
  for (let entry of dailyData) {
    if (entry.date === formattedDate) {
      todaysData = entry;
    }
  }

  // Copy
  let headerCopy = <h1 id="advent">On the {todaysData.number} day of Christmas...</h1>
  if (todaysData.number === 'doh') {
    headerCopy = <h1 id="early">Someone has arrived a bit early...</h1>
  }

  let note =
    <div id="overlay">
      <p>
        {todaysData.note}
      </p>
    </div>;

  // Render page content
  return (
    
    <div className="advent-app">

      {/* Lights */}
      <Lights/>

      {/* Snow */}
      <div className="snowfall">
        <Snowfall />
      </div>

      {headerCopy}

      {/* <a 
        id="daily-content" 
        href={`${todaysData.url}`} 
        rel="noreferrer noopener"
        target="_blank"
      > */}
        {/* <img
          src={image}
          alt="An AI-generated black and white sketch of our home."
        /> */}
      {/* </a> */}
      <p>
        {todaysData.copy}
      </p>
        {todaysData.note ? note : ''}

    </div>
  );
}

export default AdventApp;
