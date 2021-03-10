import React, { Component } from 'react';
import axios from 'axios';
import ColorChart from './ColorChart.jsx';
import Palette from './Palette.jsx';
import PaintInfo from './PaintInfo.jsx';
import { createPortal } from 'react-dom';

const content = document.querySelector('#content');

class Main extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      swatches: [],
      paintInfo: {},
    };
    this.addColor = this.addColor.bind(this);
    this.colorInfo = this.colorInfo.bind(this);
  }
  async componentDidMount() {
    const colors = (await axios.get('/api/colors')).data;
    this.setState({
      colors,
    });
  }

  async addColor(swatch, colorImg) {
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

  async colorInfo(color) {
    await this.setState({ paintInfo: color });
    console.log(this.state.paintInfo);
  }

  render() {
    return (
      <div id='main'>
        <ColorChart
          colors={this.state.colors}
          addColor={this.addColor}
          colorInfo={this.colorInfo}
        />
        <Palette swatches={this.state.swatches} />
        {this.state.paintInfo.id ? (
          <PaintInfo paintInfo={this.state.paintInfo} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Main;
