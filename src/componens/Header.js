import React,{Component} from 'react';
import './header.css'
class Header extends Component{
    render () {
        let {title, subtitle,mandatory,createdAt} = this.props;
        return (<header>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
    <h3>Mandatory:{mandatory}</h3>
    <h3>It was created in {createdAt}</h3>
</header>)
    }
};
export default Header;
