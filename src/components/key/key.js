export default React => props => {
  let width, height, ry, color;

  if (props.color === 'black') {
    width="13";
    height="80";
    ry="1";
    color = props.highlight ? '#496f91' : props.color;
  } else {
    width="23";
    height="120";
    ry="3";
    color = props.highlight ? '#a0c6e8' : props.color;
  }

  return (
    <rect style={ { fill: color, stroke:'black' } }
        onMouseEnter={ props.onMouseEnter }
        x={ props.x }
        y="0"
        width={ width }
        height={ height }
        ry={ ry }
        id={ props.id } />
  );
}