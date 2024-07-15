import {createSlice} from "@reduxjs/toolkit"


const propertySlice = createSlice({

    //Slice name:
    name:"property",
    //Initial state for the property slice

    initialState:{
        properties:[],
        totalProperties:0,
        searchParams:{}, //Parameters used to search
        error:null,  //Error State
        loading:false //Loading State for property

    },

    //reducers functions to handle different functions
    reducers:{
        getRequested:(state)=>{
            state.loading = true;
        },
        //Action to update properties state with data
        getProperties(state,action){
            state.properties = action.payload.data;
            state.totalProperties = action.payload.allproperties;
            state.loading = false;
        },

        //Action to update search parameters
        updateSearchParams: (state,action)=>{
            state.searchParams = 
              Object.keys(action.payload).length === 0 
                ? {}
                :{
                    ...state.searchParams,
                    ...action.payload,
                };
        },

        //Action to update error state
        getErrors(state,action){
            state.error = action.payload;
        }
    },
});

export const propertyAction = propertySlice.actions;

export default propertySlice;