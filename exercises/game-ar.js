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
    "ي Resident Evil 7، يتلقى إيثان وينترز رسالة غامضة من زوجته ميا المفقودة منذ سنوات. يقوده هذا إلى مزرعة منعزلة في ريف لويزيانا، حيث يجد زوجته، ليكتشف أنها عنيفة وتتمتع بقدرات تجديدية غريبة."
  ),
  new Game(
    "Bioshock Infinite",
    "March 26, 2013",
    "Irrational Games",
    "./Pictures/irrational.jpeg",
    "./Pictures/bioshock.jpeg",
    "في عام 1912، تم اصطحاب بوكر ديويت بواسطة التوأم الغامضة لوتيس إلى منارة جزيرة قبالة ساحل ولاية ماين. بتعليمات من عائلة Luteces إحضار الفتاة لنا ومسح الدين، يدخل DeWitt المبنى الذي يضم صومعة الصواريخ التي تنقله إلى مدينة الطيران كولومبيا."
  ),
  new Game(
    "The Witcher 3",
    "May 18, 2015",
    "CD Projekt Red",
    "./Pictures/CD_Projekt_logo.svg.png",
    "./Pictures/witcher 3.png",
    "تجري اللعبة في عالم خيالي خيالي يعتمد على الأساطير السلافية. يتحكم اللاعبون في Geralt of Rivia، وهو قاتل وحوش مأجور يُعرف باسم Witcher، ويبحثون عن ابنته بالتبني، التي تهرب من Wild Hunt الآخر. يحارب اللاعبون مخاطر اللعبة العديدة بالأسلحة والسحر، ويتفاعلون مع شخصيات غير لاعبين، ويكملون المهام للحصول على نقاط الخبرة والذهب، والتي تُستخدم لزيادة قدرات Geralt وشراء المعدات. تحتوي قصة اللعبة على ثلاث نهايات محتملة، تحددها اختيارات اللاعب في النقاط الرئيسية في السرد."
  ),
  new Game(
    "Fallout 4",
    "November 10, 2015",
    "Bethesda",
    "./Pictures/bethesda.jpeg",
    "./Pictures/fallout 4.jpeg",
    "Fallout 4 هي لعبة تقمص أدوار في عالم مفتوح تم تطويرها بواسطة Bethesda Game Studios. في هذه اللعبة، يبدأ اللاعب كوالد وزوج في عام 2077، ولكن بعد ذلك يجب عليه دخول Vault 111 للنجاة من نهاية العالم النووية. يصبح اللاعب آخر الناجين المتبقين من Vault 111 عندما يخرج إلى الأرض القاحلة النووية في عام 2287، وسط أنقاض مدينة بوسطن."
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