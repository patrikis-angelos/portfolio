import enigmaPic from '../images/enigma.png';
import weatherPic from '../images/weatherbot.png';
import mealPic from '../images/Dailymeal.png';
import spidersPic from '../images/spiders.png';

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
  ],
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
  ],
};

const tictactoeProject = {
  imgUrl: '',
  contentTitle: 'Tic Tac Toe bot',
  tagsInfo: ['MINIMAX', '2021'],
  desc: `A tic tac toe game featuring an unbeatable bot made using a simple MINIMAX algorithm. 
  Try it and play by clicking on the board`,
  techTagsInfo: ['JavaScript'],
  linksInfo: [
    {
      url: 'https://github.com/patrick-angelos/tic-tac-toe',
      text: 'Github',
    },
  ],
};

const dailyMealProject = {
  imgUrl: mealPic,
  contentTitle: 'DailyMeal',
  tagsInfo: ['Frontend', '2021'],
  desc: `A catalog of foods and drinks where the user can search for his favorite meals and apply filters on his search.
  Every meal has a details page that the user can access by clicking on the title and see the ingredients of the meal and a link to the recipe.`,
  techTagsInfo: ['React', 'Redux'],
  linksInfo: [
    {
      url: 'https://daily-meal-patrick.herokuapp.com',
      text: 'See project',
    },
    {
      url: 'https://github.com/patrick-angelos/catalog',
      text: 'Github',
    },
  ],
};

const spidersProject = {
  imgUrl: spidersPic,
  contentTitle: 'Spiders',
  tagsInfo: ['Game', '2021'],
  desc: `Spiders is a turn-based, RPG where the goal 
  of the game is to collect as many coins as you can on a farm full of spiders. 
  Each time you collect a coin a new spider spawns on the farm. 
  You can submit your name before the game begins and compete for a high score.`,
  techTagsInfo: ['JavaScript', 'Phaser'],
  linksInfo: [
    {
      url: 'https://quizzical-aryabhata-55d239.netlify.app/',
      text: 'See project',
    },
    {
      url: 'https://github.com/patrick-angelos/TurnBasedRPG',
      text: 'Github',
    },
  ],
};

export {
  enigma, weatherBot, tictactoeProject, dailyMealProject, spidersProject,
};