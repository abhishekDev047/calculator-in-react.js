import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Basic extends React.Component{
  constructor(props){
    super(props);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state={
      result: "",
      value1: "",
      value2: ""
    };
  }
  handlePlus(){
    let a = Number(this.state.value1);
    let b = Number(this.state.value2 );
    let plus = a+b;
    this.setState({
      result: plus
    })
  };
  handleMinus(){
    let a = Number(this.state.value1);
    let b = Number(this.state.value2 );
    let minus = a-b;
    this.setState({
      result: minus
    })
  };
  handleMultiply(){
    let a = Number(this.state.value1);
    let b = Number(this.state.value2 );
    let multiply = a*b;
    this.setState({
      result: multiply
    })
  };
  handleDivide(){
    let a = Number(this.state.value1);
    let b = Number(this.state.value2 );
    let divide = a/b;
    this.setState({
      result: divide
    })
  };
  handleChange1(event){
    this.setState({
      value1: event.target.value
    });
  };
  handleChange2(event){
    this.setState({
      value2: event.target.value
    });

  };
  render(){
  return(
    <div className="container">
    <p className="container">
    <h1 className="heading1">Javascript Calculator</h1>
    </p>
    <div className="container2">
        <p>
            <input type="number" value={this.state.value1} onChange={this.handleChange1} />
            <input type="number" value={this.state.value2} onChange={this.handleChange2} />
        </p>
        <p>
            <button className="btn" onClick={this.handlePlus}>+</button>
            <button className="btn" onClick={this.handleMinus}>-</button>
            <button className="btn" onClick={this.handleMultiply}>*</button>
            <button className="btn" onClick={this.handleDivide}>/</button>
        </p>

        <p>
        <h3>Here is your Result</h3>
        <span id="rslt" className="result">{this.state.result}</span>
        </p>
    </div>
  </div>
  )};
};

class Advance extends React.Component{
  constructor(props){
    super(props);
    this.handle2 = this.handle2.bind(this);
    this.handle3 = this.handle3.bind(this);
    this.handleChange23 = this.handleChange23.bind(this);
    this.state = {
      result2: "",
      value: ""
    };
  };

    handle2(){
      let a = Number(this.state.value);
      let double= a**2
      this.setState({
        result2: double
      })
    };
    handle3(){
      let a = Number(this.state.value);
      let triple= a**3
      this.setState({
        result2: triple
      })
    };
    handleChange23(event){
      this.setState({
        value: event.target.value
      })
    };
  render(){
    return(
      <div className="container">
      <p>
          <h2>Some Extra Functions</h2>
      </p>
      <p>
        <input type="number" value={this.state.value} onChange={this.handleChange23} />
      </p>
      <p>
          <button className="btn" onClick={this.handle2}>a <sup>2</sup></button>
          <button className="btn" onClick={this.handle3}>a <sup>3</sup></button>
      </p>
      <p>
          <h2>Here is your result</h2>
          <span className="result" id="rslt2">{this.state.result2}</span>
      </p>
              <footer className="signature">This site is created by Abhishek Kumar. Check out my IG <a href="https://www.instagram.com/ab_hish_ek_1/">here</a></footer>
  </div>
    )
  }
};
class Calculator extends React.Component{
  render(){
    return(
      <div>
        <Basic />
        <Advance />
      </div>
    )
  };
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
