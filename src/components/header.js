import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div className='header row'>
                <div className='header-title col-8'>
                    M
                </div>
                <div class="col-4">
                <div className="bellIcon"><i class="far fa-user"></i></div>
                <div className="bellIcon"><i class="far fa-bell"></i></div>
                <div class="input-group rounded searchBox">
                    <input type="search" class="form-control rounded inpt" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                    </span>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;