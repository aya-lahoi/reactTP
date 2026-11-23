import {useState} from 'react';
export default function GestionCircuit(props){
const [rech,setrech]=useState("");
const [code,setcode]=useState("");
const[dep,setdep]=useState("");
const[arr,setarr]=useState("");
const[niv,setniv]=useState("");
const [aj,setaj]=useState(props.list_circuit);
const ajouter=(e)=>{const u={code:code,depart:dep,arrivee:arr,niveau:niv}
setaj([...aj,u])}
const rechercher=(rech==="")?aj:aj.filter(x=> x.depart === rech);
    return(
        <div>
<input type="text" onChange={(e)=>setrech(e.target.value)} />
<table border="1">
 <tr>
    <th>code</th><th>depart</th><th>arrivee</th><th>niveau</th><th>Sup</th>
 </tr>
 {rechercher.map(x=> <tr><td>{x.code}</td><td>{x.depart}</td><td>{x.arrivee}</td><td>{x.niveau}</td>
 <td><button onClick={()=>setaj(aj.filter(w=> w.code !== x.code))}>supprimer</button></td></tr>)}
</table>

code:  <br />
<input type="text" onChange={(e)=>setcode(e.target.value)}/> <br />
depart: <br />
<input type="text" onChange={(e)=>setdep(e.target.value)} /> <br />
arrivee: <br />
<input type="text" onChange={(e)=>setarr(e.target.value)} /> <br />
niveau:
<input type="radio" name="niveau" value="facile" onChange={(e)=>setniv(e.target.value)} />facile
<input type="radio" name="niveau" value="difficile" onChange={(e)=>setniv(e.target.value)} />difficile
<input type="radio" name="niveau" value="moyen" onChange={(e)=>setniv(e.target.value)}/>moyen <br />
<input type="submit" onClick={(ajouter)} /> 
        </div>
    )
}