import React from "react";
import { useEffect } from "react";

const CountDown = (props) => {
  const [count, setCount] = React.useState(10);
  useEffect(() => {
    if (count === 0) {
      props.setIsDisableBtn(true);
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count}</div>;
};

// class CountDown extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 30,
//     };

//     this.timer = null; // Initialize the timer variable
//     console.log("Run constructor");
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("Run setInterval");
//       let currentCount = this.state.count;
//       this.setState({ count: currentCount - 1 });
//     }, 1000);
//     console.log("Run componentDidMount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count !== prevState.count) {
//       if (this.state.count === 0) {
//         if (this.timer) clearInterval(this.timer);
//       }
//     }
//     console.log("Run componentDidUpdate");
//   }

//   render() {
//     return (
//       <div>
//         {this.state.count}
//         {console.log("Run render")}
//       </div>
//     );
//   }
// }

export default CountDown;
