import Button from "../button/button.component";

import './card-dropdown.styles.scss';


const CardDropdown= () => {
    return (
      <div className="card-dropdown-container">
          <div className="card-items"></div>
          <Button>GO TO CHECKOUT</Button>
      </div>
    );
}

export default CardDropdown;
