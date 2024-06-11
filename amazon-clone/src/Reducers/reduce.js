export const initialState={
    basket:[],
    user:null,
    
};

// selector

// export const getBasketTotal=(basket)=>{
//     basket?.reduce((amount,item)=>
//         item.price + amount,0);
// }

// REDUCER IS ONE THAT LSITENS
const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]

            };

        case "REMOVE_FROM_BASKET":
            const index=    state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
            let newBasket=[...state.basket];

            if(index >=0){
                newBasket.splice(index,1)
            }
            else{
                console.warn(
                    `cant delte product (id:${action.id}) as its not in
                    basket!`
                )
             
        }

        return{
            ...state,
            basket:newBasket
        };


        case "SET_USER":
            return{
                ...state,
                user:action.user
            };


          case 'CLEAR_BASKET':
                return {
                  ...state,
                  basket: [], // Clearing the basket by setting it to an empty array
                };

            default:
                return state;
    }
};
export default reducer;