// CSS and assets
import './AdventApp.css';

// Libraries
import Snowfall from 'react-snowfall';

// Data
import data from './data.json';

/**
 * Renders the main content of the page.
 */
function AdventApp() {
  // Build formatted date (m/dd)
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  let formattedDate = `${month}/${day}`;

  // If it's December, update `day` and `formattedDate` accordingly
  if (month === 12) {
    let day = date.getUTCDate();
    formattedDate = `${month}/${day}`;
  }

  // Initialize object to hold today-specific data
  let todaysData = {};
  // Grab today-specific data
  for (let entry of data) {
    if (entry.date === formattedDate) {
      todaysData = entry;
    }
  }

  // Copy
  let headerCopy = `On the ${todaysData.number} day of Christmas, your true love sent to you...`

  // Additional note
  let note;
  if (todaysData?.note) {
    note = 
      <div id="overlay">
        <p>
          {todaysData?.note}
        </p>
      </div>;
  }

  let linkImage = todaysData.date === "not december!" ? '' : '';

  let copperImage = todaysData.url === "" ? 
    <img src={linkImage} alt="Copper dog wearing a santa hat" id="copper-image" /> :
    <a href={todaysData.url || ''}>
      <img src={linkImage} alt="Copper dog wearing a santa hat" />
    </a>;

  // Render page content
  return (
    <div className="advent-app">
      <div className="snowfall">
        <Snowfall />
      </div>

      <h1 id="title">
        {headerCopy}
      </h1>

        {copperImage}

        <p id="copy">
          {todaysData?.copy ? todaysData.copy : ''}
        </p>
        <p id="note">
          {todaysData?.note ? note : ''}
        </p>

    </div>
  );
}

export default AdventApp;
