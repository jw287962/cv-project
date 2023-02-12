import React, {useState, useEffect} from "react";


const Detail = (props) =>{
  // constructor(props){
  //   super(props);

  const [data, setData] = useState(props.data);
    const [button, setButton] = useState(true);
const [noUpdate, setNoUpdate] = useState(props.noUpdate);

      // this.state = {
      //   // personal: {data: "Name", email: "Email", phone: "000-000-0000"},
      //   data: this.props.data,
      //   button: true,
      // }

  
     const updateHTMLButton = (e) => {
        // this.setState({button: !this.state.button})
        setButton(!button);
        setNoUpdate(false);
        if(button){
          console.log('Clicking Button')
          // // const newInput = document.createElement('input');
          // // newInput.value = this.state.personal.name;
          //   let targetNode = e.target;
          //   targetNode.appendChild(newInput)
            }
        }
  
        
    const updateData = () => {
      // this.setState({button: !this.state.button})
      setButton(!button);
      console.log('Click Saving Button')
  
  
    }
    const onChangeUpdate = (e) => {
      console.log(e.target.value)
      // this.setState({data: e.target.value})
      setData(e.target.value);
    }

  useEffect(() => {
      if(noUpdate && props.data !== data){
          console.log('change back to prop');
        setData(props.data);
        setButton(button);
        setNoUpdate(false);
        
      }

  }) 

    return (
        <div >
          <button className='singledata' id='detail' onClick={updateHTMLButton} disabled={!button}>
                        <div className={(!button) ? 'hidden': 'nothidden'}>{data}</div> 
                        <input className={(button) ? 'hidden': 'nothidden'} value={data} onChange={onChangeUpdate} ></input>
                   </button>
                  <button className={(button) ? 'hidden': 'nothidden'} onClick={updateData}>Save</button>

            
            
        </div>
      )

    };
export default Detail;