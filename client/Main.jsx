import React, { Component } from 'react';
import axios from 'axios';
import ColorChart from './ColorChart.jsx';
import Palette from './Palette.jsx';

const content = document.querySelector('#content');

class Main extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      swatches: [],
    };
    this.addColor = this.addColor.bind(this);
  }
  async componentDidMount() {
    const colors = (await axios.get('/api/colors')).data;
    this.setState({
      colors,
    });
  }

  async addColor(swatch, colorImg) {
    console.log(this.state.swatches);

    try {
      //   const palette = (await axios.get('/api/palette')).data;
      //   if (palette.length >= 3) {
      //     alert('Too many!');
      //   } else {
      const addTo = { colorId: swatch, img: colorImg };
      await axios.post('/api/palette', addTo);
      const palette = (await axios.get('/api/palette/imgs')).data;
      this.setState({ swatches: [...this.state.swatches, colorImg] });
      //   }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ColorChart colors={this.state.colors} addColor={this.addColor} />
        <Palette swatches={this.state.swatches} />
      </div>
    );
  }
}

export default Main;
