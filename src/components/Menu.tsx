import { Link } from 'react-router';
const Menu=()=>{
    return(
        <>
        
        <div>The Menu:</div>
        <nav>
        <Link to='/'>Home   </Link> |
        <Link to='/login'>login   </Link> |
        <Link to='/update'>update   </Link> |
        <Link to='/username'>usrename   </Link>                  
        </nav>
        </>
    )
}
export default Menu;