import React, {Component} from 'react';
import logo from './logo.svg';

class App extends Component {
  
constructor(props){
super(props);

this.state = {
  num : '',
  x : ''
}

this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


updateInput(event){
  this.setState({num : event.target.value})
}


handleSubmit(){
console.log('Your input value is: ' + this.state.num)
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= this.state.num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
this.setState({x : n1})

}

  render() {
    return (
      <div className="App">
      <p>Podaj wartość cakowita K aby obliczyc K-ty element: </p>
       <input type="text" onChange={this.updateInput}></input>
       <input value="Oblicz" type="submit" onClick={this.handleSubmit} ></input>
       <p>K-ty element: {this.state.x}</p>
    <img src={logo} className="App-logo" alt="logo" />

      </div>

    );
  }
}
export default App;