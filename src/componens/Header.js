import React, {Component} from 'react';

class Header extends Component {
  render() {
    let {
      title,
      subtitle,
      createdAt,
      changeNightMode,
      makeFontBig,
      makeFontSmall,
      changeColor
    } = this.props;
    return (
      <header>
        <button onClick={changeNightMode}>Night Mode</button>
        <button onClick={makeFontBig}>
          <i className="fas fa-font big-font" />
        </button>
        <button onClick={makeFontSmall}>
          <i className="fas fa-font small-font" />
        </button>
        <button onClick={changeColor}>Change Color</button>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h3>It was created in {createdAt}</h3>
      </header>
    );
  }
}
export default Header;
