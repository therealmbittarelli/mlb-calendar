const Lights = () => {
  const date = new Date();
  const month = date.getUTCMonth() + 1;

  let theme;

  switch(month) {
    case 1:
      theme = 'winter';
      break;
    case 2:
      theme = 'valentines';
      break;
    case 3:
      theme = 'st-patrick';
      break;
    case 4:
      theme = 'easter';
      break;
    case 5:
      theme = 'spring';
      break;
    case 6:
      theme = 'summer';
      break;
    case 7:
      theme = 'summer';
      break;
    case 8:
      theme = 'summer';
      break;
    case 9:
      theme = 'autumn';
      break;
    case 10:
      theme = 'halloween';
      break;
    case 11:
      theme = 'thanksgiving';
      break;
    case 12:
      theme = 'xmas';
      break;
    default:
      theme = 'xmas';
  }

  let generateLights = () => {
    let lights = [];
    for (let i = 0; i < 28; i++) {
      console.log('i')
      let dynamicClass;
      if (i > 7) {
        dynamicClass = 'desktop-only'
      }
      lights.push(<li key={`lights-${i}`} className={dynamicClass}></li>)
    }
    console.log(lights)
    return lights;
  }
  
  return (
    <ul id="lights" className={theme} >
      {generateLights()}
    </ul>
  );
}

export default Lights;