import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (params) => {
    const {categoryId,search,page} = params
    const {data} = await axios.get(`https://62fa1f1effd7197707e5cb7e.mockapi.io/items?${categoryId ? `technoId=${categoryId}`:''}&search=${search}&page=${page}&limit=12`)
    return data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
      products:[],
      status:false
    },
    reducers: {
    },
    extraReducers:{
        [fetchProduct.pending](state){
            console.log('pending');
            state.status = true
        },
        [fetchProduct.fulfilled](state,action){
            state.products = action.payload
            state.status = false
        },
        [fetchProduct.rejected](state){
            alert('smt went wrong')
            state.state = true
        },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { } = productsSlice.actions
  
  export default productsSlice.reducer