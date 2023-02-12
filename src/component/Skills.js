import React, {useState, useEffect} from "react";
import './skills.css'


const Skills = (props) => {
// class Skills extends React.Component{
  // constructor(props){
  //   super(props);

 const [data, setData] = useState(props.data);
const [button, setButton] = useState(true);
const [allowUpdate, setAllowUpdate] = useState(false);
const [newItem, setNewItem] = useState('');

useEffect(() => {
  console.log(props);
  // const getDerivedStateFromProps = () => {
    if(!allowUpdate && props.data !== data){
      setData(props.data);
      setButton(button);
}


return () => {
};
    // }
});
  
      const updateHTMLButton = (e) => {
        setButton(!button());
     
        if(button){
          console.log('Clicking Button')
     
            }
        }
  
        
        const updateData = (e) => (setButton(!button()))
   
    
    const onChangeSkillInput = (e) => ( setNewItem(e.target.value))
     
      // this.setState({
      //   newItem: e.target.value,
      // })
    const editSkillsList= (e) =>{
        setButton(!button);
        setAllowUpdate(true);
    }
        // this.setState({
        //   button: !this.state.button,
        //   allowUpdate: true,
        // })
    

    const saveSkillList= (e) =>{
      console.log(newItem);
        if(newItem){
          // this.setState({
          //   button: !this.state.button,
          //   data: this.state.data.concat((this.state.newItem).toUpperCase()),
          //   newItem: '',
          // })
          setButton(!button)
          setData(data.concat(newItem.toUpperCase()));
          setNewItem('');
        
        }else
          setButton(!button);
    }


    const deleteSkill = (e) =>{
        let listPostion = e.target.parentElement.getAttribute('a-key');
      console.log('delete', listPostion)

        data.splice(listPostion,1);
      // this.setState({
      //   data: this.state.data,
      //   newItem: '',
      // })
      setData(data);
      setNewItem('');
    }
 
  

    return (
        <div>
          <button className="borderless skill" onClick={editSkillsList} disabled={!button}>SKILLS
            
          </button>
          <button className={(button) ? 'hidden': 'nothidden'} onClick={saveSkillList}> Save</button>
          <input className={((button) ? 'hidden': 'nothidden') + " skillsInput"} value={newItem}  onChange={onChangeSkillInput}></input>
            <ul className="col">
              {data.map((element,i=0) => {
                return (
                      <button className="borderless alignleft" onClick={deleteSkill} 
                              key={'skills'+i} a-key={i}
                              >
                        <li >{element} </li>
                      </button>
              )})}
              </ul>
            
            
        </div>
      )


}

export default Skills;