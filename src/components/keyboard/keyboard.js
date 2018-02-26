import './keyboard.css';

import createKey from '../key/key';
import keysData from './keysData';
import createNoteDisplay from '../noteDisplay/noteDisplay';

export default React => {
  class Keyboard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        displayNote: ''
      }
    }

    onSlideBoxDrag(event) {
      const x = event.clientX;
      const box = event.target;
      console.log(event.clientX);
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
              viewBox="0 0 1197 120">
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
              onDrag={ this.onSlideBoxDrag }>
            </div>
          </div>
        </div>
      );
    }
  }

  return Keyboard;
}
