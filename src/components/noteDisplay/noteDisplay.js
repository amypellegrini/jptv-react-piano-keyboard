import './note-display.css';

export default React => props => {
  return (
    <div className="jptv-keyboard-note-display">
      <h4>{ props.note }</h4>
    </div>
  );
}
