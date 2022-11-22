import {Link} from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link to='/encrypt' className="btn btn-ghost normal-case text-xl">AES</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal">
                    <li><Link to='/encrypt'>ENCRYPT</Link></li>
                    <li><Link to='/decrypt'>DECRYPT</Link></li>
                </ul>
            </div>
        </div>
    )
}
