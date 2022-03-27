import { createStore } from "redux";

const reducer = (store, { type, payload }) => {
    switch (type) {
        case "ADD_COUNT":
            return { ...store, count: store.count + payload };
        case "ADD_TODO":
            return { ...store, todos: [...store.todos, payload] };
        default:
            return store;
    }
}
// class Store{
//     constructor(reducer, initialState) {
//         this.reducer = reducer;
//         this.state = initialState;
//     }
//     getState() {
//         return this.state;
//     }
//     dispatch(action) { 
//         this.state = this.reducer(this.state, action);
//     }
// }
 
const initialState = { count: 0, todos: [] };

const store = new createStore(reducer, initialState);

store.dispatch({ type: "ADD_TODO", payload: {title:"learn js", status:false} });

console.log(store.getState());
