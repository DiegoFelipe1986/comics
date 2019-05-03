import React, {Component} from 'react';
import Header from './components/Header';
import Comics from './components/Comics';

class App extends Component {

  comicNum:Number = 0;

  state = {
    comics: []
  }

  componentDidMount(max, min) {
    min = 100;
    max = 999;
    this.comicNum = this.randomNumber(max, min);
    this.getComics(this.comicNum);
  }
  
  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  addCont = (comicNum) => {
    this.comicNum = this.comicNum +1;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url = 'https://xkcd.com/' + this.comicNum + '/info.0.json';
    fetch(proxyurl + url).then(res => {
      return res.json();
    })
      .then(comics => {
        this.setState({
          comics
        })
      })
  }

  disCont = (comicNum) => {
    this.comicNum = this.comicNum - 1;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url = 'https://xkcd.com/' + this.comicNum + '/info.0.json';

    fetch(proxyurl + url).then(res => {
      return res.json();
    })
      .then(comics => {
        this.setState({
          comics
        })
      })
  }

  getComics = (comicNum) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url = 'https://xkcd.com/' + this.comicNum + '/info.0.json';
   
    fetch(proxyurl + url).then(res => {
      return res.json();
    })
    .then(comics => {
      this.setState({
        comics
      })
    })
  }

  getComicsRan = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Header
          title = 'Comics'
          comics = {this.state.comics}
        />
        <div className="container">
          <Comics
            comics={this.state.comics}
          />
        </div>
        <div className="container center sepTop">
          <a onClick={this.disCont} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">exposure_neg_1</i></a>
          <a onClick={this.getComicsRan} className="btn-floating btn-large waves-effect waves-light amber darken-3"><i className="material-icons">location_searching</i></a>
          <a onClick={this.addCont} className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">exposure_plus_1</i></a>
        </div>
      </div>
    );
  }
}

export default App;
