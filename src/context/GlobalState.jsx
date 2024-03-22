import React,{createContext,useReducer} from "react";
//import AppReducer from "./AppReducer";
//initial state
const AppReducer = (state , action)=>{
    switch(action.type){
        
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
        return {
            ...state , 
            transactions:[action.payload, ...state.transactions]
        }
        default:
            return state;
    }
}
const initialState = {
    transactions:[]
}
//Provider context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = (({children})=>{
    const [ state , dispatch] = useReducer(AppReducer , initialState);

//Actions
function deleteTransactions(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload : id
    });
}
function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload : transaction,
       
    });
}

    return(<GlobalContext.Provider value={{transactions:state.transactions,deleteTransactions,addTransaction}}>
        {children}
    </GlobalContext.Provider>)
})