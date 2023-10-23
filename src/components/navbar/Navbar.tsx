import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav  className="">
            <ul className="bg-white border-gray-200 dark:bg-gray-900 text-white flex justify-evenly text-xl h-16 pt-3" >
                <li>
                    <Link to="news">News</Link>
                </li>
                <li>
                    <Link to="blog">Blog</Link>
                </li>
                <li>
                    <Link to="myPage">My Page</Link>
                </li>
                <li>
                    <input />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
