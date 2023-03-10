import React from 'react';

const Header = (props) => {
    const { firstName, lastName } = props;
    return (
        <div>
            <h1>
                My name is {firstName} {lastName}
            </h1>
        </div>
    );
}
export default Header;