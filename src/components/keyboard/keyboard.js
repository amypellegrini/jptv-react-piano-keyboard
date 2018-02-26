import './keyboard.css';

import createKey from '../key/key';
import keysData from './keysData';
import createNoteDisplay from '../noteDisplay/noteDisplay';

export default React => {
  class Keyboard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        displayNote: '',
        offsetX: '50%',
        viewBoxOffset: 50 * 11.97
      }
    }

    onKeyMouseEnter(event) {
      this.setState({
        displayNote: event.target.id
      });
    }

    createKeys() {
      const Key = createKey(React);
      
      const keys = keysData.map((value, index) => {
        const type = value.id.length === 2 ? 'white' : 'black';
      
        return (
          <Key key={ index }
            onMouseEnter={ this.onKeyMouseEnter.bind(this) }
            type = { type }
            id = { value.id }
            x={ value.x } />
        );
      });

      return keys;
    }

    onChange(event) {
      let percent = event.target.value;

      if (percent >= 80) {
        percent = 80.5;
        event.preventDefault();
      }

      if (percent <= 20) {
        percent = 19.5;
        event.preventDefault();
      }

      const viewBoxOffset = Math.floor(parseInt(percent, 10) * 11.97) - 227;

      this.setState({
        offsetX: percent + '%',
        viewBoxOffset: viewBoxOffset
      });
    }

    render() {
      const keys = this.createKeys();
      const NoteDisplay = createNoteDisplay(React);

      return (
        <div className="jptv-keyboard">
          <NoteDisplay note={ this.state.displayNote } />
          <div className="jptv-keyboard-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="2080"
              height="209"
              viewBox={ this.state.viewBoxOffset + " 0 1197 120" }>
              { keys }
            </svg>
          </div>
          <div className="jptv-small-keyboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800"
              height="81"
              viewBox="0 0 1197 120">
              { keys }
            </svg>
            <div draggable="true"
              className="slide-box"
              style={ { left: this.state.offsetX } }>
            </div>
            <input type="range" width="800" onChange={ this.onChange.bind(this) } />
          </div>
        </div>
      );
    }
  }

  return Keyboard;
}
