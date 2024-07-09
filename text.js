

const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
};

const sumOfExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

//console.log(sumOfExercises); // Output: 31

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];


const hasTargetName = (array, name) => {
  return array.some(person => person.name === name)
}

console.log(hasTargetName(people, "Ace"));