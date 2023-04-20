import PropTypes from 'prop-types';
import './grid.css';
// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  return (
    <div style={inlineStyleObj} className={'myGrid'}>
      {props.children}
    </div>
  );
}

Grid.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.element,
};

export default Grid;
