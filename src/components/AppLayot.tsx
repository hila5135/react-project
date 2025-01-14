import { Outlet } from 'react-router'
import Menu from "./menu"
import NavBar from "./NavBar"

const AppLayot = () => {

    return (<>
            <div>app layout
            {/* <Outlet /> */}           
                <div>
                 <Menu/>
                 <Outlet/>
                </div>
            </div>
    </>)
}

export default AppLayot