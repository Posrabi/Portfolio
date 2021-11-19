export const projects = [
  {
    title: 'Image Resizing Tool',
    description: "An image resizing tool that allows any imgae to be resized without cropping the original image. Intended for complex images that have features spreaded evenly. To see this more clearly I advise you to go the Github link as both of these images have been resized to fit into this webpage. Nonetheless, you can still see that the bottom image has less open water.",
      image: ['/images/surfer.jpg', "/images/surfer-resized-200.jpg"],
      tags: ["Pillow", "Python", "Dynamic Programming"],
    source: 'https://github.com/Posrabi/imageResizing',
    id: 0,
  },
  {
    title: 'MySpot',
    description:"Recognizing that finding parking spots in a bustling city can be so much of a pain, we created an app that will find and rank the closest public parking spot based on your location",
    image: ['/images/myspot2.png'],
    tags: ['Python', 'Pandas', "Geopy", "Figma", "Parking Finder"],
    source: 'https://github.com/HikaruSadashi/MySpot',
    id: 1,
  },
  {
    title: 'Caro',
    description: "A game that I spend countless hours playing inclass with my Vietnamese friends when the lessons are getting unacceptably boring. A diffrent implementation of tic tac toe that presents a widely different challenge.",
      image: ['/images/caro1.png'],
      tags: ["Python", 'Pygame', "OOP","Board Game"],
    source: 'https://github.com/Posrabi/Caro',
    id: 2,
  },
  {
    title: 'Tetris',
    description: "The classic Tetris game that I have always wanted to code.",
    image: ['/images/tetris.png'],
    tags: ['Python', 'Tetris',"Pygame",'OOP'],
    source: 'https://github.com/Posrabi/Tetrix',
    id: 3,
  },
];
