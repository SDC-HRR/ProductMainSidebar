/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
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
// const headings = 'proxyid|game_object\n';

function saveInfo() {
  // fs.appendFileSync('./database/data2.csv', headings);
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

    const game = [{
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      mainbody: {
        description: faker.lorem.paragraphs(),
        images: [faker.image.image(), faker.image.image()],
        maturecontent: {
          description: [...new Set(xMContent)],
        },
        sysrequirement: {
          os: [...new Set(xOs)],
          processor: proc[Math.floor(Math.random() * proc.length)],
          memory: mem[Math.floor(Math.random() * mem.length)],
          graphics: gphx[Math.floor(Math.random() * gphx.length)],
        },
      },
      sidebar: {
        description: {
          player: [faker.lorem.word(), faker.image.image()],
          achievements: [faker.lorem.word(), faker.image.image()],
          captions: [faker.lorem.word(), faker.image.image()],
          workshop: [faker.lorem.word(), faker.image.image()],
          editor: [faker.lorem.word(), faker.image.image()],
        },
        vrsupport: {
          headset: [
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
          ],
          input: [faker.lorem.word(), faker.image.image()],
          playarea: [
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
          ],
        },
        languages: xLanguages,
        achievements: [...new Set(xAchieves)],
        metacritic: Math.floor(Math.random() * 101),
        minidescription: {
          genre: [...new Set(xGenres)],
          developer: faker.company.companyName(),
          publisher: faker.company.companyName(),
          franchise: faker.company.companyName(),
          releasedate: faker.date.past(),
        },
      },
      relatedContent: [
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
      ],
    }];

    const data = JSON.stringify(game) + '\n';

    try {
      fs.appendFileSync('./database/datajson.csv', data);
      console.log(`Row ${i} was appended to file!`);
    } catch (err) {
      console.log(err);
    }
  }
}

saveInfo();
console.log('Done!');
