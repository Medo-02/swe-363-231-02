//JS 4 Exercise 1
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

const gamesData = 
[
    {
      title: "Resident Evil 7",
      date: "January 24, 2017",
      developer: "Capcom",
      devUrl: "./Pictures/capcom.png",
      gameUrl: "./Pictures/resident.jpeg",
      description: "In Resident Evil 7, Ethan Winters receives a mysterious message from his wife Mia...",
    },
    {
      title: "Bioshock Infinite",
      date: "March 26, 2013",
      developer: "Irrational Games",
      devUrl: "./Pictures/irrational.jpeg",
      gameUrl: "./Pictures/bioshock.jpeg",
      description: "In 1912, Booker DeWitt is taken by the mysterious Lutece Twins to an island lighthouse...",
    },
    {
      title: "The Witcher 3",
      date: "May 18, 2015",
      developer: "CD Projekt Red",
      devUrl: "./Pictures/CD_Projekt_logo.svg.png",
      gameUrl: "./Pictures/witcher 3.png",
      description: "The game takes place in a fictional fantasy world based on Slavic mythology...",
    },
    {
      title: "Fallout 4",
      date: "November 10, 2015",
      developer: "Bethesda",
      devUrl: "./Pictures/bethesda.jpeg",
      gameUrl: "./Pictures/fallout 4.jpeg",
      description: "Fallout 4 is an open-world role-playing game developed by Bethesda Game Studios...",
    },
  ];

  function blogElement(gameData){
    const container = document.createElement("div");
    container.className = "blog-game";
    const title = document.createElement("h1");
    title.textContent = gamesData.title

    const date = document.createElement("p");
    date.className = "date"
    date.textContent = gameData.date

    const developerContainer = document.createElement("div");
    developerContainer.className = "developer";
    
    const devImage = document.createElement("img")
    devImage.className = "dev-img";
    devImage.src = gameData.gameUrl;

    const devDetail = document.createElement("div");
    devDetail.className = "dev-detail";

    const devName = document.createElement("p");
    devName.className = "dev-name";
    devName.textContent = gameData.developer;

    const gameImage = document.createElement("img")
    gameImage.className = "game-img";
    gameImage.src = gameData.gameUrl;
    
    const gameDescription = document.createElement("p");
    gameDescription.className = "game-desc";
    gameDescription.textContent = gameData.description;

    const waterMarking = document.createElement("div");
    waterMarking.className = "watermarking";

    const watermark = document.createElement("div");
    watermark.className = "watermark";
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

  function addBlogGamesToWebsite() {
    const container = document.querySelector(".container-game");
  
    for (const gameData of gamesData) {
      const blogGameElement = blogElement(gameData);
      container.appendChild(blogGameElement);
    }
  }
  
  addBlogGamesToWebsite();