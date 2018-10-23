import React from 'react';

const Footer = (props) => {
const menu = props.menu.map((item,i) => {
    return (<li key={"id-"+i+1}>
    <a href={item.link}>{item.tech}</a>
    </li>)
})

return (<footer>
    <h1>Web Technologies</h1>
    {menu}
    <p>Copyright {props.date.getFullYear()}</p>
</footer>)
}
export default Footer;