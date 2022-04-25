/*
  Module Responsibility:
    Contain the data for the application and expose
    it via getter functions.
*/

const database = {
  animals: [
    {
      id: 1,
      name: "Phil",
      species: "Snake",
      food: "Popcorn",
      exhibitId: 1
    },
    {
      id: 2,
      name: "Josephine",
      species: "African Elephant",
      food: "Funnel Cakes",
      exhibitId: 3
    },
    {
      id: 3,
      name: "Larry",
      species: "Lion",
      food: "Candy Corn",
      exhibitId: 2
    },
    {
      id: 4,
      name: "Annie",
      species: "Alligator",
      food: "Apples",
      exhibitId: 4
    },
    {
      id: 5,
      name: "Garrett",
      species: "Alligator",
      food: "Clam Chowder",
      exhibitId: 4
    },
    {
      id: 6,
      name: "Christina",
      species: "Hedgehog",
      food: "French fries",
      exhibitId: 1
    },
    {
      id: 7,
      name: "Bob",
      species: "Lynx",
      food: "Hot dogs",
      exhibitId: 2
    },
    {
      id: 8,
      name: "Eddie",
      species: "Giraffe",
      food: "Cats",
      exhibitId: 3
    },
    {
      id: 9,
      name: "Raul",
      species: "Panda",
      food: "Lima Beans and Bamboo",
      exhibitId: 5
    },
    {
      id: 10,
      name: "Vojtek",
      species: "Polish war bear",
      food: "lit cigarettes and beer",
      exhibitId: 5
    }
  ],
  exhibits: [
    {
      id: 1,
      name: "Reptile Excursion",
      indoor: true
    },
    {
      id: 2,
      name: "Big Cats of the World",
      indoor: false
    },
    {
      id: 3,
      name: "Just Elephants",
      indoor: false
    },
    {
      id: 4,
      name: "Alligator Adventure",
      indoor: false
    },
    {
      id: 5,
      name: "The Bear Cave",
      indoor: true
    }
  ],
  concessions: [
    {
      id: 1,
      name: "Just Dippin' Dots",
      food: "Dippin Dots"
    },
    {
      id: 2,
      name: "A Little Bit Chowder Now",
      food: "Clam Chowder"
    },
    {
      id: 3,
      name: "The Beer Tap",
      food: "Beer and lit cigarettes"
    }
  ]
}

export const getConcessions = () => {
  const copyOfConcessions = database.concessions.map(concession => ({...concession}))
  return copyOfConcessions
}

export const getExhibits = () => {
  const copyOfExhibits = database.exhibits.map(exhibit => ({...exhibit}))
  return copyOfExhibits
}


export const getAnimals = () => {
  const copyOfAnimals = database.animals.map(animal => ({...animal}))
  return copyOfAnimals
}

