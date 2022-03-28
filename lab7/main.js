/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.png";
  this.image_alt = "cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.png"
  this.image_alt = "dog";
}

function Bear(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bear.png";
  this.image_alt = "bear";
}

/*** Global Variables ***/
let animals = [new Cat(), new Dog(), new Bear()];
let names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bear with a random name and random age
function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat)
  {
    return new Cat(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Dog)
  {
    return new Dog(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Bear)
  {
    return new Bear(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  return getRandomIndex(5);
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}
