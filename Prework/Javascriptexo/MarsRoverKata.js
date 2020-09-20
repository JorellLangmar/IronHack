  // Rover object goes here:
  const roverdirection = {
    direction : 'N'
  }
  // ======================
  function turnLeft(rover) {
    let result;
    switch (rover) {
      case 'N':
        result = 'W';
        break ;
      case 'W':
        result = 'S';
        break ;
      case 'S':
        result = 'E';
        break ;
      case 'E':
        result = "N";
        break;
    }
    console.log('turnLeft was called!');
    roverdirection.direction = result;
    console.log(`The rover is now facing ${roverdirection.direction}`)
  }
  
  function turnRight(rover) {
    console.log('turnRight was called!');
    let result;
    switch (rover) {
      case 'N':
        result = 'E';
        break;
      case 'E':
        result = 'S';
        break;
      case 'S':
        result = 'W';
        break;
      case 'W':
        result = 'N';
        break;
    }
    roverdirection.direction = result;
    console.log(`The rover is now facing ${roverdirection.direction}`)
  }
  
  function moveForward(rover) {
    console.log('moveForward was called');
  }
  
  console.log(`The rover is starting facing ${roverdirection.direction}`)
  
  turnLeft(roverdirection)