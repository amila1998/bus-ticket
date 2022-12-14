import './header.css'
import logo from '../../assets/mainLogo.png'
import { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
const Header = () => {
    const gState = useContext(GlobalState)
    const [isLogged] = gState.userAPI.isLogged
    const [isAdmin] = gState.userAPI.isAdmin
    const [userPhoto] = gState.userAPI.userPhoto

    return (
        <div><nav className="navbar navbar-expand-lg fixed-top navbar-light bg-color">
            <div className="container-fluid">
                <a className="navbar-brand ms-5"  href='/'>
                    <img src={logo} alt="" width="155" height="50" />
                    {/* <h4>Sri Lanka <br />Public Transport Ticketing System</h4> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <a className="nav-link" aria-current="page " href="/">{isAdmin && 'Admin '}Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link linkColor" href="#">About Us</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link linkColor" href="#">Contact Us</a>
                            </li>
                            {
                                isLogged ? <>
                                    <li className="nav-item me-5">
                                        <a className="nav-link linkColor" href="/profile"><img className='profileGP' src={userPhoto} /></a>
                                    </li>
                                </> : <>
                                    <li className="nav-item me-5">
                                        <a className="nav-link linkColor" href="/signin">Sign in</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </nav></div>
    )
}

export default Header