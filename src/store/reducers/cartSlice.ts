import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}
const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addInCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Produto já adicionado')
      } else {
        state.itens = [...state.itens, produto]
      }
    }
  }
})

export const { addInCart } = cartSlice.actions
export default cartSlice.reducer
