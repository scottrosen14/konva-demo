import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Konvademo from './Konvademo'
import registerServiceWorker from './registerServiceWorker';

import {Line, Layer, Rect, Stage, Group, Circle} from 'react-konva';

// Konvademo
function Board() {
    return (
      <Stage width={1800} height={1800}>
        <Layer>
            <Konvademo/>
        </Layer>
      </Stage>
    );
}

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
