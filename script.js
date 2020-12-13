const cardsData = [
    ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Landscape', 'Weather'],
    [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3'
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3'
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3'
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3'
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3'
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3'
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3'
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3'
      }
    ],
    [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3'
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3'
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3'
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3'
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3'
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3'
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3'
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3'
      }
    ],
    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3'
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3'
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3'
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3'
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3'
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3'
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3'
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3'
      }
    ],
    [
      {
        word: 'bird',
        translation: 'птица',
        image: 'img/bird.jpg',
        audioSrc: 'audio/bird.mp3'
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'img/fish1.jpg',
        audioSrc: 'audio/fish.mp3'
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3'
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3'
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3'
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'img/mouse.jpg',
        audioSrc: 'audio/mouse.mp3'
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'img/turtle.jpg',
        audioSrc: 'audio/turtle.mp3'
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3'
      }
    ],
    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3'
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3'
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3'
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3'
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3'
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3'
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3'
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3'
      }
    ],
    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3'
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3'
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3'
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3'
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3'
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3'
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3'
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3'
      }
    ],
    [
      {
        word: 'canyon',
        translation: 'каньон',
        image: 'img/landscape_canyon.jpg',
        audioSrc: 'audio/landscape_canyon.mp3'
      },
      {
        word: 'cave',
        translation: 'пещера',
        image: 'img/landscape_cave.jpg',
        audioSrc: 'audio/landscape_cave.mp3'
      },
      {
        word: 'dune',
        translation: 'дюна',
        image: 'img/landscape_dune.jpg',
        audioSrc: 'audio/landscape_dune.mp3'
      },
      {
        word: 'lake',
        translation: 'озеро',
        image: 'img/landscape_lake.jpg',
        audioSrc: 'audio/landscape_lake.mp3'
      },
      {
        word: 'meadow',
        translation: 'луг',
        image: 'img/landscape_meadow.jpg',
        audioSrc: 'audio/landscape_meadow.mp3'
      },
      {
        word: 'mountain',
        translation: 'гора',
        image: 'img/landscape_mountain.jpg',
        audioSrc: 'audio/landscape_mountain.mp3'
      },
      {
        word: 'river',
        translation: 'река',
        image: 'img/landscape_river.jpg',
        audioSrc: 'audio/landscape_river.mp3'
      },
      {
        word: 'waterfall',
        translation: 'водопад',
        image: 'img/landscape_waterfall.jpg',
        audioSrc: 'audio/landscape_waterfall.mp3'
      },
    ],
    [
      {
        word: 'blizzard',
        translation: 'метель',
        image: 'img/weather_blizzard.jpg',
        audioSrc: 'audio/weather_blizzard.mp3'
      },
      {
        word: 'clouds',
        translation: 'облака',
        image: 'img/weather_clouds.jpg',
        audioSrc: 'audio/weather_clouds.mp3'
      },
      {
        word: 'fog',
        translation: 'туман',
        image: 'img/weather_fog.jpg',
        audioSrc: 'audio/weather_fog.mp3'
      },
      {
        word: 'lightning',
        translation: 'молния',
        image: 'img/weather_lightning.jpg',
        audioSrc: 'audio/weather_lightning.mp3'
      },
      {
        word: 'rain',
        translation: 'дождь',
        image: 'img/weather_rain.jpg',
        audioSrc: 'audio/weather_rain.mp3'
      },
      {
        word: 'sun',
        translation: 'солнце',
        image: 'img/weather_sun.jpg',
        audioSrc: 'audio/weather_sun.mp3'
      },
      {
        word: 'tornado',
        translation: 'торнадо',
        image: 'img/weather_tornado.jpg',
        audioSrc: 'audio/weather_tornado.mp3'
      },
      {
        word: 'wind',
        translation: 'ветер',
        image: 'img/weather_wind.jpg',
        audioSrc: 'audio/weather_wind.mp3'
      },
    ]
  ]
// //   export default cards;
let status = {
  mode:'train',
  menuIsOn: false,
  currentTopic: undefined,
  currentWords: undefined,
  score: 0,
}
const cardsDivFace = document.getElementById(`cards-wrapper-face`);
const cardsDivBack = document.getElementById(`cards-wrapper-back`);
const clearDiv = function () {
  document.getElementById(`cards-wrapper-face`).innerHTML = '';
  document.getElementById(`cards-wrapper-back`).innerHTML = '';
}
const addBack = function () {
  back = document.createElement('div');
  back.id = `cards-wrapper-back`; 
  back.className = `cards-wrapper-clear`;
  back.innerHTML = '';
  document.getElementsByClassName('cards-wrapper')[0].append(back);
}

function setPlayMode() {
  document.querySelector("#start").style.zIndex = "1";
  status.mode = 'play';
  if (status.menuIsOn === false) {
    createCardsFromCategoryPlay(status.currentTopic)
  }
}
function setTrainMode() {
  document.querySelector("#start").style.zIndex = "-1";
  status.mode = 'train';
  if (status.menuIsOn === false) {
    createCardsFromCategory(status.currentTopic)
  }
}

function createCardBox(itemText, itemClass, visiable) {
  this.card = document.createElement('div');
  this.card.id = `${itemClass}`; //.replace(/[\s,.()]/g, '').toLowerCase()
  this.card.className = `card-box`;
  this.card.innerHTML = `${itemText}`;
  document.getElementById(`cards-wrapper-face`).append(this.card);
}
// let user = new createCardBox (cardsData[0],'cards-box')
// cardsDivFace.append(user.card);
const createCradsCategories = function () {
  document.getElementById('start').innerHTML = 'START';
  // document.querySelectorAll('.cards-wrapper-clear').forEach(el => el.innerHTML = '') ЗАПАСНОЙ
  document.getElementById(`cards-wrapper-face`).innerHTML = '';
  if (document.getElementById('cards-wrapper-back') !== null) {
    document.getElementById('cards-wrapper-back').remove();
  }
  status.menuIsOn = true;
  status.currentTopic = undefined;
  cardsData[0].forEach(category => createCardBox(category, category, true));
  Array.from(document.getElementsByClassName('card-box')).forEach((el) => {
    el.addEventListener('click', function(){
      if (status.mode === 'train') {
        createCardsFromCategory(`${el.id}`)
      } if (status.mode === 'play') {
        createCardsFromCategoryPlay(`${el.id}`)
      }
    })
  })
}
createCradsCategories()

const createCardsFromCategory = function (topicName) {
  document.getElementById('start').innerHTML = 'START';
  document.getElementById(`cards-wrapper-face`).innerHTML = '';
  if (document.getElementById('cards-wrapper-back') !== null) {
    document.getElementById(`cards-wrapper-back`).innerHTML = '';
  }
  status.menuIsOn = false;
  status.currentTopic = topicName;
  if (document.getElementById(`cards-wrapper-back`) === null) {addBack();}

  let i = cardsData[0].indexOf(`${topicName}`) + 1;
  cardsData[i].forEach((el) => {
    console.log(el)
      this.card = document.createElement('div');
      this.card.id = `asd`; 
      this.card.className = `card-box ${el['word']}`;
      this.card.style.zIndex = '1';
      this.card.innerHTML = `
      <img src="./asset/${el['image']}">
      <h1>${el['word']}</h1>
      `;
      this.card.addEventListener('click', function(){
        new Audio(`./asset/audio/${el['word']}.mp3`).play();
      })
      buttonReverse = document.createElement('button');
      buttonReverse.className = `button-card-reverse`;
      this.card.append(buttonReverse)
      document.getElementById(`cards-wrapper-face`).append(this.card);

      this.card = document.createElement('div');
      this.card.id = `asd`; 
      this.card.className = `card-boxs ${el['word']}`;
      this.card.style.zIndex = '0';
      this.card.innerHTML = `
      <img src="./asset/${el['image']}">
      <h1>${el['translation']}</h1>
      `;
      this.card.onmouseout = function(event) {
        document.getElementsByClassName(`${el['word']}`)[0].style.zIndex = '1';
        document.getElementsByClassName(`${el['word']}`)[1].style.zIndex = '0';
      }
      // this.card.addEventListener('click', function(){     Звук на нижнем фоне
      //   new Audio(`./asset/audio/${el['word']}.mp3`).play();
      // })

      // buttonReverse = document.createElement('button');   Button на нижнем слое
      // buttonReverse.className = `button-card-reverse`;
      // this.card.append(buttonReverse)
      document.getElementById(`cards-wrapper-back`).append(this.card);
    }
  )
  addCardsReverseListener();
}

const createCardsFromCategoryPlay = function (topicName) {
  document.getElementById(`cards-wrapper-face`).innerHTML = '';
  if (document.getElementById('cards-wrapper-back') !== null) {
    document.getElementById(`cards-wrapper-back`).innerHTML = '';
  }
  status.menuIsOn = false;
  status.currentTopic = topicName;
  createWrodsTrain(topicName);

  let i = cardsData[0].indexOf(`${topicName}`) + 1;
  cardsData[i].forEach((el) => {
    console.log(el)
      this.card = document.createElement('div');
      this.card.id = `${el['word']}`; 
      this.card.className = `card-box ${el['word']}`;
      this.card.style.zIndex = '1';
      this.card.innerHTML = `
      <img src="./asset/${el['image']}">
      `;
      document.getElementById(`cards-wrapper-face`).append(this.card);
    }
  )
  addCardsReverseListenerPlay();
}

addCardsReverseListener = function () {
  Array.from(document.getElementsByClassName('button-card-reverse')).forEach((el) => {
    el.addEventListener('click', function(){      
    this.parentElement.style.zIndex = "-1";
    console.log(this.parentElement)
    })
  })
}

addCardsReverseListenerPlay = function () {
  Array.from(document.getElementsByClassName('button-card-reverse')).forEach((el) => {
    el.addEventListener('click', function(){      
    this.parentElement.style.zIndex = "-1";
    console.log(this.parentElement)
    })
  })
}



createWrodsTrain = function (topic) {
  status.currentWords = Array.from(cardsData[cardsData[0].indexOf(topic) + 1]).sort(() => Math.random() - 0.5) ;
};

startGame = function () {
  if (status.mode = 'train') {
    document.getElementById('start').innerHTML = 'START';
  }
  document.getElementById('start').innerHTML = 'REPEAT';
  words = status.currentWords[0];
  playWord(words['word'])
  console.log(words['word'])

  Array.from(document.getElementsByClassName('card-box')).forEach((el) => {
    el.addEventListener('click', function(){ 
    if (this.id === status.currentWords[0]['word']) {
      status.currentWords.shift();
      status.score = status.score + 1;
      rating(1);
      new Audio(`./asset/audio/correct.mp3`).play();
      console.log('YES, left', status.currentWords.length);
      if (status.currentWords.length === 0) {
        checkWin();
      }
    } else {
      status.score = status.score - 1;
      rating(-1)
      new Audio(`./asset/audio/error.mp3`).play();
    }
    })
  })
};
playWord = function (sound) {
    new Audio(`./asset/audio/${sound}.mp3`).play();
}
checkWin = function () {
  new Audio(`./asset/audio/success.mp3`).play();
}
rating = function (change) {
  el = document.getElementById('rating');
  console.log(el.childern)
  if (change === 1) {
    star = document.createElement('img');
    star.src = "./asset/img/star-win.svg";
    el.append(star);
  } else {

  }
}



























// cards-wrapper-face
// cards[1].forEach(element => {
//     console.log(element)
//     let newCard = document.createElement('div');
//     newCard.className = 'col-sm-4 card-box-front';
//     newCard.innerHTML = `${element.word}`;
//     document.getElementById('cards-wrapper').append(newCard);
// });
// cards[1].forEach(element => {
//   console.log(element)
//   let newCard = document.createElement('div');
//   newCard.className = 'col-sm-4 card-box-back';
//   newCard.innerHTML = `${element.word}`;
//   document.getElementById('cards-wrapper-2').append(newCard);
// });

// var card = document.querySelector('.card-box');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });
