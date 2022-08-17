import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    single:null,
    items:[],
    totalPrice:0
  },
  reducers: {
    getSingle(state,action){
        state.single = action.payload
    },
    addItems(state,action){
      const findIndex = state.items.find(obj=>obj.id === action.payload.id)
      if(findIndex){
        findIndex.count++
      }else{
        state.items.push({
          ...action.payload,
          count:1
        })
      }
      state.totalPrice = state.items.reduce((sum,obj)=>(obj.price*obj.count)+sum,0)
    },
    deleteItems(state,action){
      state.items = state.items.filter(obj=>obj.id !== action.payload)
      state.totalPrice = state.items.reduce((sum,obj)=>(obj.price*obj.count)-sum,0)
    },
    increment(state,action){
      const findIndex = state.items.find(obj=>obj.id === action.payload)
      if(findIndex){
        findIndex.count++
      }
      state.totalPrice = state.items.reduce((sum,obj)=>(obj.price*obj.count)+sum,0)
    },
    decriment(state,action){
      const findIndex = state.items.find(obj=>obj.id === action.payload)
      if(findIndex.count > 1){
        findIndex.count -= 1
      }else if(findIndex.count === 0){
        findIndex.count = 0
      }
      state.totalPrice = state.items.reduce((sum,obj)=>(obj.price*obj.count)-sum,0)
    },
    clearItems(state,action){
      state.items = []
    }

  }
})

// Action creators are generated for each case reducer function
export const {getSingle,addItems,deleteItems,increment,decriment,clearItems} = cartSlice.actions

export default cartSlice.reducer