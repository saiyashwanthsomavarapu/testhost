import React from 'react';
// import Logo from '../../assets/icons/Clienthublogo.svg';
import { useStyles } from './header.styles';

interface Props {
    heading: string;
    subHeading?: string;
} 
const Header =(props: Props) => {
    const { heading, subHeading }  = props;
    const classes = useStyles()

    return (
        <header>
            <figure className={classes.header_image}>
                <img height="55" className={classes.image}src={"Logo"} alt="" />
            </figure>
            <div className={classes.header_container}>
                <span className={classes.heading}>{heading}</span>
                <span className={classes.subHeading}>
                    {subHeading} | IRK30653
                </span>
            </div>
        </header>
    )
}
export default Header;
