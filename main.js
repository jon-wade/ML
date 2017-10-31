import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'isomorphic-fetch';
import './scss/styles.scss';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    }
  }

  renderData() {
    if (this.state.data) {
      return (
        <div>
          <p>{this.state.data.Field1}</p>
          <p>{this.state.data.Field2}</p>
          <p>{this.state.data.Field3}</p>
        </div>
      );
    }
    else return <div>Data loading</div>;
  }

  getData() {
    Fetch('/get-data')
      .then(res => res.json())
      .then(json => this.setState({
        data: json
      }))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        Hello world
        {this.getData()}
        {this.renderData()}
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));