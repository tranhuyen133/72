import {createSlice} from "@reduxjs/toolkit"

const useReduce= createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        //bên trong Reducers chứa các action
    },
})
export default useReduce.reducer;