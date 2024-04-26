// Header.js
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, CssBaseline, Grid, Typography, Toolbar } from "@mui/material";
import { headerList} from '../../utils/constant'
import Reno from "../../assets/reno.jpeg";
import "./header.scss";

function Header() {
    const navigate = useNavigate()
    const handlerClick = e => {
        e.preventDefault();
        navigate('/');

    }
  return (
    <>
      <CssBaseline />
      <AppBar position="static" className="headerContainer">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid xs={2} item className="leftContainer">
              <div className="logo" onClick={handlerClick}>
                <img alt="no image" aria-hidden id="jassRenoLogo" src={Reno} />
              </div>
            </Grid>
            <Grid xs={8} item className="rightContainer">
              <Grid item className="subRight">
                {headerList.map((val) => {
                  return (
                    <Fragment key={val.key}>
                      <span className="labelSpan">
                        <Link tabIndex={-1} to={val.route}>
                          <Typography>{val.key}</Typography>
                        </Link>
                      </span>
                    </Fragment>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
