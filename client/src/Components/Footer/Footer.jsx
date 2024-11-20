import React, { useContext } from "react";
import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../UI";
import { sellerAuthContext, userAuthContext } from "../../Contexts";

const Footer = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { isSellerAuthenticated } = useContext(sellerAuthContext);
  const { isUserAuthenticated } = useContext(userAuthContext);

  const authenticated = isSellerAuthenticated || isUserAuthenticated;

  return (
    <>
      <div className={classes.footer_section}>
        <div className={classes.footer_top}>
          <div className={classes.footer_column_logo}>
            {/* <img src={""} alt="logo" className={classes.footer_logo} /> */}
            <Logo />
            <h4 className={classes.text}>ECWS</h4>
            <h4 className={classes.text}>Shopping is fun!</h4>
          </div>
          <div className={classes.footer_column}>
            <h2 className={classes.content_top}>Links</h2>

            <NavLink to="/" className={classes.links}>
              Home
            </NavLink>
            <NavLink to="/explore" className={classes.links}>
              Explore
            </NavLink>
            <NavLink to="/verifynft" className={classes.links}>
              Verify NFT
            </NavLink>
            {authenticated && (
              <>
                <NavLink to="/cart" className={classes.links}>
                  Cart
                </NavLink>
                <NavLink
                  to={
                    isSellerAuthenticated
                      ? "/retailer/dashboard"
                      : "/user/dashboard"
                  }
                  className={classes.links}
                >
                  Profile
                </NavLink>
              </>
            )}
            {!authenticated && (
              <>
                <NavLink to="/login" className={classes.links}>
                  Login
                </NavLink>
                <NavLink to="/signup" className={classes.links}>
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
          <div className={classes.footer_column}>
            <h2 className={classes.content_top}>Categories</h2>

            <NavLink to="/" className={classes.links}>
              Sneakers
            </NavLink>
            <NavLink to="/" className={classes.links}>
              Tshirts
            </NavLink>
            <NavLink to="/" className={classes.links}>
              Hoddies
            </NavLink>
            <NavLink to="/" className={classes.links}>
              Bags
            </NavLink>
          </div>
        </div>
        <div className={classes.footer_bottom}>
          <h3 className={classes.copyright}>
            <span className={classes.copyright_symbol}> © </span> 2024 by
            E.C.W.S, Inc
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
