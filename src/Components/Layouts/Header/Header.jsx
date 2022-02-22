import './Header.css'
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>Axios - React</h1>
            <nav className='navHeader'>  
                <NavLink to="/"><button>Home</button></NavLink>             
                <NavLink to="/login"><button>Login</button></NavLink>
                <NavLink to="/register"><button>Register</button></NavLink>
                <NavLink to="/users"><button>Users</button></NavLink>
            </nav>
        </header>
    )
}