import enigmaPic from '../images/enigma.png';
import weatherPic from '../images/weatherbot.png';
import storePic from '../images/store.png';

const enigma = {
  imgUrl: enigmaPic,
  contentTitle: 'Enigma?',
  tagsInfo: ['Desktop app', 'Full Stack', '2021'],
  desc: `EniGma? is a Desktop app where users can create and 
  view different scientific articles. Singed-in users can up-vote articles. 
  The one with the most votes will be on the home page.`,
  techTagsInfo: ['RoR', 'HTML', 'SCSS'],
  linksInfo: [
    {
      url: 'https://enigma-articles.herokuapp.com/',
      text: 'See project',
    },
    {
      url: 'https://github.com/patrick-angelos/Enigma',
      text: 'Github',
    },
  ]
};

const weatherBot = {
  imgUrl: weatherPic,
  contentTitle: 'Weather Bot',
  tagsInfo: ['Slack Bot', '2021'],
  desc: `A weather bot that pulls from the OpenWeatherMap API to allow users 
  to view the forecast in cities worldwide using simple commands on Slack.`,
  techTagsInfo: ['Slack API', 'Ruby'],
  linksInfo: [
    {
      url: 'https://github.com/patrick-angelos/SlackBot',
      text: 'Github',
    },
  ]
};

const store = {
  imgUrl: storePic,
  contentTitle: 'Zattix',
  tagsInfo: ['HTML page', 'Frontend', '2020'],
  desc: `An e-shop example page. It consists of a home page and a results page(static). 
  You can see the products in a carousel on the home page.`,
  techTagsInfo: ['HTML', 'SCSS'],
  linksInfo: [
    {
      url: 'https://patrick-angelos.github.io/onlineShop/',
      text: 'See project',
    },
    {
      url: 'https://github.com/patrick-angelos/onlineShop',
      text: 'Github',
    },
  ]
};

const tictactoeProject = {
  imgUrl: '',
  contentTitle: 'Tic Tac Toe bot',
  tagsInfo: ['MINIMAX', '2021'],
  desc: `An unbeattable bot for the Tic Tac Toe game using a simple MINIMAX algorithm. 
  Try it and play by clicking on the board`,
  techTagsInfo: ['JavaScript'],
  linksInfo: [
    {
      url: 'https://github.com/patrick-angelos/tic-tac-toe',
      text: 'Github',
    },
  ]
};

export { enigma, weatherBot, store, tictactoeProject };