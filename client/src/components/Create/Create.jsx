import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postNewPoke } from "../../actions";
import "./Create.css"

export function Create(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTypes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const reduxTypes = useSelector(state=> state.types)

    const typesId = reduxTypes.map((item)=>item.id)
    const maxId = Math.max(...typesId);
    
    const [typeToAdd, setTypeToAdd] = useState('');
    //id, name, life, strength, defense, speed, height, weight
    const [state,setState]= useState({
        name:'',
        life:'',
        strength:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        maxId:maxId,
        types:[],
        newTypes:[],
    })
    
    
    
   
    
    // eslint-disable-next-line no-unused-vars
    const [checkedTypes, setCheckedTypes] = useState([]);

    const handleTypesOnCheck = (typeId, position) =>{
        if(checkedTypes[position]===true){
            checkedTypes[position] =! checkedTypes[position]
            let nuevoArr = state.types.filter((item)=> item !==typeId)
            setState({
                ...state,
                types: nuevoArr
            })
        } else {
            checkedTypes[position] =! checkedTypes[position]
            setState({
                ...state,
                types: [...state.types,typeId]
            })

        }
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        
      }

    function addNewType(type){
        setState({
            ...state,
            newTypes: [...state.newTypes,type]
        })
        
        alert("Type Added!")
    }

    async function handleSubmit(event){
        event.preventDefault();
        dispatch(postNewPoke(state)).then(()=> alert("Pokemon Created!"))
    }

    return (
        <div className="formContainer">
            <div className="form">
                <h2>Create Your Pokemon</h2>
                <form className="items" onSubmit={(e)=> {handleSubmit(e)} }>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input className="input-container" type="text" placeholder="Your Pokemon" name = "name" value = {state.name} onChange={(e)=> handleChange(e) }></input>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="form-group">
                                    <label>Life:</label>
                                    <input className="input-container" type="number" name = "life" placeholder="How many years?" value = {state.life} onChange={(e)=> handleChange(e) }></input>
                                </div>
                            </div>
                        </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="form-group">
                                <label>Strength:</label>
                                <input className="input-container" type="number" name = "strength" placeholder="How many years?" value = {state.strength} onChange={(e)=> handleChange(e) }></input>
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className="form-group">
                                <label>Defense:</label>
                                <input className="input-container" type="number" name = "defense" placeholder="How many years?" value = {state.defense} onChange={(e)=> handleChange(e) }></input>

                            </div>
                        </div>
                    </div>
        
        
                    <div className='row'>                    
                        <div className='col'>
                            <div className="form-group">
                                <label>Speed:</label>
                                <input className="input-container" type="number" name = "speed" placeholder="How many years?" value = {state.speed} onChange={(e)=> handleChange(e) }></input>
                            </div>
                        </div>

                        <div className='col'>
                            <div className="form-group">
                                <label>Height:</label>
                                <input className="input-container" type="number" name = "height" placeholder="How many years?" value = {state.height} onChange={(e)=> handleChange(e) }></input>

                            </div>
                        </div>
                    </div>
        

                    <div className="row">
                        <div className='col'>
                            <div className="form-group">
                                <label>Weight:</label>
                                <input className="input-container" type="number" name = "weight" placeholder="How many years?" value = {state.weight} onChange={(e)=> handleChange(e) }></input>

                            </div>
                        </div>
                            <div className="col">
                                <div className="form-group" >
                                    <label>New Type:</label>
                                    <input className="input-container" type="text" name = "typeToAdd" value = {typeToAdd} onChange={(e)=> setTypeToAdd(e.target.value) }></input>
                                    <button className ="add" onClick = {(e)=>{
                                    e.preventDefault();
                                    addNewType(typeToAdd)}}>Add</button>
                                </div>
                            </div>

                    </div>    

                    <div className="types" >                        
                            <label>Types:</label>
                            <div className="checkli">
                                {
                                reduxTypes.map((item,index)=>{
                                    return(
                                    <li key={index}>
                                        <input
                                        type="checkbox"
                                        id={item.id}
                                        name={item.name}
                                        value={item.name}
                                        onChange = {()=>handleTypesOnCheck(item.id, index)}
                                        ></input>
                                        {item.name}
                                    </li>
                                    )
                                })
                                }
                            </div>
                        

                        

                        
                        
                    </div>
                            <button className="submit" type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}
