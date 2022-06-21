const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
  "One commit to rule them all...",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return message;
};

module.exports = {
  funnyCommit,
};
