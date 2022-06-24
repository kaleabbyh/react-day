import React, { useState } from "react";

function Home() {
  const [name, setName] = useState([]);
  const additem = () => {
    setName([name]);
  };

  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <p>first name-{name.firstname}</p>
      <p>last name-{name.lastname}</p>
    </form>
  );
}

export default Home;

// const [name, setName] = useState({ firstname: "", lastname: "" });
//   return (
//     <form>
//       <input
//         type="text"
//         value={name.firstname}
//         onChange={(e) => setName({ ...name, firstname: e.target.value })}
//       />
//       <input
//         type="text"
//         value={name.lastname}
//         onChange={(e) => setName({ ...name, lastname: e.target.value })}
//       />
//       <p>first name-{name.firstname}</p>
//       <p>last name-{name.lastname}</p>
//     </form>

// import React, { Component } from "react";
// import UpdatedComponent from "./counter";
// class Home extends Component {
//   render() {
//     // const { count, incrementCount } = this.props;
//     return (
//       <div>
//         <button onClick={this.props.incrementCount}>
//           {this.props.name} clicked {this.props.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default UpdatedComponent(Home);

// constructor(props) {
//   super(props);

//   this.state = { username: "" };
// }
// handlechange = (event) => {
//   this.setState({
//     username: event.target.value,
//   });
// };

// submithandler = (event) => {
//   alert(`${this.state.username}  is submitted`);
// };

// render() {
//   const { username } = this.state;
//   return (
//     <form onSubmit={this.submithandler}>
//       <div>
//         <label>name</label>
//         <br />
//         <input type="text" value={username} onChange={this.handlechange} />
//         {/* <button type="submit">submit</button> */}
//       </div>
//     </form>
//   );
// }
// }

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "dad",
//     };
//   }
//   clickhandler = () => {
//     alert(`hello ${this.state.message}`);
//   };
//   render() {
//     const names = [1, 2, 3];
//     return (
//       <div>
//         {names.map((name) => {
//           return name + " ";
//         })}
//         {/* <Header greetHandler={this.clickhandler} /> */}
//       </div>
//     );
//   }
// }
// export default Home;

// increment() {
//   // this.setState(
//   //   {
//   //     count: this.state.count + 1,
//   //   },
//   //   () => {
//   //     console.log("callback value " + this.state.count);
//   //   }
//   // );

//   this.setState((prev) => ({
//     count: prev.count + 1,
//   }));
// }
// incrementfive() {
//   this.increment();
//   this.increment();
//   this.increment();
//   this.increment();
//   this.increment();
// }

// clickhandler = () => {
//   this.setState({
//     message: "hello",
//   });
// };
