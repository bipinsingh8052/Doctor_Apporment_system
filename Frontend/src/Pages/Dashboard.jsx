import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { show,deleted } from '../slices/FirstSlice';

export default function Dashboard() {
    let dispatch=useDispatch();
    let name =useSelector(state=>state.name.first);
    console.log(name)

  return (
    <div>
      dashboard
    </div>
  )
}
