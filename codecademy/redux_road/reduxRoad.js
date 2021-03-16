const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  };
  
   const gameReducer= (state = initialWagonState, action) => {
     switch(action.type) {
       case "gather": {
         return {
           ...state,
            supplies: state.supplies + (15 * action.payload),
            days: state.days + (1 * action.payload)
         };
       }
       case `travel`: {
         if(state.supplies < (20 * action.payload)) {
           return state;
         }
         return {
           ...state,
           supplies: state.supplies - (20 * action.payload),
           distance: state.distance + (10 * action.payload),
           days: state.days + (1 * action.payload)
         }
       }
       case 'tippedWagon': {
         return {
           ...state,
           supplies: state.supplies - 30,
           days: state.days + 1
         }
       }
       case 'sell': {
         return {
           ...state,
           supplies: state.supplies - (20 * action.payload),
           cash: state.cash + (5 * action.payload),
         }
       }
       case 'buy': {
         return {
           ...state,
           supplies: state.supplies + (25 * action.payload),
           cash: state.cash - (15 * action.payload),
         }
       }
       case 'theft': {
         return {
           ...state,
           cash: state.cash * 0.5
         }
       }
       default: {
         return state;
       }
     }
   }
  
   let wagon = gameReducer(undefined, {});
   console.log(wagon);
   wagon = gameReducer(wagon, {type: 'travel', payload: 1})
   console.log(wagon);
   wagon = gameReducer(wagon, {type: 'gather', payload: 1});
   console.log(wagon);
   wagon = gameReducer(wagon, {type: 'tippedWagon'});
   console.log(wagon);
   wagon = gameReducer(wagon, {type: 'travel', payload: 3});
  console.log(wagon);
  wagon = gameReducer(wagon, {type: 'travel', payload: 10});
  console.log(wagon);
  wagon = gameReducer(wagon, {type: 'buy', payload: 2});
  console.log(wagon);
  wagon = gameReducer(wagon, {type: 'sell', payload: 1});
  console.log(wagon);
  wagon = gameReducer(wagon, {type: 'theft'});
  console.log(wagon);