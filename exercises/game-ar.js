// JS 2 Exercise 1

const gamesData = 
[
    {
      title: "Resident Evil 7",
      date: "January 24, 2017",
      developer: "Capcom",
      devUrl: "./Pictures/capcom.png",
      gameUrl: "./Pictures/resident.jpeg",
      description: "ي Resident Evil 7، يتلقى إيثان وينترز رسالة غامضة من زوجته ميا المفقودة منذ سنوات. يقوده هذا إلى مزرعة منعزلة في ريف لويزيانا، حيث يجد زوجته، ليكتشف أنها عنيفة وتتمتع بقدرات تجديدية غريبة.",
    },
    {
      title: "Bioshock Infinite",
      date: "March 26, 2013",
      developer: "Irrational Games",
      devUrl: "./Pictures/irrational.jpeg",
      gameUrl: "./Pictures/bioshock.jpeg",
      description: "في عام 1912، تم اصطحاب بوكر ديويت بواسطة التوأم الغامضة لوتيس إلى منارة جزيرة قبالة ساحل ولاية ماين. بتعليمات من عائلة Luteces إحضار الفتاة لنا ومسح الدين، يدخل DeWitt المبنى الذي يضم صومعة الصواريخ التي تنقله إلى مدينة الطيران كولومبيا.",
    },
    {
      title: "The Witcher 3",
      date: "May 18, 2015",
      developer: "CD Projekt Red",
      devUrl: "./Pictures/CD_Projekt_logo.svg.png",
      gameUrl: "./Pictures/witcher 3.png",
      description: "تجري اللعبة في عالم خيالي خيالي يعتمد على الأساطير السلافية. يتحكم اللاعبون في Geralt of Rivia، وهو قاتل وحوش مأجور يُعرف باسم Witcher، ويبحثون عن ابنته بالتبني، التي تهرب من Wild Hunt الآخر. يحارب اللاعبون مخاطر اللعبة العديدة بالأسلحة والسحر، ويتفاعلون مع شخصيات غير لاعبين، ويكملون المهام للحصول على نقاط الخبرة والذهب، والتي تُستخدم لزيادة قدرات Geralt وشراء المعدات. تحتوي قصة اللعبة على ثلاث نهايات محتملة، تحددها اختيارات اللاعب في النقاط الرئيسية في السرد.",
    },
    {
      title: "Fallout 4",
      date: "November 10, 2015",
      developer: "Bethesda",
      devUrl: "./Pictures/bethesda.jpeg",
      gameUrl: "./Pictures/fallout 4.jpeg",
      description: "Fallout 4 هي لعبة تقمص أدوار في عالم مفتوح تم تطويرها بواسطة Bethesda Game Studios. في هذه اللعبة، يبدأ اللاعب كوالد وزوج في عام 2077، ولكن بعد ذلك يجب عليه دخول Vault 111 للنجاة من نهاية العالم النووية. يصبح اللاعب آخر الناجين المتبقين من Vault 111 عندما يخرج إلى الأرض القاحلة النووية في عام 2287، وسط أنقاض مدينة بوسطن.",
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