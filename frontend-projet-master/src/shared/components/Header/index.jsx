import logo from '../../../assets/logo.png';
import { LogIn, Home, Phone, Users } from 'react-feather'; // Assurez-vous que LogIn est importé avec la bonne casse

const navigationLinks = [
    {
        label: 'Home',
        url: '/',
        icon: <Home />,
    }, {
        label: 'About us?',
        url: '/Nous',
        icon: <Users />,
    }, {
        label: 'Contact us',
        url: '/Contact',
        icon: <Phone />,
    },
    {
        label: 'Log in',
        url: '/Login',
        icon: <LogIn />, // Utilisez LogIn avec la casse correcte
    }
];

function Header() {
    return (
        <header>
            <nav className="p-3 m-1 flex flex-row justify-between max-w-8xl mx-auto">
                <a className="navbar-brand">
                    <img src={logo} alt="logo" className="h-10" />
                </a>
                <ul className="navbar-nav text-white flex flex-row gap-3">
                    {
                        navigationLinks.map((link, index) => (
                            <li className="nav-item px-3 py-1 bg-slate-700 flex items-center rounded-lg" key={index}>
                                <a className="nav-link flex gap-2" href={link.url}>
                                    {link.icon}
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;