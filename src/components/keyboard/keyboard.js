import createKey from '../key/key';

export default React => () => {
  const Key = createKey(React);

  const keys = [...Array(5)].map((value, index) => {
    let id = 'a0';

    if (index === 1) {
      id = 'b0';
    } else if (index === 2) {
      id = 'c1';
    }

    return (
      <Key key={index}
        id = { id }
        x={ index * '23' } />
    );
  });

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="300"
        height="300">
        { keys }
      </svg>
    </div>
  );
}
