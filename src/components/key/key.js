export default React => props => {
  return (
    <rect style={{fill:'white',stroke:'black'}}
        x={ props.x }
        y="0"
        width="23"
        height="120"
        ry="3"
        id={ props.id } />
  );
}