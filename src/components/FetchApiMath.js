import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../styles/index.css';


class FetchApiMath extends Component {
 constructor(props) {
    super(props);
    this.title = props.title;
    this.state = {
      number: '',
      input: ''
    };
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    fetch(`http://numbersapi.com/${this.state.input}/math?json`)
      .then(results => results.json())
      .then(res => {
        this.setState({ number: res });
        console.log(this.state.number);
      })
      .catch('ERR');
    event.preventDefault();
  };


  render() {
    return (
      <Grid>
        <Row className="show-grid">
            <div className="data">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <p className="paragraph">Do you want to know all the facts about your wanted number in math sphere(ex. 5 is the number of platonic solids)?<br />Let's input it in the form<strong> ONLY NUMBER!</strong></p>
            <label>
          <input
                className="form-control"
                type="number"
                required
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
        <Col xs={6} md={4} className="cl1">
              <h3>MATH</h3>
              <br />
              5 is the number of platonic solids.

      </Col>
            <Col xs={6} md={4} className="cl">
              <h3>TRIVIA</h3>
              <br />
              <p>42 is the number of little squares forming the left side trail of Microsoft's Windows 98 logo.</p>
            </Col>
        {this.state.number === '' ? (<p></p>) : ( 
        <div className="alert alert-success">
          <h4 className="alert-heading">Well done!</h4>
          <ul>
           {this.state.number.found === true ? (<li><h4>Found:</h4>True</li>) : (<li><h4>Found:</h4>False</li>) }<br />
            <li><h4>Number</h4>{this.state.number.number}</li><br />
            <li><h4>Type</h4>{this.state.number.type} </li><br />
          <li><h4>Data</h4>{this.state.number.text} </li>
          </ul>
        </div>
        )
        }
      </div>
      <Grid>
            <Row >

              <Col xs={6} md={4} className="cl1">
                <h3>DATE</h3>
                <br />
                <p>March 22nd is the day in 1894 that the first playoff game for the Stanley Cup starts.</p>
              </Col>
              <Col xs={6} md={4} className="cl">
                <h3>Year</h3>
                <br />
                <p>671 is the that Silla seizes control of the former Baekje capital of Sabi from the Tang Protectorate General to Pacify the East..</p>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Grid>
    );
  }
}

export default FetchApiMath;