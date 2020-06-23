# Project: Visualize Sorting Algorithms

This will be your first solo project! For this project, you will be implementing a sorting algorithm, creating a front-end visualization of the sorting algorithm, and presenting it to your class.

This solo project is divided into three parts:

1.  The sorting algorithm
2.  The visualization
3.  The presentation

## Objectives

- Use standard web APIs (from `document`) to manipulate the DOM
  - Using third party packages is of course okay, too
- Write basic unit tests for the sorting algorithm
- Deliver a polished, interactive presentation (to your classmates) explaining how your sorting algorithm works, its implementation, and your visualization
- Find your way through a repository that contains technologies you are not familiar with.
- Making it work

## Environment

### Getting Started

This repository is your very own! Before you get going, take a look through the files, starting with `package.json` and `app.js` and following the trail of files!

### Global Requirements

- node
- npm
- yarn

### Installing Dependencies and Set Up

To install dependencies:

```bash
$ yarn
```

To run tests:

```bash
$ yarn test
```

We have a simple Express server (you can find the code in `app.js`) that is serving up our very basic `index.html` file. We are using webpack to compile all the code in our `src/` folder into one big file.

Go look inside `index.html` to find out what that one `.js` we have compiled all our code into is.

To start the server:

```bash
$ yarn serve
```

To start the compilation process:

```bash
$ yarn dev
```

You will need to run `yarn serve` and `yarn dev` in separate command line windows/tabs. We would suggest have three tabs in iTerm or Terminal OR creating more terminals in VSCode.

Remember to refresh your browser window after you make changes.

## Project Requirements

### The Sorting Algorithm

Research and choose a sorting algorithm.

- [ ] Research your sorting algorithm
- [ ] Write reasonable unit tests for your sorting algorithm in `test/_sort.js`
- [ ] Pass your tests and implement your sorting algorithm in `src/Sort.js`

#### Resources

- [Sorting Algorithms - Toptal](https://www.toptal.com/developers/sorting-algorithms)
- [Sorting Algorithms - Brilliant](https://brilliant.org/wiki/sorting-algorithms/)

### The Visualization

- [ ] Visualize your algorithms!

Some tips:

- Think about the various actions your code will be doing (e.g. creating particular elements, disappearing, changing values, etc.). These actions are probably a good starting point for different functions you can write.
- How can classes play a role here?
- Think simple. You only have two days to work on this. Focus on doing the minimum possible and then improve. Stay agile.

### The Presentation

**You will be creating a presentation of your visualization.**

- [ ] Create slides in your Google Drive

The slides should cover:

- [ ] An introduction of your sorting algorithm
- [ ] How it is implemented
- [ ] What time complexities is it?
- [ ] A Demo of your visualization
- [ ] Challenges
- [ ] What you learned
- [ ] (Optional) Pros and cons of your algorithm

- [ ] Make sure your presentation doesn't exceed the time stiplulated. (Please confirm this with the instructor on duty)
