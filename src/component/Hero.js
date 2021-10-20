import React from 'react';

function Hero({children,hero}) {
    return (
        <header className={hero}>{children}</header>
    )
}

//if I forget the defaultclassname

Hero.defaultProps={
    hero:'defaultHero'
}

export default Hero
