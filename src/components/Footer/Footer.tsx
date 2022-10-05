import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { LINKS } from "./Footer.contant";
import { useStyles } from "./Footer.styles";

const Footer = () => {
    const classes = useStyles();
    const data = [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
    ]
    return (
        <Grid id='footer' className={classes.footer} container>
            <Grid container xs={12} md={12} style={{ border: '1px solid black', padding: '5px 15% 5px 15%' }}>
                {data.map((item, id) => (
                    <React.Fragment key={id}>
                        <Grid className={classes.links} id='links' item sx={{ margin: '15px 0' }}>
                            {item}
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
            <Grid container xs={12} md={12} className={classes.listLinks} style={{ border: '1px solid black' }}>
                {LINKS.map((item, id) => (
                    <React.Fragment key={id}>
                        <Grid className={classes.links} id='links' item>
                            <Link className={classes.linkText} href={item.path} underline="none" target='_blank'>{item.lable}</Link>
                        </Grid>
                        {item?.sperator && <span>|</span>}
                    </React.Fragment>
                ))}
                <Grid xs={12} md={12} id='copyright' item>
                    <Typography>© {new Date().getFullYear()} Capital Group. All rights reserved.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;


