import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [ {basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img 
                    src="data:image/png;base64,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"
                    className="header__logo"
                    alt="amazon-logo"
                />
            </Link>
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLine1">
                            {user? 'Hello ' + user.email : 'Hello Guest'}
                        </span>
                        <span className="header__optionLine2">
                            {user? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLine1">
                            Returns
                        </span>
                        <span className="header__optionLine2">
                            & Orders
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLine1">
                        Your 
                    </span>
                    <span className="header__optionLine2">
                        Prime
                    </span>
                </div> 
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
    <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
