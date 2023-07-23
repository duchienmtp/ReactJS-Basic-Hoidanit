import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logoChannel.png";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //     this.props.history.push('/todo')
    // }, 3000)
  }

  //HOC: higher order component
  render() {
    console.log(">>> check props: ", this.props);
    return (
      <>
        <div>Hello world from Homepage with Eric & Hoi Dan IT</div>
        <div>
          <img
            src={logo}
            style={{ width: "200px", height: "200px", marginTop: "20px" }}
            alt="Logo"
          />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {}
    dataRedux: state.users,
}

export default connect()(Color(Home));
