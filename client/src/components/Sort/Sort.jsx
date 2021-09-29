import { useDispatch, useSelector } from "react-redux";
import { orderByAlphabet, orderByStrength } from "../../actions";
import './Sort.css'
export const options =['A-Z','Z-A','Strength Up','Strength Down']

export function Sort(){
    const dispatch = useDispatch();

    const reduxOption = useSelector(state => state.option)
    
    function handleClick(e){
        if(e.target.name==='A-Z'){
            dispatch(orderByAlphabet('A-Z'))
        } else if(e.target.name==='Z-A'){
            dispatch(orderByAlphabet('Z-A'))
        } else if(e.target.name==='SUp'){
            dispatch(orderByStrength('SUp'))
        } else {
            dispatch(orderByStrength('SDown'))
        } 
    }
    return(
        <div className ="sortBox">
            
            <div className="dropdown">
                <button className="dropbtn" >Sort By</button>
                    <div className='dropdown-content'>
                        <button className="buttonlb" name="A-Z" onClick={(e)=> handleClick(e)}>A-Z</button>
                        <button className="buttonlb" name='Z-A' onClick={(e)=> handleClick(e)}>Z-A</button>
                        <button className="buttonlb" name='SUp' onClick={(e)=> handleClick(e)}>Strength Up</button>
                        <button className="buttonlb" name='SDown' onClick={(e)=> handleClick(e)}>Strength Down</button>
                    </div>
            </div>
            {options.includes(reduxOption)?<p>{reduxOption}</p>:''}
            

        </div>
    )
}

export default(Sort)