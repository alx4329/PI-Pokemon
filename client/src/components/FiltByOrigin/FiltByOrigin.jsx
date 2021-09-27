import { getPokes, bringPokes } from "../../actions";
import { useDispatch } from "react-redux";
import './FiltByOrigin.css';

export function FiltByOrigin(){
    const dispatch =useDispatch();
    
    return(
        <div className="dropdown">
            <button className="dropbtn">Show</button>
            <div className = 'dropdown-content'>
                <button onClick= {()=> dispatch(getPokes())}>All</button>
                <button onClick= {()=> dispatch(bringPokes('api'))}>Api</button>
                <button onClick= {()=> dispatch(bringPokes('created'))}>Created</button>
            </div>

        </div>  
        )
}
export default FiltByOrigin;