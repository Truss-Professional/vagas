import React from 'react'

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'a'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('What are your priorities: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What are your priorities:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="a">High Priority</option>
              <option value="b">Medium Priority</option>
              <option value="c">Low Priority</option>
            </select>
          </label>
          {/* <input type="submit" value="Enviar" /> */}
        </form>
      );
    }
}

export default FlavorForm