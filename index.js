// import { feed } from "./external";

let pets = "Tom & Jerry";
feed(pets);
console.log(pets[0]);

function feed(arg) {
  console.log(arg);
  pets = "Mickey Mouse";
}
