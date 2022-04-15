import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Nama from "./Nama";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nama: "Derryl Youri Muhammed", umur: 21 };
  }
  _ubahprofile = () => this.setState({ nama: "M.Kusen Abdullah", umur: 28 });
  _ubahprofile2 = (namabaru) => this.setState({ nama: namabaru });
  _ubahprofile3 = (umurbaru) => this.setState({ umur: umurbaru });
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Set profile</p>
          <Nama nama={this.state.nama} umur={this.state.umur}></Nama>
          <Input
            _ubahprofile={this._ubahprofile}
            _ubahprofile={this._ubahprofile2}
            _ubahprofile3={this._ubahprofile3}
          ></Input>
        </div>
      </div>
    );
  }
}
export default App;
