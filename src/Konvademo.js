import React from 'react';
import ReactDOM from 'react-dom';
import {Line, Layer, Rect, Stage, Group, Circle} from 'react-konva';

class Konvademo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    }

    this.selectCard = this.selectCard.bind(this);
  }

  selectCard() {
    console.log('wololo');
    this.setState({
       isSelected: true
    });
  }

  renderAnchors(anchors) {
    return anchors.map((anchor, index) => {
      return (
        <Circle
          key={index}
          x={anchor.x}
          y={anchor.y}
          width={10}
          height={10}
          strokeWidth={2}
          stroke={'#666'}
          fill={'#ddd'} />
      );
    });
  }


  render() {
    let circle = <Circle x={100} y={100} radius = {50} stroke = 'red' strokeWidth = {15} onClick={this.selectCard} />;
    let circle2 = <Circle x={750} y={100} radius = {50} stroke = 'red' strokeWidth = {15} onClick={this.selectCard} />;
    let circle3 = <Circle x={100} y={600} radius = {50} stroke = 'red' strokeWidth = {15} onClick={this.selectCard} />;
    let circle4 = <Circle x={750} y={600} radius = {50} stroke = 'red' strokeWidth = {15} onClick={this.selectCard} />;

    let line = <Line
          points= {[150, 100, 325, 100, 325, 300]} tension= {0} stroke = 'red'strokeWidth = {15} lineCap= 'round' lineJoin= 'round'/>
    let line2 = <Line points= {[325, 350, 100, 550]} tension= {0} stroke = 'red'strokeWidth = {15} lineCap= 'round' lineJoin= 'round'/>
    let line3 = <Line points= {[750, 150, 750, 550]} tension= {0} stroke = 'red'strokeWidth = {15} lineCap= 'round' lineJoin= 'round'/>
    let line4 = <Line points= {[713, 150, 525, 300]} tension= {0} stroke = 'red'strokeWidth = {15} lineCap= 'round' lineJoin= 'round'/>
    let line5 = <Line points= {[350, 325, 500, 325]} tension= {0} stroke = 'red'strokeWidth = {15} lineCap= 'round' lineJoin= 'round'/>

    let rect = <Rect draggable={true} x={300} y={300} width={50} height={50} stroke = 'red' strokeWidth = {15}/>
    let rect2 = <Rect draggable={true} x={500} y={300} width={50} height={50} stroke = 'red' strokeWidth = {15}/>

    return (
      <Group
        draggable={true}>
          {circle}
          {circle2}
          {circle3}
          {circle4}
          {line}
          {line2}
          {line3}
          {line4}
          {line5}
          {rect}
          {rect2}
        {this.state.isSelected ?
           this.renderAnchors([
            {x: 0, y: 0},
            {x: 120, y: 0},
            {x: 120, y: 120},
            {x: 0, y: 120}
          ])
          : null
         }
      </Group>
    );
  }
}


export default Konvademo;