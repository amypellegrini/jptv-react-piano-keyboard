export default React => props => {
  let width, height, ry;

  if (props.type === 'black') {
    width="13";
    height="80";
    ry="1";
  } else {
    width="23";
    height="120";
    ry="3";
  }

  return (
    <rect style={ { fill: props.type, stroke:'black' } }
        onMouseEnter={ props.onMouseEnter }
        x={ props.x }
        y="0"
        width={ width }
        height={ height }
        ry={ ry }
        id={ props.id } />
  );
}