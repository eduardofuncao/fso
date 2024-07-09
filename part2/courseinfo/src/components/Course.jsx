
const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => <strong>Number of exercises {sum}</strong>

const Part = ({ part }) => {
return(  
<li>
    <p>
    {part.name} {part.exercises}
    </p>
</li>
)
}

const Content = ({ parts }) => {
return(
<>
    <ul>
        {parts.map(part => 
        <Part part={part} key={part.id}/>
        )}
    </ul>   
    <Total sum={parts.reduce((sum, part) => sum + part.exercises, 0)} />
</>
)
}

const Course = ({ course }) => {
    return(
      <li>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </li>
    )
}

export default Course;
