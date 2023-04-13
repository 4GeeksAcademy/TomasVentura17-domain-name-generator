let pronoun = ["the", "our", "what"];
let adj = ["great", "big", "giant"];
let noun = ["jogger", "racoon", "dog"];

console.log("Hello World");
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}
