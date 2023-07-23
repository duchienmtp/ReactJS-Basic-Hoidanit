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

  handleDeleteUser = (user) => {
    console.log(">>> Check user deleted: ", user);
  };

  //HOC: higher order component
  render() {
    console.log(">>> check props: ", this.props);
    let listUsers = this.props.dataRedux;
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
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} <></>
                  <span onClick={() => this.handleDeleteUser(item)}>X</span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUsersRedux: () => dispatch({
        type: 'DELETE_USER',
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
