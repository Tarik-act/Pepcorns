import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './card.styles.scss';

const Card = ({ price, terminal, pen }) => {
  return (
    <div className='card'>
      <h1>₹ {price}</h1>
      <p>Invest</p>
      <div className='card-flex'>
        <div>
          <i className='fas fa-terminal'></i>
        </div>
        <div>
          <span>{terminal}</span>
        </div>
      </div>
      <div className='card-flex'>
        <div>
          <i className='fas fa-pen-fancy'></i>
        </div>
        <div>
          <span>{pen}</span>
        </div>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.base}>Invest</Button>
    </div>
  );
};

export default Card;
