import React from 'react';
import {ComponentRouter, Url, getDefault} from '../..';
import styles from './Chart.css';


const Bar = React.createClass({
  shouldComponentUpdate() {
    return false;
  },


  render() {
    return <h3>Bar</h3>;
  }
});


const Pie = React.createClass({
  shouldComponentUpdate() {
    return false;
  },


  render() {
    return <h3>Pie</h3>;
  }
});


const Content = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  shouldComponentUpdate({componentRouter: {Component}}) {
    return Component !== this.props.componentRouter.Component;
  },


  render() {
    const {Component} = this.props.componentRouter;

    return <Component />;
  }
});


const Chart = React.createClass({
  propTypes: {
    height: React.PropTypes.number
  },


  shouldComponentUpdate({height}) {
    return height !== this.props.height;
  },


  render() {
    const {height} = this.props;

    return (
      <div style={{height}} className={styles.chart}>
        <h2>Chart</h2>
        <Url query={{chart: 'bar'}}>Bar</Url>
        &nbsp;|&nbsp;
        <Url query={{chart: 'pie'}}>Pie</Url>

        <ComponentRouter namespace="chart" config={{
          [getDefault()]: 'bar',
          bar: Bar,
          pie: Pie
        }}>
          <Content />
        </ComponentRouter>

      </div>
    );
  }
});


export default Chart;
