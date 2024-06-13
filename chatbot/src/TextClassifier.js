// src/TextClassifier.js
import natural from 'natural';
const classifier = new natural.BayesClassifier();

const setupClassifier = () => {
  classifier.addDocument('What is your name?', 'name');
  classifier.addDocument('How can I help you?', 'help');
  classifier.addDocument('What is React?', 'react');
  // Add more training data here

  classifier.train();
};

const classifyText = (text) => {
  return classifier.classify(text);
};

setupClassifier();

export { classifyText };
