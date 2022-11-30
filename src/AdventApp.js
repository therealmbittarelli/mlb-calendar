// CSS and assets
import './AdventApp.css';
import tree from './firtree.png';

// Libraries
import Snowfall from 'react-snowfall';

/**
 * Renders the main content of the page.
 */
function AdventApp() {
  // Build formatted date (m/dd)
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const formattedDate = `${month}/${day}`;

  // Set data object for each advent day
  const dailyData = [
    {
      'date': '11/30',
      'number': 'Novemberth',
      'copy': "not time to click the tree yet!",
      'url': 'https://www.youtube.com/watch?v=i7pMz74EpPA',
      'note': 'Not yet!'
    },
    {
      'date': '12/1',
      'number': 'first',
      'copy': "click the tree!",
      // Backwards Wordle
      'url': 'https://www.simn.me/eldrow/'
    },
    {
      'date': '12/2',
      'number': 'second',
      'copy': "click the tree!",
      // Walk the Moon Shut Up and Dance video
      'url': 'https://www.youtube.com/watch?v=6JCLY0Rlx6Q',
      'note': 'I love this song. It reminds me of some of the smiley-est and most silly-fun moments we\'ve had together, usually dancing at someone\'s wedding.'
    },
    {
      'date': '12/3', 
      'number': 'third',
      'copy': "click the tree!",
      // Yacht Mechanic - steam
      'url': 'https://store.steampowered.com/app/1263620/Yacht_Mechanic_Simulator/'
    },
    {
      'date': '12/4',
      'number': 'fourth',
      'copy': "click the tree!",
      // Fluffernutter hot chocolate recipe
      'url': 'https://spoonuniversity.com/recipe/simpsons-inspired-fluffernutter-hot-chocolate'
    },
    {
      'date': '12/5',
      'number': 'fifth',
      'copy': "click the tree!",
      // Dog in baby carrier
      'url': 'https://imgur.com/gallery/VPf08JN'
    },
    {
      'date': '12/6',
      'number': 'sixth',
      'copy': "click the tree!",
      // Mufasa death cake
      'url': 'https://imgur.com/t/wow/Vuq5IpX'
    },
    {
      'date': '12/7',
      'number': 'seventh',
      'copy': "click the tree!",
      // Laszlo best of
      'url': 'https://www.youtube.com/watch?v=iYhqXaqNcaE'
    },
    {
      'date': '12/8',
      'number': 'eighth',
      'copy': "click the tree!",
      // Smart corgi with stick
      'url': 'https://imgur.com/gallery/ihEK0F0'
    }, 
    {
      'date': '12/9',
      'number': 'ninth',
      'copy': "click the tree!",
      // Ear training games
      'url': 'https://trainer.thetamusic.com/en/content/music-training-games'
    },
    {
      'date': '12/10',
      'number': 'tenth',
      'copy': "click the tree!",
      // Photo of us skiing
      'url': 'https://photos.app.goo.gl/daCideY1DpeApBFm9'
    },
    {
      'date': '12/11',
      'number': 'eleventh',
      // Water park day for dogs
      'url': 'https://imgur.com/gallery/JbfYspV'
    },
    {
      'date': '12/12',
      'number': 'twelfth',
      'copy': "click the tree!",
      // Amazon Trail
      'url': 'https://playonline-games.com/amazon-trail/'
    },
    {
      'date': '12/13',
      'number': 'thirteenth',
      'copy': "click the tree!",
      // Human music group 
      'url': 'https://www.youtube.com/watch?v=6LDzBVxCugM'
    },
    {
      'date': '12/14',
      'number': 'fourteenth',
      'copy': "click the tree!",
      // Robot dog harassing other dogs
      'url': 'https://imgur.com/t/science_and_tech/tT6zkdb'
    },
    {
      'date': '12/15',
      'number': 'fifteenth',
      'copy': "click the tree!",
      // Cat on ice
      'url': 'https://imgur.com/gallery/3HEmueb'
    },
    {
      'date': '12/16',
      'number': 'sixteenth',
      'copy': "click the tree!",
      // Dogs and man on swing
      'url': 'https://www.instagram.com/reel/Ck-349sDQgE/?igshid=MDJmNzVkMjY='
    },
    {
      'date': '12/17',
      'number': 'seventeenth',
      'copy': "click the tree!",
      // Letter to new dads
      'url': 'https://mumcentral.com.au/new-dads-letter/'
    },
    {
      'date': '12/18',
      'number': 'eighteenth',
      'copy': "click the tree!",
      // Book of HONK at HONK!TX
      'url': 'https://photos.app.goo.gl/z2NSm8gfkkzzpBHW8'
    }, 
    {
      'date': '12/19',
      'number': 'nineteenth',
      'copy': "click the tree!",
      // Light up tree game
      'url': 'https://akidsheart.com/holidays/christms/ctreelights/ctreelights.html'
    },
    {
      'date': '12/20',
      'number': 'twentieth',
      'copy': "click the tree!",
      // Bird pops the bubble
      'url': 'https://imgur.com/gallery/l3eOpXz'
    },
    {
      'date': '12/21',
      'number': 'twenty first',
      'copy': "click the tree!",
      // Copper puzzle
      'url': 'https://im-a-puzzle.com/share/f28b2e3ec7ef1a4'
    },
    {
      'date': '12/22',
      'number': 'twenty second',
      'copy': "click the tree!",
      // Adventures of Tin Tin channel
      'url': 'https://www.youtube.com/@rebekahmathew9810/search?query=tin%20tin'
    },
    {
      'date': '12/23',
      'number': 'twenty third',
      'copy': "click the tree!",
      // Jealous golden
      'url': 'https://www.youtube.com/watch?v=cIsyOKU0vRQ'
    }, 
    {
      'date': '12/24',
      'number': 'twenty fourth',
      'copy': "click the tree!",
      // Christmas playlist
      'url': 'https://www.youtube.com/watch?v=fcg2UhhA5Jg'
    }
  ];

  // Initialize object to hold today-specific data
  let todaysData = {};
  // Grab today-specific data
  for (let entry of dailyData) {
    if (entry.date === formattedDate) {
      todaysData = entry;
    }
  }

  // Copy
  let headerCopy = `On the ${todaysData.number} day of Christmas, your true love sent to you...`

  let note = todaysData.note ? 
    <div id="overlay">
      <p>
        {todaysData.note}
      </p>
    </div> :
    '';

  // Render page content
  return (
    <div className="advent-app">
      <div className="snowfall">
        <Snowfall />
      </div>

      <h1 id="title">
        {headerCopy}
      </h1>

      <a 
        id="daily-content" 
        href={`${todaysData.url}`} 
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={`${tree}`} alt="A black and white fir tree."/>
      </a>
      <p>
        {todaysData.copy}
      </p>
        {note}

    </div>
  );
}

export default AdventApp;
