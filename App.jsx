import Header from "./Header.jsx";
import {list_circuit} from "./data.jsx";
import GestionCircuit from "./GestionCircuit.jsx";
export default function App(){
    return(
        <div>
        <Header titre="Liste des circuits a velo"/>
        <GestionCircuit list_circuit={list_circuit}/>
        </div>
    )
}