/**
 * MLB Advent Calendar - 2024
 *
 * @module /src/AdventApp.jsx
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries
import Snowfall from 'react-snowfall';
import { useState } from 'react';

// CSS and assets
import './AdventApp.css';
import ornament from './ornament.webp';

// Data
import data from './data.json';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
/**
 * @component AdventApp
 * @description The site's main content, including animated snowfall and linked image.
 */
function AdventApp() {

  const [ isDecember, setIsDecember ] = useState(false); // indicates whether it's December yet

  // Initialize object to hold the current day's data - date, link, etc
  let todaysData = {};

  // Build formatted today's date (m/dd)
  const date = new Date();
  const month = date.getUTCMonth();
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

  // Populate `todaysData`, which will inform which link is available
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
    // If it's not December, don't render a number on the ornament
    let copy = isDecember ? day : '';

    // If it's not December, link to a counter that displays time till Dec 1 2024
    let link = isDecember ? todaysData.url : 'https://0521940382764bd5bbeef30e05fcefff.elf.site';

    // Return a linked ornament image
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
