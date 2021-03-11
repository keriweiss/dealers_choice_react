import React, { Component } from 'react';
import axios from 'axios';
import ColorChart from './ColorChart.jsx';
import Palette from './Palette.jsx';
import PaintInfo from './PaintInfo.jsx';
import PaletteInfo from './PaletteInfo.jsx';

const content = document.querySelector('#content');

class Main extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      swatches: [],
      paintInfo: {},
      paletteInfo: [],
      opacity: 50,
      selectedColor: {},
    };
    this.addColor = this.addColor.bind(this);
    this.colorInfo = this.colorInfo.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.resetPalette = this.resetPalette.bind(this);
    this.getPaletteInfo = this.getPaletteInfo.bind(this);
    this.changeOpacity = this.changeOpacity.bind(this);
    this.selectColor = this.selectColor.bind(this);
  }
  async componentDidMount() {
    await axios.delete('/api/palette');
    const colors = (await axios.get('/api/colors')).data;
    this.setState({
      colors,
    });
  }

  async addColor(swatch, colorImg) {
    const addTo = { colorId: swatch, img: colorImg };
    await axios.post('/api/palette', addTo);
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
    console.log('done');
  }

  async colorInfo(color) {
    await this.setState({ paintInfo: color, paletteInfo: [] });
  }

  async deleteColor(colorId) {
    await axios.delete(`/api/palette/${colorId}`);
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
  }

  async resetPalette() {
    await axios.delete('/api/palette');
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
  }

  async getPaletteInfo() {
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ paletteInfo: palette, paintInfo: {} });
  }

  async changeOpacity(value) {
    const colorId = this.state.selectedColor.id;
    await axios.put(`/api/palette/${colorId}`, { opacity: value });
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
    console.log(this.state.swatches);
  }

  async selectColor(color) {
    await this.setState({ selectedColor: color });
  }

  render() {
    let info;
    if (this.state.paintInfo.id) {
      info = <PaintInfo paintInfo={this.state.paintInfo} />;
    } else if (this.state.paletteInfo.length) {
      info = <PaletteInfo paletteInfo={this.state.paletteInfo} />;
    }
    return (
      <div id='main'>
        <ColorChart
          colors={this.state.colors}
          addColor={this.addColor}
          colorInfo={this.colorInfo}
        />
        <Palette
          swatches={this.state.swatches}
          deleteColor={this.deleteColor}
          resetPalette={this.resetPalette}
          getPaletteInfo={this.getPaletteInfo}
          opacity={this.state.opacity}
          changeOpacity={this.changeOpacity}
          selectColor={this.selectColor}
          selectedColor={this.state.selectedColor}
        />
        {info}
      </div>
    );
  }
}

export default Main;
