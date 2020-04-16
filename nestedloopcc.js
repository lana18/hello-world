// Write your code below


let bobsFollowers = ['bob', 'dylan', 'john', 'max']
let tinasFollowers = ['jane', 'john', 'max']


let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log('Both loops have the number: ' + tinasFollowers[j])
      mutualFollowers.push (tinasFollowers[j])
    }
  }
};
