import { NavLink} from 'react-router-dom';

const NavBar = () => {


   
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <NavLink to="/" className="text-xl font-bold">News Aggregator </NavLink>
                <div className="space-x-4">
                <NavLink to="/" className={({isActive}) => 
                    isActive ? 'text-red-500' : 'hover:underline'
                    }>Home</NavLink>
                <NavLink to="/category/technology" className={({isActive}) => 
                    isActive ? 'text-red-500' : 'hover:underline'
                    }>Technology</NavLink>
                <NavLink to="/category/sports" className={({isActive}) => 
                    isActive ? 'text-red-500' : 'hover:underline'
                    }>Sports</NavLink>
                <NavLink to="/search" className={({isActive}) => 
                    isActive ? 'text-red-500' : 'hover:underline'
                    }>Search</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;