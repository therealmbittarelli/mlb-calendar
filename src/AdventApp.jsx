// CSS and assets
import './AdventApp.css';
import ornament from './ornament.webp';

// Libraries
import Snowfall from 'react-snowfall';
import { useState } from 'react';

// Data
import data from './data.json';

/**
 * Renders the main content of the page.
 */
function AdventApp() {

  const [ isDecember, setIsDecember ] = useState(false); // indicates whether it's December yet

  // Initialize object to hold the current day's data - date, link, etc
  let todaysData = {};

  // Build formatted date (m/dd)
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  let formattedDate = `${month}/${day}`;

  // If it's December, update `day` and `formattedDate` accordingly
  if (month === 12) {
    // Update state
    setIsDecember(true);

    // Format date
    let day = date.getUTCDate();
    formattedDate = `${month}/${day}`;
  }

  // Populate `todaysData`
  for (let entry of data) {
    if (entry.date === formattedDate) {
      todaysData = entry;
    }
  }

  /**
   * Generates a linked ornament.
   * @returns {jsx} Ornament link jsx.
   */
  const generateLink = () => {
    let copy = isDecember ? day : '';
    let link = isDecember ? todaysData.url : 'https://0521940382764bd5bbeef30e05fcefff.elf.site';

    return (
      <a
        href={link}
        rel="noreferrer noopener"
        target="_blank"
        id="link-wrapper"
      >
        <img src={ornament} alt="" id="ornament" />
        <p id="date">{copy}</p>
      </a>
    )
  }

  // Render page content
  return (
    <div className="advent-app">
      <div className="snowfall">
        <Snowfall />
      </div>

      {isDecember && generateLink()}

    </div>
  );
}

export default AdventApp;
