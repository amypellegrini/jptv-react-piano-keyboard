import createKey from '../key/key';
import keysData from './keysData';

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
    <div className="jptv-keyboard-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1197"
        height="120">
        { keys }
      </svg>
    </div>
  );
}
