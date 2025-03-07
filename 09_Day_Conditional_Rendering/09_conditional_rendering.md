<div align="center">
  <h1> 30 Days Of React: Conditional Rendering</h1>
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

[<< Day 8](../08_Day_States/08_states.md) | [Day 10 >>](../10_React_Project_Folder_Structure/10_react_project_folder_structure.md)

![30 Days of React banner](../images/30_days_of_react_banner_day_9.jpg)

# Conditional Rendering

As we can understand from the term, conditional rendering is a way to render different JSX or component at different condition. We can implement conditional rendering using regular if and else statement, ternary operator and &&. Let's implement a different conditional rendering.

## Conditional Rendering using If and Else statement

In the code below, we have an initial state of loggedIn which is false. If the state is false we inform user to log in otherwise we welcome the user.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    // conditional rendering using if and else statement

    let status

    if (this.state.loggedIn) {
      status = <h3>Welcome to 30 Days Of React</h3>
    } else {
      status = <h3>Please Login</h3>
    }

    return (
      <div className='app'>
        <Header data={data} />
        {status}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Let's add a method which allow as to toggle the status of the user. We should have a button to handle event for logging in and logging out.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    let status
    let text

    if (this.state.loggedIn) {
      status = <h1>Welcome to 30 Days Of React</h1>
      text = 'Logout'
    } else {
      status = <h3>Please Login</h3>
      text = 'Login'
    }

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

How about if our condition is more than two? Like pure JavaScript we can use if else if statement. In general, conditional rendering is not different from pure JavaScript conditional statement.

## Conditional Rendering using Ternary Operator

Ternary operator is an an alternative for if else statement. However, there is more use cases for ternary operator than if else statement. For example, use can use ternary operator inside styles, className or many places in a component than regular if else statement.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    let status = this.state.loggedIn ? (
      <h1>Welcome to 30 Days Of React</h1>
    ) : (
      <h3>Please Login</h3>
    )

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button
          text={this.state.loggedIn ? 'Logout' : 'Login'}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

In addition to JSX, we can also conditionally render a component. Let's change the above conditional JSX to a component.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

class App extends React.Component {
  state = {
    loggedIn: false,
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    const status = this.state.loggedIn ? <Welcome /> : <Login />

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button
          text={this.state.loggedIn ? 'Logout' : 'Login'}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Conditional Rendering using && Operator

The && operator render the right JSX operand if the left operand(expression) is true.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    // We can destructure state

    const { loggedIn, techs } = this.state

    const status = loggedIn ? <Welcome /> : <Login />

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button
          text={loggedIn ? 'Logout' : 'Login'}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
        {techs.length === 3 && (
          <p>You have all the prerequisite courses to get started React</p>
        )}
        {!loggedIn && (
          <p>
            Please login to access more information about 30 Days Of React
            challenge
          </p>
        )}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

In the previous section, we used alert box to greet people and also to display time. Let's render the greeting and time on browser DOM instead of displaying on alert box.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
)
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
    } = this.props
    console.log(message)

    const status = loggedIn ? <Welcome /> : <Login />
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />{' '}
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or Greet people to change me',
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }
  showDate = (time) => {
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
    return `${month} ${date}, ${year}`
  }
  handleTime = () => {
    let message = this.showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    return (
      <div className='app'>
        <Header data={data} />

        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```
## Testimony
Now it is time to express your thoughts about the Author and 30DaysOfReact. You can leave your testimonial on this [link](https://testimonify.herokuapp.com/)

## Exercises

### Exercises: Level 1

1. What is conditional rendering?
2. How do you implement conditional rendering?
3. Which method of conditional rendering do you prefer to use?

### Exercises: Level 2

1. Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)
2. Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)

### Exercises: Level 3

1. Fetching data takes some amount of time. A user has to wait until the data get loaded. Implement a loading functionality of a data is not fetched yet. You can simulate the delay using setTimeout.

🎉 CONGRATULATIONS ! 🎉

[<< Day 8](../08_Day_States/08_states.md) | [Day 10 >>](../10_React_Project_Folder_Structure/10_react_project_folder_structure.md)


# **📌 Bản Chất Thực Sự Của `State` Trong React**  

---

## **1️⃣ `State` Sinh Ra Để Làm Gì?**  
`State` sinh ra với **mục đích quản lý dữ liệu thay đổi theo thời gian** trong một component.  
- Nếu dữ liệu **tĩnh** → dùng **props**.  
- Nếu dữ liệu **thay đổi (dynamic)** → dùng **state**.  

🔹 **React không tự động theo dõi sự thay đổi của biến thông thường**. Nếu thay đổi giá trị một biến mà không dùng `state`, React **không render lại UI**.  

📌 **Ví dụ sai (không dùng state, UI không cập nhật):**  
```jsx
let count = 0;

const handleClick = () => {
  count++; // Tăng count
  console.log(count); // Giá trị tăng, nhưng UI không cập nhật
};

const Counter = () => (
  <div>
    <h1>Giá trị: {count}</h1>
    <button onClick={handleClick}>Tăng</button>
  </div>
);
```
**🛑 Kết quả:** UI vẫn hiển thị `0` dù `count` đã tăng trong console!  

✅ **Giải pháp:** Sử dụng `state` để React biết rằng có sự thay đổi.  

```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Giá trị: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
};
```
🔹 **Lợi ích:** Khi gọi `setCount(count + 1)`, React sẽ cập nhật lại giao diện.  

---

## **2️⃣ Bản Chất Của `State` – Hiểu Sâu Bên Trong**  
🔹 Khi gọi `useState()`, React **không lưu state vào biến thông thường** mà lưu nó **ở cấp độ component instance**.  
🔹 Khi component **re-render**, biến thông thường **bị reset**, nhưng `state` vẫn giữ nguyên giá trị.  

📌 **Ví dụ:**  
```jsx
const Counter = () => {
  let count = 0; // Biến thông thường
  const [stateCount, setStateCount] = React.useState(0);

  return (
    <div>
      <h1>Normal: {count}</h1>
      <h1>State: {stateCount}</h1>
      <button onClick={() => { count++; setStateCount(stateCount + 1); }}>
        Tăng
      </button>
    </div>
  );
};
```
🚀 **Khi nhấn nút:**  
✔ `stateCount` tăng đúng vì dùng `setState()`.  
❌ `count` không hiển thị giá trị mới vì bị reset sau mỗi lần render.  

🔹 **Kết luận:** `state` được React lưu trữ **ngoài component function**, nên giá trị **không bị mất sau mỗi lần re-render**.

---

## **3️⃣ `setState()` Không Thể Hiện Ngay Lập Tức – Vì Sao?**
🔹 **`setState()` hoạt động bất đồng bộ** để tối ưu hiệu suất.  
🔹 Nếu gọi nhiều `setState()` liên tiếp, React **gom nhóm lại (batching)** và thực hiện một lần để tránh render quá nhiều lần.  

📌 **Ví dụ sai – `setState()` chưa cập nhật ngay lập tức:**  
```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // ❌ In ra giá trị cũ!
  };

  return <button onClick={handleClick}>Tăng</button>;
};
```
📌 **Cách đúng – Dùng `prevState` để đảm bảo giá trị đúng:**  
```jsx
const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  console.log(count); // Giá trị trong console có thể sai, nhưng UI đúng
};
```
🔹 **Lý do:** React **chưa cập nhật `state` ngay lập tức**, nhưng khi dùng callback (`prevCount`), React lấy giá trị mới nhất.

---

## **4️⃣ Khi Nào `State` Gây Ra Render Lại UI?**
✔ **Gây re-render nếu:**  
   - `setState()` nhận giá trị **mới khác giá trị cũ**.  
   - Component có state bị thay đổi.  

❌ **Không gây re-render nếu:**  
   - Gọi `setState()` với **giá trị cũ**.  
   - `state` chứa **object/array không thay đổi tham chiếu (reference)**.  

📌 **Ví dụ sai – Không làm UI cập nhật:**  
```jsx
const [user, setUser] = useState({ name: 'John' });

const updateUser = () => {
  user.name = 'Alice'; // ❌ Thay đổi trực tiếp object
  setUser(user);       // ❌ Không thay đổi reference => UI không cập nhật
};
```
📌 **Cách đúng – Tạo object mới:**  
```jsx
setUser({ ...user, name: 'Alice' });
```
🔹 **Lý do:** React so sánh object **bằng tham chiếu (reference)**, không phải nội dung.  

---

## **5️⃣ Những Kiến Thức Chỉ Có Kinh Nghiệm Mới Biết**
### **🔥 1. `State` Không Nhất Thiết Phải Là Object**
🔹 Nhiều người nghĩ `state` luôn phải là object, nhưng nó có thể là **bất kỳ kiểu dữ liệu nào** (string, number, boolean, array, object, v.v.).

```jsx
const [count, setCount] = useState(0); // ✅ Number
const [name, setName] = useState("John"); // ✅ String
const [isVisible, setIsVisible] = useState(true); // ✅ Boolean
const [items, setItems] = useState([]); // ✅ Array
const [user, setUser] = useState({ name: "Alice", age: 25 }); // ✅ Object
```

---

### **🔥 2. `State` Trong Function Component Không Tự Kết Hợp (`merge`)**
🔹 Trong Class Component, `setState()` **gộp (merge)** object cũ với object mới.  
🔹 Nhưng với `useState()`, React **không tự động merge**.  

📌 **Ví dụ sai – Dữ liệu bị mất:**  
```jsx
const [user, setUser] = useState({ name: "Alice", age: 25 });

const updateName = () => {
  setUser({ name: "John" }); // ❌ Mất thuộc tính `age`
};
```
📌 **Cách đúng – Dùng spread operator:**  
```jsx
setUser(prevUser => ({ ...prevUser, name: "John" }));
```

---

### **🔥 3. Dùng `useReducer()` Khi `State` Phức Tạp**
🔹 Nếu state có nhiều thuộc tính và nhiều logic cập nhật, **dùng `useReducer()` thay vì `useState()`** để code dễ quản lý hơn.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, name: "Alice" });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "SET_NAME", payload: "Bob" })}>
        Change Name
      </button>
    </div>
  );
};
```
🔹 **Lợi ích:** Code rõ ràng hơn khi có nhiều logic cập nhật.

---

## **🚀 Kết Luận**
✔ `State` giúp quản lý dữ liệu động trong component.  
✔ `setState()` **bất đồng bộ** và có thể bị **batching**.  
✔ Không nên **thay đổi trực tiếp object trong state** → dùng spread operator.  
✔ Khi state phức tạp, **dùng `useReducer()`** thay vì `useState()`.  
✔ Nếu dùng biến thông thường thay vì state, UI sẽ **không cập nhật**.  

👉 **Kinh nghiệm thực tế giúp tránh lỗi khi làm việc với state và tối ưu hiệu suất.** 🚀
