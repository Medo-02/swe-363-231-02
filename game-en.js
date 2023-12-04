//JS 4 Exercise 1 part 1
class Game {
  constructor(title, date, developer, devUrl, gameUrl, description){
    this.title = title;
    this.date = date;
    this.developer = developer;
    this.devUrl = devUrl;
    this.gameUrl = gameUrl;
    this.description = description;
  }
}
//JS 4 Exercise 1 part 2
const gameData = [
  new Game(
    "Resident Evil 7",
    "January 24, 2017",
    "Capcom",
    "./Pictures/capcom.png",
    "./Pictures/resident.jpeg",
    "In Resident Evil 7, Ethan Winters receives a mysterious message from his wife Mia..."
  ),
  new Game(
    "Bioshock Infinite",
    "March 26, 2013",
    "Irrational Games",
    "./Pictures/irrational.jpeg",
    "./Pictures/bioshock.jpeg",
    "In 1912, Booker DeWitt is taken by the mysterious Lutece Twins to an island lighthouse..."
  ),
  new Game(
    "The Witcher 3",
    "May 18, 2015",
    "CD Projekt Red",
    "./Pictures/CD_Projekt_logo.svg.png",
    "./Pictures/witcher 3.png",
    "The game takes place in a fictional fantasy world based on Slavic mythology..."
  ),
  new Game(
    "Fallout 4",
    "November 10, 2015",
    "Bethesda",
    "./Pictures/bethesda.jpeg",
    "./Pictures/fallout 4.jpeg",
    "Fallout 4 is an open-world role-playing game developed by Bethesda Game Studios..."
  )
]
//JS 4 Exercise 1 end

// JS 2 Exercise 1


  //JS 4 Exercise 2 part 1,2 nested function
  const gameElement = (gameData) => {
    //function to simplify the creation of elements and assigning classes
    const createBlogElement = (tagType, className) => {
      const element = document.createElement(tagType);
      if (className) element.className = className;
      return element;
    };
    

    const container = createBlogElement("div", "blog-game");
  
    const title = createBlogElement("h1");
    title.textContent = gameData.title;
  
    const date = createBlogElement("p", "date");
    date.textContent = gameData.date;
  
    const developerContainer = createBlogElement("div", "developer");
  
    const devImage = createBlogElement("img", "dev-img");
    devImage.src = gameData.devUrl;
  
    const devDetail = createBlogElement("div", "dev-detail");
  
    const devName = createBlogElement("p", "dev-name");
    devName.textContent = gameData.developer;
  
    const gameImage = createBlogElement("img", "game-img");
    gameImage.src = gameData.gameUrl;
  
    const gameDescription = createBlogElement("p", "game-desc");
    gameDescription.textContent = gameData.description;
  
    const waterMarking = createBlogElement("div", "watermarking");
  
    const watermark = createBlogElement("div", "watermark");
    watermark.textContent = "MZ";
  
    devDetail.appendChild(devName);
    devDetail.appendChild(date);
    developerContainer.appendChild(devImage);
    developerContainer.appendChild(devDetail);
    waterMarking.appendChild(gameImage);
    waterMarking.appendChild(watermark);
    container.appendChild(title);
    container.appendChild(developerContainer);
    container.appendChild(waterMarking);
    container.appendChild(gameDescription);
  
    return container;
  }
  //JS 4 Exercise 2 nested function end

  //JS 4 Exercise 2 part 1,3 creating arrow syntax and IIFE function
  const addBlogGamesToWebsite = () => {
    const container = document.querySelector(".container-game");
    //JS 4 Exercise 3 use map to generate from each game of the game data a blog game element
    gameData.map((game) => {
      const blogGameElement = gameElement(game);
      container.appendChild(blogGameElement);
    });
  }
  
  addBlogGamesToWebsite();
  //JS 4 Exercise 2 end