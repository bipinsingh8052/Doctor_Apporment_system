import Form from 'react-bootstrap/Form';
import  { useState ,useEffect} from "react";
import { AutoComplete, Input } from "antd";
import Confi from '../Confi';
import axios from 'axios';
const suggestions = ['Bipin singh', 'Rinku singh', 'Rohit yadav', 'Prashant Pandey', 'Prayagaraj', 'Prayagraj,Naini', 'Rewa', 'Cardiologist', 'ENT', 'Neuro Surgeon', 'Dentist'];

export default function Search() {
    const [options, setOptions] = useState([]);
    // const [select,setselect]=useState("");
    const [input,setinput]=useState({});

    // let[data,setData]=useState([]);
    // let loading=async()=>{
    //   let api=`${Confi}/display`
    //   try {
    //     let resp= await axios.get(api);
    //     // console.log(resp.data)
    //     setData(resp.data);
    //     // suggestions.push(...data.map((e) => e.name)); 
    //     // suggestions.push(...data.map((e) => e.city)); 
    //     // suggestions.push(...data.map((e) => e.specailization));
    //   } catch (error) {
    //     console.log(error)   
    //   }
    // }

    const handleSearch = (value) => {
      setOptions(value ? suggestions.filter(item => item.toLowerCase().includes(value.toLowerCase())) : []);
    };

const Searchit=async()=>{
    let api=`${Confi}/search`;
    try {
        let response =await axios.post(api,input);
        console.log(response)
    } catch (error) {
        console.log("error")
        
    }
    console.log(input)
}

const handleinput=(e)=>{
    let {name,value}=e.target;
    setinput(valuse=>({...valuse,[name]:value}))
}

//   useEffect(()=>{
//         loading() 
//     },[suggestions])
  return (
    <>
    <div className="search">
        <div className="search_container">
            <h5>Book N Meet a Doctor!</h5>
            <p>India's best online appointment scheduling platform</p>
            <div className="searchBar">
              <Form.Select aria-label="Default select example" name='option' onChange={handleinput}>
                <option>Open this select menu</option>
                <option value="name"> Doctor Name</option>
                <option value="specailization">specailization </option>
                <option value="city">city</option>
                </Form.Select>

                <div className="input">
                <AutoComplete
                    options={options.map((item) => ({ value: item }))}
                    onSearch={handleSearch}
                    style={{ width: 250 }}
                    >
                    <Input placeholder="Write it Here..." name='input' onChange={handleinput} />
                    </AutoComplete>
                </div>
                <div className="button">
                    <button onClick={Searchit} >Search</button>
                </div>
                
            </div>
        </div>
    </div>

    </>
  )
}
