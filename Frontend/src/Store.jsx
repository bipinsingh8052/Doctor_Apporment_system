import { configureStore } from '@reduxjs/toolkit'
import killer from './slices/FirstSlice'
const Store=configureStore({
    reducer:{
    name:killer
    }
})

export default Store;