Vòng đời của một component trong ReactJS gồm các giai đoạn chính là Mounting (gắn kết), Updating (cập nhật), và Unmounting (gỡ bỏ). Mỗi giai đoạn này có các phương thức lifecycle tương ứng. Dưới đây là chi tiết về các giai đoạn và phương thức lifecycle trong các class component và hàm hook trong functional component.

### Class Components Lifecycle Methods

1. **Mounting (Gắn kết)**: Giai đoạn này xảy ra khi một instance của component được tạo ra và thêm vào DOM.
   - `constructor()`: Được gọi khi một component instance được tạo. Thường dùng để khởi tạo state và binding các phương thức.
   - `static getDerivedStateFromProps(props, state)`: Được gọi ngay trước khi render. Có thể dùng để cập nhật state dựa trên props.
   ``` jsx
   class Header extends React.Component {
   constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  // phuongw thuc  này lấy state từ props được gán
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow"/>);
- Ngay sau constructor thì state được cập nhập dự trên props, cụ thể, thẻ Header có props là favcol với giá trị nhận được là yellow thì sau khi tạo ra component thì nó sẽ cập nhập state dựa trên giá trị của props nhận vào - mặc dù mặc định là red nhưng đã được gán lại là yellow khi khởi tạo
   - `render()`: Phương thức bắt buộc phải có, trả về JSX để render lên DOM. 
   <!-- Nhận đinh cá nhân day04-->
 <!-- Nhận định day14-->
 Các component được viết dạng class hay function, khi được MOunting thì nó sẽ gọi hàm tạo - constructor, lấy ra giá trị props để cập nhập state bằng getDerivedStateFromProps
 sau đó các component này được import vào file App.js và render tại các file index.js. Tại đây thì render() sẽ chuyển các kết quả KẾT HỢP tại file App.js ( với dạng JSX) thành các phần tử React, (được BAbel chuyển đổi thành các lệnh React.createElement()) -> gắn các phần tử React thành các node DOM thật và gắn chúng vào DOM 
   - `componentDidMount()`: Được gọi ngay sau khi component được render lần đầu tiên. Thường dùng để thực hiện các side-effects như gọi API.

2. **Updating (Cập nhật)**: Giai đoạn này xảy ra khi props hoặc state của component thay đổi.
   - `static getDerivedStateFromProps(props, state)`: Được gọi mỗi khi component nhận props mới. Có thể dùng để cập nhật state dựa trên props.
   - `shouldComponentUpdate(nextProps, nextState)`: Được gọi trước khi render lại component. Có thể trả về `true` hoặc `false` để quyết định liệu component có nên render lại hay không. - đối chiếu 2 DOM ?
   - `render()`: Gọi lại khi state hoặc props thay đổi.
   - `getSnapshotBeforeUpdate(prevProps, prevState)`: Được gọi ngay trước khi output được commit vào DOM. Giá trị trả về sẽ được chuyển vào `componentDidUpdate`.
   - `componentDidUpdate(prevProps, prevState, snapshot)`: Được gọi ngay sau khi update xảy ra. Thường dùng để thực hiện các side-effects như gọi API khi nhận props mới.

3. **Unmounting (Gỡ bỏ)**: Giai đoạn này xảy ra khi component bị gỡ bỏ khỏi DOM.
   - `componentWillUnmount()`: Được gọi ngay trước khi component bị gỡ bỏ. Thường dùng để cleanup như hủy bỏ timers, listeners, etc.

### Functional Components and Hooks

Functional components sử dụng các hook để quản lý state và lifecycle.

1. **useState**: Quản lý state trong functional component.
   ```jsx
   const [count, setCount] = useState(0);
   ```

2. **useEffect**: Thực hiện các side-effects. Hook này kết hợp chức năng của `componentDidMount`, `componentDidUpdate` và `componentWillUnmount`.
   ```jsx
   useEffect(() => {
       // ComponentDidMount & ComponentDidUpdate
       console.log('Component mounted or updated');

       return () => {
           // ComponentWillUnmount
           console.log('Component will unmount');
       };
   }, [dependencies]); // dependencies là array chứa các biến state/props mà effect phụ thuộc vào.
   ```

3. **useContext**: Truy cập vào context API.
   ```jsx
   const value = useContext(MyContext);
   ```

4. **useReducer**: Quản lý state phức tạp bằng reducer.
   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState);
   ```

### Ví dụ về Class Component Lifecycle

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // hoặc cập nhật state dựa trên props
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true; // hoặc false để ngăn cập nhật
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null; // hoặc trả về giá trị nào đó để sử dụng trong componentDidUpdate
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('Render');
        return <div>{this.state.count}</div>;
    }
}
```

### Ví dụ về Functional Component với Hooks

```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or updated');

        return () => {
            console.log('Component will unmount');
        };
    }, [count]); // Dependency array

    return <div>{count}</div>;
};

export default MyComponent;
```

Vòng đời của component trong React giúp quản lý và điều khiển các giai đoạn khác nhau của component từ khi nó được tạo ra cho đến khi nó bị gỡ bỏ. Hiểu rõ các phương thức lifecycle giúp tối ưu hóa ứng dụng và quản lý side-effects một cách hiệu quả.
