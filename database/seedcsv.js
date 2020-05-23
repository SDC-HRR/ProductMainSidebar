/* eslint-disable no-useless-escape */
/* eslint-disable no-multi-str */
const faker = require('faker');
const fs = require('fs');

const mContent = [
  'Alcohol Reference',
  'Blood',
  'Cartoon Violence',
  'Crude Humor',
  'Fantasy Violence',
  'Language',
  'Mature Humor',
  'Partial Nudity',
  'Sexual Content',
  'Sexual Violence',
  'Strong Language',
  'Strong Sexual Content',
  'Tobacco Reference',
  'Use of Drugs',
  'Violence',
  'Animated Blood',
  'Blood and Gore',
  'Comic Mischief',
  'Drug Reference',
  'Intense Violence',
  'Lyrics',
  'Nudity',
  'Real Gambling',
  'Sexual Themes',
  'Simulated Gambling',
  'Strong Lyrics',
  'Suggestive Themes',
  'Use of Alcohol',
  'Use of Tobacco',
  'Violent References',
];
const languages = [
  'English',
  'French',
  'German',
  'SpanishSpain',
  'Japanese',
  'Korean',
  'Russian',
  'SimplifiedChinese',
  'SpanishLatinAmerica',
  'TraditionalChinese',
];
const gameOS = ['Windows 10', 'Mac OSX', 'Linux'];
const proc = ['Core i5-7500', 'Core i5-7600', 'Core i5-7700', 'Core i5-7800'];
const mem = ['2GB RAM', '4GB RAM', '8GB RAM', '12GB RAM', '16GB RAM'];
const gphx = [
  'GTX 1060 / RX 580 - 6GB VRAM',
  'GTX 1050 / RX 570 - 4GB VRAM',
  'GTX 1040 / RX 560 - 2GB VRAM',
];
const genres = [
  'Action',
  'Action-adventure',
  'Role-playing',
  'Simulation',
  'Strategy',
  'Puzzle',
  'Idea',
];
const reviewRatings = [
  'Overwhelmingly Positive',
  'Very Positive',
  'Positive',
  'Mostly Positive',
  'Mixed',
  'Mostly Negative',
  'Negative',
  'Very Negative',
  'Overwhelmingly Negative',
];
const achieves = [];
for (let j = 0; j < 25; j += 1) {
  achieves.push(faker.image.image());
}
const allTags = [
  'Masterpiece',
  'Action',
  'VR',
  'Adventure',
  'Female Protagonist',
  'Story Rich',
  'Atmospheric',
  'Singleplayer',
  'FPS',
  'Horror',
  'Sci-fi',
  'First-Person',
  'Shooter',
  'Aliens',
  'Beautiful',
  'Zombies',
  'Futuristic',
  'Great Soundtrack',
  'Psychological Horror',
  'Memes',
];
const xTags = [];
for (let p = 0; p < Math.floor(Math.random() * 10); p += 1) {
  xTags.push(allTags[Math.floor(Math.random() * allTags.length)]);
}
const headings = 'proxyId,name,url,mainbody.description,mainbody.images, \
mainbody.maturecontent.description,mainbody.sysrequirement.os, \
mainbody.sysrequirement.processor,mainbody.sysrequirement.memory, \
mainbody.sysrequirement.graphics,sidebar.description.player, \
sidebar.description.achievements,sidebar.description.captions, \
sidebar.description.workshop,sidebar.description.editor, \
sidebar.vrsupport.headset,sidebar.vrsupport.input, \
sidebar.vrsupport.playarea,sidebar.languages,sidebar.achievements, \
sidebar.metacritic,sidebar.minidescription.genre,sidebar.minidescription.developer \
sidebar.minidescription.publisher,sidebar.minidescription.franchise \
sidebar.minidescription.releasedate,relatedContent1.name,relatedContent1.thumbnail, \
relatedContent1.price,relatedContent1.hoverinfo.releasedate,relatedContent1.hoverinfo.gif, \
relatedContent1.hoverinfo.reviews,relatedContent1.hoverinfo.totalReviews,relatedContent1.hoverinfo.tag, \
relatedContent2.name,relatedContent2.thumbnail, \
relatedContent2.price,relatedContent2.hoverinfo.releasedate,relatedContent2.hoverinfo.gif, \
relatedContent2.hoverinfo.reviews,relatedContent2.hoverinfo.totalReviews,relatedContent2.hoverinfo.tag, \
relatedContent3.name,relatedContent3.thumbnail, \
relatedContent3.price,relatedContent3.hoverinfo.releasedate,relatedContent3.hoverinfo.gif, \
relatedContent3.hoverinfo.reviews,relatedContent3.hoverinfo.totalReviews,relatedContent3.hoverinfo.tag, \
relatedContent4.name,relatedContent4.thumbnail, \
relatedContent4.price,relatedContent4.hoverinfo.releasedate,relatedContent4.hoverinfo.gif, \
relatedContent4.hoverinfo.reviews,relatedContent4.hoverinfo.totalReviews,relatedContent4.hoverinfo.tag, \
relatedContent5.name,relatedContent5.thumbnail, \
relatedContent5.price,relatedContent5.hoverinfo.releasedate,relatedContent5.hoverinfo.gif, \
relatedContent5.hoverinfo.reviews,relatedContent5.hoverinfo.totalReviews,relatedContent5.hoverinfo.tag\n';

function saveInfo() {
  fs.appendFileSync('data.csv', headings);
  for (let i = 1; i < 10000001; i += 1) {
    // setting random generation
    const xLanguages = {};
    for (let k = 0; k < languages.length; k += 1) {
      xLanguages[languages[k]] = [
        !Math.round(Math.random()),
        !Math.round(Math.random()),
        !Math.round(Math.random()),
      ];
    }

    const xMContent = [];
    for (let l = 0; l < Math.floor(Math.random() * 10); l += 1) {
      xMContent.push(mContent[Math.floor(Math.random() * mContent.length)]);
    }

    const xGenres = [];
    for (let m = 0; m < Math.floor(Math.random() * 3 + 1); m += 1) {
      xGenres.push(genres[Math.floor(Math.random() * genres.length)]);
    }

    const xAchieves = [];
    for (let n = 0; n < Math.floor(Math.random() * 10 + 5); n += 1) {
      xAchieves.push(achieves[Math.floor(Math.random() * achieves.length)]);
    }

    const xOs = [];
    for (let o = 0; o < Math.floor(Math.random() * 10); o += 1) {
      xOs.push(gameOS[Math.floor(Math.random() * gameOS.length)]);
    }

    const data = `${i},${faker.commerce.productName()},${
      faker.internet.url()},\"${faker.lorem.paragraphs()}\",\"${
      JSON.stringify([faker.image.image(), faker.image.image()])}\",\'${
      JSON.stringify([...new Set(xMContent)])}\',\'${
      JSON.stringify([...new Set(xOs)])}\',${proc[Math.floor(Math.random() * proc.length)]},${
      mem[Math.floor(Math.random() * mem.length)]},${
      gphx[Math.floor(Math.random() * gphx.length)]},\'${
      JSON.stringify([faker.lorem.word(), faker.image.image()])}\',\'${JSON.stringify([faker.lorem.word(), faker.image.image()])}\',\'${
      JSON.stringify([faker.lorem.word(), faker.image.image()])}\',\'${JSON.stringify([faker.lorem.word(), faker.image.image()])}\',\'${
      JSON.stringify([faker.lorem.word(), faker.image.image()])}\',\'${JSON.stringify([
      faker.lorem.word(),
      faker.image.image(),
      faker.lorem.word(),
      faker.image.image(),
      faker.lorem.word(),
      faker.image.image(),
      faker.lorem.word(),
      faker.image.image(),
    ])}\',\'${JSON.stringify([faker.lorem.word(), faker.image.image()])}\',\'${JSON.stringify([
      faker.lorem.word(),
      faker.image.image(),
      faker.lorem.word(),
      faker.image.image(),
      faker.lorem.word(),
      faker.image.image(),
    ])}\',${xLanguages},\'${JSON.stringify([...new Set(xAchieves)])}',${Math.floor(Math.random() * 101)}\',\'${
      JSON.stringify([...new Set(xGenres)])}\',${faker.company.companyName()},${faker.company.companyName()},${
      faker.company.companyName()},${faker.date.past()},${
      faker.commerce.productName()},${faker.image.image()},${faker.commerce.price()},${
      faker.date.past()},${faker.image.image()},${reviewRatings[Math.floor(Math.random() * reviewRatings.length)]},${
      Math.floor(Math.random() * 1001)},\'${JSON.stringify([...new Set(xTags)])}\',${
      faker.commerce.productName()},${faker.image.image()},${faker.commerce.price()},${
      faker.date.past()},${faker.image.image()},${reviewRatings[Math.floor(Math.random() * reviewRatings.length)]},${
      Math.floor(Math.random() * 1001)},\'${JSON.stringify([...new Set(xTags)])}\',${
      faker.commerce.productName()},${faker.image.image()},${faker.commerce.price()},${
      faker.date.past()},${faker.image.image()},${reviewRatings[Math.floor(Math.random() * reviewRatings.length)]},${
      Math.floor(Math.random() * 1001)},\'${JSON.stringify([...new Set(xTags)])}\',${
      faker.commerce.productName()},${faker.image.image()},${faker.commerce.price()},${
      faker.date.past()},${faker.image.image()},${reviewRatings[Math.floor(Math.random() * reviewRatings.length)]},${
      Math.floor(Math.random() * 1001)},\'${JSON.stringify([...new Set(xTags)])}\',${
      faker.commerce.productName()},${faker.image.image()},${faker.commerce.price()},${
      faker.date.past()},${faker.image.image()},${reviewRatings[Math.floor(Math.random() * reviewRatings.length)]},${
      Math.floor(Math.random() * 1001)},\'${JSON.stringify([...new Set(xTags)])}\'\n`;
    try {
      fs.appendFileSync('data.csv', data);
      console.log(`Row ${i} was appended to file!`);
    } catch (err) {
      console.log(err);
    }
  }
}


saveInfo();
