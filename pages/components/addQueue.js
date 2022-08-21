import React from "react";
import styles from '../../styles/Home.module.css'

import { connect } from "react-redux";

class AddQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddQueue = () => {
    // this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className={styles.addQueue}>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleAddQueue}>
          Add Queue
        </button>
      </div>
    );
  }
}

// export default connect(
//   null,
//   { addTodo }
// )(AddQueue);
export default AddQueue;
