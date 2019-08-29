import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import { auth } from "../../firebase/firebase.utilis";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  TitleContainer
} from "./header.styles";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <TitleContainer to="/">
        <h2>Crown Clothing</h2>
      </TitleContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/login">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProp)(Header);
