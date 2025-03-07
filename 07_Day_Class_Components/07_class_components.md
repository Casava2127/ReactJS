<div align="center">
  <h1> 30 Days Of React: Class Components </h1>
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

[<< Day 6](../06_Day_Map_List_Keys/06_map_list_keys.md) | [Day 8 >>](../08_Day_States/08_states.md)

![30 Days of React banner](../images/30_days_of_react_banner_day_7.jpg)

- [Class Components](#class-components)
  - [Accessing props in Class components](#accessing-props-in-class-components)
  - [Methods in Class based component](#methods-in-class-based-component)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Class Components

In the previous sections, we have covered JSX, functional component and props. In this section, we will cover class components or stateful component. Only class based components used to have state and life cycle methods. However, after React version 16.8.0 functional components can have state and life cycle using React Hooks. In 30 Days Of React challenge, we will cover React before 16.8.0 and after, that mean both old and newest version. There are lots of codes written in older version and at some point it may need migration. In addition, to understand React very well someone has to understand class based component too.

All the previous components are functional components. Let us make also class based component. Class based component is made using JavaScript class and it inherits from react Component. Let us learn how to make a class based component by converting all the functional components we made previously. It is not important to convert all but we are converting them for the sake of learning how to change functional components to class components.

```js
// Pure JavaScript class and child
// Imagine this what we import from React package
class Component {
  constructor(props) {}
}

// This how we make class based components by inheriting from the parent
class Child extends Component {
  constructor(props) {
    super(props);
  }
}
```

Functional React component

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
// Header Component
// Functional component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 6, 2020</small>
    </div>
  </header>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Class based React component is a child of React.Component and it has a built-in render method and it may have a constructor.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class based component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Let's see the above component with a constructor

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class base component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Let's change all the functional component to class based components

```js
// TechList Component
// functional component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Functional Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
    </div>
  </main>
);

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

// Footer Component
// Functional component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// The App, or the parent or the container component
// Functional Component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
```

Let's put all the class based components together in one file.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class base component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Accessing props in Class components

We stated that props is a means to send data from on component to another or we can call it that props is a data carrier. Therefore, we should handle props in class based component too. We can access props of a class based component using the keyword _this_. See the example below.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>{this.props.data.welcome}</h1> // có the hieu no nhu la this nhu
          chi dinh thuoc tinh cua class nay ma khog phai class cha -> khac
          funtion o cho la no chi dinh class
          <h2>{this.props.data.title}</h2>
          <h3>
            {this.props.data.author.firstName} {this.props.data.author.lastName}
          </h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    );
  }
}
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 7, 2020",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

As you can see in the above example, to get the data out from props we have write _props.data_ every time. We can avoid this repetition using destructuring.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data; // chỉ định trong đối tượng data có các thuộc tính welcome và việc của chính là truyền dữ liệu từ APP và header thôngqua prosp

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 6, 2020",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

As you can see, the above code cleaner than the previous. Now, let's clean all the components we have and put all together.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    return (
      <div className="app">
        <Header data={data} />
        <Main techs={techs} />
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Methods in Class based component

We access methods in class based component. Most of the time, we write different methods on the parent component and we pass them to child components. Let's see the implementation.

Let's add a method on this component.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// class based component
class Header extends React.Component {
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

The invoking or calling of the method triggers when the event occurs. Therefore, whenever you pass a method to an event listener do not invoke the method.

Now, let's the code we had add all the necessary methods.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Fuction to show month date year

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button
            text="Greet People"
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text="Show Time"
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Most of the time the container or the parent component can be written as class component and others as functional or presentational components. Data usually flows from parent components to child component and it is unidirectional. However, the latest version of react can allow us to write every component in our application only with functional components. This was impossible in previous versions.
In next section, we will cover state which is the heart of React. State allows React component to rerender when whenever there is a change in state.

# Exercises

## Exercises: Level 1

1. How do you write a pure JavaScript function
2. What is inheritance and how do you make a child from a parent class?
3. What is class based React component ?
4. What is the difference between functional React component and class based React component ?
5. When do we need to use class based components instead of functional components
6. What is the use cases of class based component ?
7. Which type of component do use most frequently ? functional or class-based component
8. What is React life cycle ? (not covered yet) ?
9. What is state in React ? (not covered yet)

## Exercises: Level 2

Learn more about class based component by changing previous days exercises to class based components

## Exercises: Level 3

Coming ...

🎉 CONGRATULATIONS ! 🎉

[<< Day 6](../06_Day_Map_List_Keys/06_map_list_keys.md) | [Day 8 >>](../08_Day_States/08_states.md)

## 📌 **Tổng Kết Bản Chất Của Class Component & Cách Truyền Props**

---

### **1️⃣ Bản Chất Của Class Component**

Class Component trong React là một kiểu khai báo component dựa trên ES6 `class`, giúp tổ chức mã một cách rõ ràng, đặc biệt là khi cần quản lý trạng thái (`state`) và sử dụng vòng đời (`lifecycle methods`).

**🔹 Đặc điểm chính của Class Component:**

- **Kế thừa từ `React.Component`** để có thể sử dụng các tính năng như `state` và `lifecycle methods`.
- **Có phương thức `render()`** để trả về giao diện JSX.
- **Sử dụng `this.props` để nhận dữ liệu** từ component cha.
- **Sử dụng `this.state` để quản lý trạng thái nội bộ.**
- **Hỗ trợ lifecycle methods như `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`.**

📌 **Ví dụ về Class Component cơ bản**:

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Xin chào, {this.props.name}!</h1>;
  }
}

// Sử dụng component này
<Welcome name="Nguyễn Văn A" />;
```

---

### **2️⃣ Bản Chất Của Props Trong Class Component**

**`props` (properties)** là một đối tượng chứa tất cả các giá trị mà **component cha truyền xuống component con**.

📌 **Bản chất của `props`:**

- Là **đối tượng bất biến (immutable)** → Không thể thay đổi giá trị `props` bên trong component con.
- Được truyền từ component cha xuống component con.
- Giúp component tái sử dụng được bằng cách truyền các giá trị khác nhau.

📌 **Ví dụ về truyền `props`:**

```jsx
class Header extends Component {
  render() {
    return <h1>Xin chào, {this.props.name}!</h1>;
  }
}

// Component cha
class App extends Component {
  render() {
    return <Header name="Nguyễn Văn B" />;
  }
}
```

📝 **Kết quả:**  
Hiển thị `Xin chào, Nguyễn Văn B!`.

---

### **3️⃣ Destructuring Props Để Code Gọn Hơn**

Thay vì truy cập `this.props.name` từng lần, ta có thể **destructuring**:

#### **🔹 Cách viết không destructuring:**

```jsx
class Header extends Component {
  render() {
    return <h1>Xin chào, {this.props.name}!</h1>;
  }
}
```

#### **🔹 Cách viết có destructuring (gọn hơn):**

```jsx
class Header extends Component {
  render() {
    const { name } = this.props; // Lấy trực tiếp name từ props
    return <h1>Xin chào, {name}!</h1>;
  }
}
```

---

### **4️⃣ Truyền Props Có Cấu Trúc Lồng Nhau**

Props có thể là **đối tượng lồng nhau**, nên khi destructuring cần lưu ý cách trích xuất dữ liệu.

📌 **Ví dụ về destructuring với đối tượng lồng nhau:**

```jsx
class Header extends Component {
  render() {
    const {
      welcome,
      title,
      author: { firstName, lastName },
      date,
    } = this.props.data; // Trích xuất dữ liệu từ this.props.data

    return (
      <header>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <p>
          Tác giả: {firstName} {lastName}
        </p>
        <small>{date}</small>
      </header>
    );
  }
}

// Component cha truyền dữ liệu xuống:
class App extends Component {
  render() {
    const data = {
      welcome: "Chào mừng đến với React",
      title: "Học về Props",
      author: { firstName: "Nguyễn", lastName: "Văn A" },
      date: "2025-03-05",
    };

    return <Header data={data} />;
  }
}
```

📝 **Cách này giúp code gọn hơn**, thay vì viết `this.props.data.welcome`, `this.props.data.author.firstName`, v.v.

---

### **5️⃣ So Sánh Hai Cách Viết Props**

📌 **Hai cách dưới đây đều lấy dữ liệu từ `this.props.data`, nhưng cách thứ hai không sử dụng destructuring.**

#### ✅ **Cách 1 (Có destructuring - Tối ưu, ngắn gọn):**

```jsx
render() {
  const {
    welcome,
    title,
    author: { firstName, lastName },
    date
  } = this.props.data;

  return (
    <header>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <p>{firstName} {lastName}</p>
      <small>{date}</small>
    </header>
  );
}
```

#### ❌ **Cách 2 (Không dùng destructuring - Dài dòng hơn):**

```jsx
render() {
  return (
    <header>
      <h1>{this.props.data.welcome}</h1>
      <h2>{this.props.data.title}</h2>
      <p>{this.props.data.author.firstName} {this.props.data.author.lastName}</p>
      <small>{this.props.data.date}</small>
    </header>
  );
}
```

📌 **Tóm lại:**

- Dùng destructuring giúp **code ngắn gọn, dễ đọc, dễ bảo trì**.
- Nếu `props` có nhiều cấp lồng nhau, destructuring giúp truy xuất nhanh mà không cần viết `this.props.data...` nhiều lần.

---

### **6️⃣ Tổng Kết Quan Trọng**

| **Tính năng**                     | **Class Component**                                      |
| --------------------------------- | -------------------------------------------------------- |
| Cấu trúc                          | Dùng `class` kế thừa từ `React.Component`                |
| Cách truyền dữ liệu               | Dùng `props` từ component cha truyền xuống component con |
| Cách truy xuất props              | `this.props` hoặc destructuring để viết ngắn hơn         |
| Props có thay đổi không?          | ❌ Không thể thay đổi (immutable)                        |
| Có `state` không?                 | ✅ Có thể sử dụng `this.state` để quản lý trạng thái     |
| Có lifecycle methods không?       | ✅ Có (ví dụ: `componentDidMount`, `componentDidUpdate`) |
| Gọn hơn Function Component không? | ❌ Không, thường dài hơn và phức tạp hơn                 |

---

### **🎯 Kết Luận**

- **Class Component** phù hợp khi cần quản lý **state** hoặc sử dụng **lifecycle methods**.
- **Props** giúp truyền dữ liệu từ **cha → con**, nhưng là **immutable**.
- **Destructuring giúp code gọn hơn**, nhất là khi dữ liệu có cấu trúc lồng nhau.
- **React hiện nay khuyến khích dùng Function Component + Hooks** thay vì Class Component để tối ưu hiệu suất và code ngắn gọn hơn.

🚀 **Gợi ý:** Nếu không cần `state` hay lifecycle, hãy dùng **Function Component** thay vì Class Component.
