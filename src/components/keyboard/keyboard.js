import createKey from '../key/key';
import keysData from './keysData';
import './keyboard.css';

export default React => () => {
  const Key = createKey(React);

  const keys = keysData.map((value, index) => {
    const type = value.id.length === 2 ? 'white' : 'black';

    return (
      <Key key={ index }
        type = { type }
        id = { value.id }
        x={ value.x } />
    );
  });

  return (
    <div className="jptv-keyboard">
      <div className="jptv-keyboard-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="2080"
          height="auto"
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
          height="auto"
          viewBox="0 0 1197 120">
          { keys }
        </svg>
        <div className="slide-box">
        </div>
      </div>
    </div>
  );
}
