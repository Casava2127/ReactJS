<div align="center">
  <h1> 30 Days Of React: Props </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> October, 2020</small>
</sub>

</div>

[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md)

![30 Days of React banner](../images/30_days_of_react_banner_day_5.jpg)

- [Props](#props)
  - [Props in Functional Component](#props-in-functional-component)
  - [What is props?](#what-is-props)
  - [Props object](#props-object)
    - [Different data type props](#different-data-type-props)
    - [String props type](#string-props-type)
    - [Number props type](#number-props-type)
    - [Boolean props type](#boolean-props-type)
    - [Array props type](#array-props-type)
    - [Object props type](#object-props-type)
    - [Function prop types](#function-prop-types)
  - [Destructuring props](#destructuring-props)
  - [propTypes](#proptypes)
  - [defaultProps](#defaultprops)
- [Exercises: Components and Props](#exercises-components-and-props)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Props

## Props in Functional Component

In the previous day, we saw how to inject (chèn) different data types to React component JSX. Now, let us see how we use it in component and also how to pass different data as props.

## What is props?

Props is a special keyword in React that stands (viết tắt) for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.

I hope you are familiar with the JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data ( dữ liệu động ) likewise props is a way we pass data or parameter to a component. Let's see the difference between a function and a component.

```js
// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// calling a functons

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

// User component, component should start with an uppercase
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
```

In the previous section, we injected data as follows and today we will change these data to props.

```js
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 4, 2020'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
)
```

Instead of injecting data we can also pass the data as props. React props are similar to parameters in functions.

## Props object

React props is an object which you get instantly when you create a React component. Before we pass properties to the component, let's check what do we get in the props object.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

In the above console.log(props), you would get an empty object({}). That means if you do not pass any attributes or properties when you instantiate the component, the props will be empty otherwise (nếu không) it will be populated with the data you passed as attributes and the proper name of these attributes are props.

Let's start with a simple example. In the example below, the welcome string has been passed as props in the Header components.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'} -> The name of obj is PROPS 
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1> // access object vavlue
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='Welcome to 30 Days Of React' /> 
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

Now, when you do console.log(props) you should get the following object, that means the welcome property we passed to the Header component can be found inside the props object.

```js
{
  welcome: 'Welcome to 30 Days Of React' ->this is a props
}
```

As you can see in the above code, we passed only single props to Header component, the welcome props. A component can have one or many props. Props could be different data types. It could be a string, number, boolean, array, object or a function. We will cover different kind of props in the next sections.

### Different data type props

### String props type

The data type of the props we pass an attribute to the component is a string.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(pr43ops)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => (
  <div className='app'>
    <Header
      welcome='Welcome to 30 Days Of React'
      title='Getting Started React'
      subtitle='JavaScript Library'
      firstName='Asabeneh'
      lastName='Yetayeh'
      date='Oct 4, 2020'
    />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

If you check on the browser console, you will get the following object.

```js
{
firstName: "Asabeneh",
lastName: "Yetayeh",
date: "Oct 4, 2020"
subtitle: "JavaScript Library"
title: "Getting Started React"
welcome: "Welcome to 30 Days Of React"
}
```

Since you are a JavaScript ninja by now, you know what do do with this object.

As you can see from the above example, the value of the props are written statically. However, if we want to apply some logic it is hard to implement with statically written data, so it will be better to use a variable as props. Let's see the following example:

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const firstName = 'Asabeneh'
  const lastName = 'Yetayeh'
  const date = 'Oct 4, 2020'

  return (
    <div className='app'>
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Number props type

Let's use a number props to a component

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Boolean props type

We can pass boolean data types to a React component.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 2015
  const age = currentYear - birthYear // 15 years

  let status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Array props type

In programming arrays and objects are the most frequently used data structure to solve different problems and store data in a more structured way. Therefore, we encounter data in the form of an array quite often. Let's pass an array as props to a component

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Skills = (props) => <ul>{props.skills}</ul>

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

If you see the result on the browser, the skills elements needs formatting. Therefore before we render, it should have some elements between each skill. To modify the array and to add a li element we can use map method. You should be very familiar with the functional programming map, filter and reduce to feel good at React if not please go back to day 1 JavaScript refresher. Let's apply map to modify the array.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Skills Component
const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>)
  return <ul>{skillList}</ul>
}

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

We will go in-depth about list and map in other sections. Now, let's see an object as a props.

### Object props type

We may pass an object as props to a React component. Let's see an example.
We can change the previous Header props to object. For the time being let's change a few properties for better understanding.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Now, let's change all the previous Header properties to an object.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

When we use an object as props we usually destructure the data to access the values. Destructuring makes our code easy to read. We will soon see the destructuring of props but before that let's see function as props for a React component.

### Function prop types

We can pass a function as props type to a React component. Let's see some examples

```js
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Even we can write a function inside the curly bracket

```js
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Button text='Say Hi' onClick={() => alert('Hi')} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Now, lets implement different functions as props

```js
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

In the above example, onClick is a props to hold the greetPeople function. HTML has onclick, onmouseover, onhover, onkeypress and etc event handlers. In React, these handlers are in camelCase. For instance onClick, onMouseOver, onKeyPress etc. We will cover events in React in detail in other section.

Let's see some more functions as props to give a clear understanding how to handle function as props in a React component.

This component shows month, date and year as an alert box.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  return (
    <div className='app'>
      <Button text='show time' onClick={handleTime} />
      <Button text='Greet People' onClick={greetPeople} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Destructuring props

By now, I believe you are a JavaScript ninja and you know about destructing arrays and objects. Destructuring code to some extent makes easy to read. Let us destructure the props in Header component. Everything we passed as props is stored in props object. Therefore, props is an object and we can destructure the properties. Let's destructure some of the props we wrote in object props example. We can destructure in many ways:

1. Step by step destructuring

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

2. Destructuring in one line

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

3. Destructuring the props inside the parenthesis

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Now, let's destructure all the components we had and assemble them together. We pass props from one component to another typically from parent to a child component.
For instance in the Main component techs, user, greetPeople and handleTime props have been passed from the parent component Main to child components TechList and UserCard. Below, you will get all the codes destructured and cleaned.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## propTypes

The propTypes package helps us to assign the data types of the props we passed to a component.

## defaultProps

The defaultProps can be used when we want to have some default prop types for a component.

We will cover propTypes in detail in other sections.

# Exercises: Components and Props

## Exercises: Level 1

1. What is props in a React component ?
2. How do you access props in a React component ?
3. What data types can we pass as props to components ?
4. What is a propTypes?
5. What is a default propTypes?

## Exercises: Level 2

1. Create a functional component and display the following images
   ![Front end](../images/frontend_technologies.png)

2. Use functional component to create the following design

![News Letter](../images/news_letter_design.png)

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors. If you don't know how to generate the hexadecimal color you can use [dummy data generator](https://www.30daysofreact.com/dummy-data)

![Hexadecimal colors](../images/hexadecimal_color_exercise.png)

2. Use functional component to design the following user card.

![User Card](../images/user_card_design_jsx.png)

🎉 CONGRATULATIONS ! 🎉

[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md)



### 📌 **Bản chất của `props` trong React**  
`props` (viết tắt của **properties**) là **đối tượng chứa dữ liệu** mà một **component cha** truyền xuống **component con**.  

---

## **🔹 1. Bản chất của `props`**
- **Là đối số (parameters) của component** → Giống như tham số của một hàm.
- **Không thể thay đổi trong component con** (*immutable*).
- **Giúp component tái sử dụng** bằng cách truyền dữ liệu động.

📌 **Ví dụ cơ bản:**  
```jsx
function Welcome(props) {
  return <h1>Xin chào, {props.name}!</h1>;
}

// Dùng component Welcome với các props khác nhau
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;
```
👉 **Giải thích:**  
- `props.name` lấy giá trị từ **component cha** (`App`).
- Mỗi lần gọi `<Welcome name="Alice" />`, giá trị `"Alice"` sẽ được truyền vào `props.name`.

---

## **🔹 2. `props` là đối tượng**
Thực chất, `props` là một **object** chứa các thuộc tính được truyền vào:  
```jsx
function UserInfo(props) {
  console.log(props); 
  return <h2>{props.name} - {props.age} tuổi</h2>;
}

// Truyền nhiều props
<UserInfo name="David" age={25} />
```
⏩ **Kết quả của `console.log(props)`**
```js
{ name: "David", age: 25 }
```

---

## **🔹 3. `props` không thể thay đổi trong component con**
- Nếu bạn thử gán lại `props`, React sẽ báo lỗi:  
```jsx
function Welcome(props) {
  props.name = "New Name"; // ❌ LỖI: props là immutable!
  return <h1>Hello, {props.name}!</h1>;
}
```
✔ **Cách đúng:** Nếu cần thay đổi, hãy lưu `props` vào `useState`.

---

## **🔹 4. Destructuring `props` để code gọn hơn**
Thay vì viết `props.name`, `props.age`, có thể **giải cấu trúc** (`destructuring`):
```jsx
function UserInfo({ name, age }) {
  return <h2>{name} - {age} tuổi</h2>;
}

<UserInfo name="David" age={25} />
```
👉 **Lợi ích:** Dễ đọc hơn, không cần gọi `props.` nhiều lần.

---

## **🔹 5. Truyền `props` là một component, mảng hoặc object**
- **Truyền component qua `props`**  
```jsx
function Layout(props) {
  return (
    <div>
      <h1>Header</h1>
      {props.children} 
      <h1>Footer</h1>
    </div>
  );
}

// Sử dụng
<Layout>
  <p>Đây là nội dung chính</p>
</Layout>
```
📝 `props.children` giúp truyền **nội dung bên trong thẻ mở và đóng**.

- **Truyền object hoặc array qua `props`**  
```jsx
const user = { name: "David", age: 25 };
<UserInfo {...user} />
```
⏩ React tự động tách `user` thành `{ name: "David", age: 25 }`.

---

## **🔹 Kết luận**
✅ `props` giúp **component linh hoạt** và **tái sử dụng**.  
✅ **Không thể thay đổi `props` trong component con**.  
✅ **Có thể truyền component, object, array, function vào `props`**.  
✅ **Sử dụng destructuring để code gọn hơn**.  

📌 **Tóm lại:** `props` giống như tham số truyền vào một hàm, giúp component hiển thị dữ liệu một cách động. 🚀


### 📌 **Định nghĩa `props` bằng destructuring mà không cần đặt tên `props`**  

Bình thường, khi nhận `props`, chúng ta viết như sau:  
```jsx
function UserInfo(props) {
  return <h2>{props.name} - {props.age} tuổi</h2>;
}
```
👉 Ở đây, **`props` là một object**, và ta lấy dữ liệu bằng `props.TenThuocTinh`.

---

## **🔹 Cách tối ưu: Không định nghĩa `props`, dùng destructuring trực tiếp**  
Thay vì gọi `props.TenThuocTinh`, ta có thể destructuring **ngay trong tham số của function**:  
```jsx
function UserInfo({ name, age }) {
  return <h2>{name} - {age} tuổi</h2>;
}
```
⏩ Ở đây, chúng ta **không cần gọi `props.name`, `props.age` nữa**, mà chỉ cần `{ name, age }`.

---

## **🔹 So sánh hai cách**
| Cách viết | Định nghĩa `props` | Cách truy xuất dữ liệu |
|-----------|-----------------|----------------|
| **Dùng `props`** | `function UserInfo(props)` | `props.name`, `props.age` |
| **Dùng destructuring** | `function UserInfo({ name, age })` | `{ name }`, `{ age }` |

✔ **Lợi ích của destructuring**:  
✅ Code gọn hơn, dễ đọc hơn.  
✅ Không cần viết `props.` nhiều lần.  

## 🔥 **Bản chất nâng cao của `props` trong React**  

### **1️⃣ `props` là một đối tượng (object) chứa tất cả các thuộc tính truyền vào component**  
Khi một component nhận `props`, React thực chất **gói tất cả các thuộc tính** lại thành một đối tượng và truyền vào component.

Ví dụ:  
```jsx
function UserInfo(props) {
  console.log(props); // { name: "Alice", age: 25 }
  return <h2>{props.name} - {props.age} tuổi</h2>;
}

// Sử dụng component
<UserInfo name="Alice" age={25} />;
```
⏩ Khi chạy, `props` là:  
```js
{ name: "Alice", age: 25 }
```
---

### **2️⃣ `props` là immutable (bất biến)**
React không cho phép thay đổi giá trị của `props` bên trong component.  
❌ **Sai**:
```jsx
function UserInfo(props) {
  props.name = "Bob"; // ❌ Lỗi: Không thể thay đổi giá trị props
  return <h2>{props.name}</h2>;
}
```
✅ **Đúng** (tạo state mới nếu cần thay đổi dữ liệu):
```jsx
function UserInfo({ name }) {
  const [newName, setNewName] = React.useState(name);

  return <h2 onClick={() => setNewName("Bob")}>{newName}</h2>;
}
```
---
### **3️⃣ `props` có thể nhận bất kỳ kiểu dữ liệu nào**
`props` có thể là **chuỗi, số, boolean, mảng, object, function, JSX, component**, v.v.

Ví dụ:
```jsx
function Child({ data, callback, element }) {
  return (
    <div>
      <p>Array: {data.join(", ")}</p>
      <button onClick={callback}>Gọi hàm</button>
      {element}
    </div>
  );
}

<Child 
  data={[1, 2, 3]} 
  callback={() => alert("Clicked!")} 
  element={<h3>Hello JSX</h3>} 
/>;
```
✅ Ở đây, `props` nhận **mảng**, **hàm**, và **JSX**.

---
### **4️⃣ `props.children` - Truyền nội dung vào component**
React cung cấp `props.children` để **chèn nội dung bên trong component**.

Ví dụ:
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Tiêu đề</h2>
  <p>Nội dung bên trong</p>
</Card>
```
👉 Ở đây, `props.children` chứa `<h2>` và `<p>`.  

---
### **5️⃣ Default Props - Giá trị mặc định cho `props`**
Nếu không truyền `props`, ta có thể đặt giá trị mặc định:
```jsx
function Button({ label = "Nhấn vào đây" }) {
  return <button>{label}</button>;
}

<Button />  // Hiển thị "Nhấn vào đây"
<Button label="Gửi" />  // Hiển thị "Gửi"
```

---
### **6️⃣ Destructuring + Rest Props**
Nếu component có quá nhiều `props`, ta có thể dùng **rest operator (`...rest`)** để lấy tất cả `props` còn lại.

```jsx
function Profile({ name, ...rest }) {
  console.log(rest); // { age: 30, email: "a@gmail.com" }
  return <h2>{name}</h2>;
}

<Profile name="Alice" age={30} email="a@gmail.com" />;
```
✅ `rest` chứa tất cả các `props` còn lại.

---
### **🔥 Tổng kết**
| Tính năng `props`  | Mô tả |
|--------------------|--------------------------------|
| `props` là object | Chứa tất cả các thuộc tính truyền vào component |
| Immutable | Không thể thay đổi `props` trực tiếp |
| Kiểu dữ liệu đa dạng | Chuỗi, số, boolean, mảng, object, function, JSX, component |
| `props.children` | Dùng để truyền nội dung bên trong component |
| Default Props | Định nghĩa giá trị mặc định cho `props` |
| Rest Props (`...rest`) | Gom nhóm `props` còn lại thành object |

🚀 **`props` giúp component linh hoạt, tái sử dụng tốt hơn, và là nền tảng quan trọng trong React!**


### **🔥 Những điều nâng cao về `props` mà chỉ có kinh nghiệm mới hiểu!**  

Trong React, `props` không chỉ đơn giản là cách truyền dữ liệu giữa các component. Khi làm việc với `props` ở cấp độ thực tế, ta sẽ gặp nhiều vấn đề nâng cao mà không dễ nhận ra ngay từ đầu. Dưới đây là **những kinh nghiệm quan trọng** khi làm việc với `props` mà bạn nên biết.  

---

## **1️⃣ Truyền `props` một cách tối ưu để tránh re-render không cần thiết**
Mỗi lần một component nhận `props` mới, nó sẽ re-render. Nhưng có trường hợp ta vô tình **truyền props theo cách gây re-render không cần thiết**.  

🔴 **Lỗi thường gặp: Truyền function trực tiếp trong JSX**  
```jsx
function Parent() {
  return <Child onClick={() => console.log("Clicked!")} />;
}
```
👉 **Sai** vì mỗi lần `Parent` re-render, function mới được tạo ⇒ `Child` cũng bị re-render.  

✅ **Cách đúng: Dùng `useCallback` để tránh tạo function mới**  
```jsx
const handleClick = useCallback(() => console.log("Clicked!"), []);

function Parent() {
  return <Child onClick={handleClick} />;
}
```
⏩ **Lợi ích:** `Child` không re-render không cần thiết.

---

## **2️⃣ Props không thay đổi có thể dẫn đến lỗi "Stale Props"**
Trong một số trường hợp, `props` có thể bị "đóng băng" nếu không xử lý đúng, dẫn đến lỗi **Stale Props** (props cũ không cập nhật).  

🔴 **Lỗi thường gặp: Sử dụng props trong `useEffect` mà không có dependency đúng**  
```jsx
function Child({ count }) {
  useEffect(() => {
    console.log(`Count hiện tại: ${count}`);
  }, []); // ❌ Không có `count` trong dependencies!
}
```
👉 **Sai** vì `useEffect` chỉ chạy một lần, `count` sẽ không được cập nhật.

✅ **Cách đúng:**  
```jsx
useEffect(() => {
  console.log(`Count hiện tại: ${count}`);
}, [count]); // ✅ Thêm `count` vào dependencies
```
⏩ **Lợi ích:** `useEffect` sẽ chạy lại khi `count` thay đổi.

---

## **3️⃣ Hạn chế việc truyền Object hoặc Array trực tiếp qua `props`**
Khi truyền một `object` hoặc `array` qua `props`, nếu không tối ưu, **React có thể hiểu đó là một giá trị mới dù dữ liệu không thay đổi**, dẫn đến **re-render không mong muốn**.  

🔴 **Lỗi thường gặp: Truyền object trực tiếp**  
```jsx
function Parent() {
  return <Child data={{ name: "Alice", age: 25 }} />;
}
```
👉 **Sai** vì mỗi lần `Parent` re-render, `data` được tạo lại, khiến `Child` cũng re-render.  

✅ **Cách đúng: Dùng `useMemo` để cache object**  
```jsx
const data = useMemo(() => ({ name: "Alice", age: 25 }), []);

function Parent() {
  return <Child data={data} />;
}
```
⏩ **Lợi ích:** `Child` chỉ re-render khi `data` thực sự thay đổi.

---

## **4️⃣ `props.children` có thể nhận một function (Render Props)**
Thông thường, ta truyền JSX vào `props.children`, nhưng ít ai biết rằng **có thể truyền một function vào `children`**, giúp component linh hoạt hơn.  

### **Ví dụ: Sử dụng Render Props để chia sẻ logic**
```jsx
function DataProvider({ children }) {
  const [data, setData] = useState("Hello World!");
  return children(data);
}

function App() {
  return (
    <DataProvider>
      {(data) => <h1>{data}</h1>} {/* 🟢 Truyền function vào children */}
    </DataProvider>
  );
}
```
⏩ **Lợi ích:** Component `DataProvider` có thể dùng cho nhiều tình huống khác nhau mà không cần thay đổi logic.

---

## **5️⃣ Sử dụng `defaultProps` có thể gây lỗi với function component**
Trước đây, ta có thể sử dụng `defaultProps` để đặt giá trị mặc định cho `props`:

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: "Nhấn vào đây",
};
```
🚨 **Nhưng hiện tại, cách này không còn phổ biến và có thể không hoạt động với component sử dụng destructuring.**  

✅ **Cách tốt hơn: Đặt giá trị mặc định trực tiếp trong destructuring**
```jsx
function Button({ label = "Nhấn vào đây" }) {
  return <button>{label}</button>;
}
```
⏩ **Lợi ích:** Gọn gàng hơn và hoạt động tốt với TypeScript.

---

## **6️⃣ Props trong `memo` có thể không nhận diện đúng thay đổi**
React `memo` giúp ngăn component re-render nếu `props` không thay đổi. Nhưng nếu `props` là object hoặc array, React có thể hiểu sai và vẫn re-render.  

🔴 **Lỗi thường gặp**  
```jsx
const MemoChild = React.memo(({ data }) => {
  console.log("Re-render");
  return <h2>{data.name}</h2>;
});

function Parent() {
  return <MemoChild data={{ name: "Alice" }} />; // ❌ Object mới mỗi lần re-render
}
```
👉 `MemoChild` vẫn re-render dù data không thay đổi!  

✅ **Cách đúng: Dùng `useMemo` để tối ưu `props`**  
```jsx
const data = useMemo(() => ({ name: "Alice" }), []);

function Parent() {
  return <MemoChild data={data} />; // ✅ Không re-render nếu data không thay đổi
}
```
⏩ **Lợi ích:** `React.memo` hoạt động đúng với `props`.

---

## **🔥 Tổng kết**
| Kinh nghiệm thực tế về `props` | Mô tả |
|--------------------------------|------------------------------------------------|
| Tránh truyền function trực tiếp trong JSX | Dùng `useCallback` để tránh re-render |
| Cẩn thận với "Stale Props" | Đảm bảo thêm props vào dependency của `useEffect` |
| Tránh truyền object hoặc array trực tiếp | Dùng `useMemo` để tránh re-render không cần thiết |
| `props.children` có thể là function | Giúp component linh hoạt hơn với Render Props |
| Tránh dùng `defaultProps` với function component | Dùng destructuring để đặt giá trị mặc định |
| `React.memo` không hoạt động tốt với object/array | Dùng `useMemo` để truyền props chính xác |

---

## **🚀 Kết luận**
Làm việc với `props` không chỉ đơn giản là truyền dữ liệu từ component cha sang con. Việc tối ưu `props` sẽ giúp code **hiệu suất tốt hơn, tránh re-render không cần thiết và tăng độ linh hoạt**. Đây là những kinh nghiệm mà hầu hết lập trình viên chỉ nhận ra sau khi làm việc lâu dài với React.  

Bạn có đang gặp vấn đề nào với `props` không? 🚀🔥