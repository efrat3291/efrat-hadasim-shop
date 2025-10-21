import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.container}>
            <img src="/images/logo.png" alt="Logo" width={120} height={40} />
            <Link href="/">Home</Link> | <Link href="/form">Register</Link>
        </header>
    );
};

export default Header;