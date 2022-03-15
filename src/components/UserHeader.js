import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    // const { user } = this.props;
    const { user } = this.props;
    console.log("🚀 ~ UserHeader ~ render ~ user", user);

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("🚀 ~ mapStateToProps ~ ownProps", ownProps);
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
