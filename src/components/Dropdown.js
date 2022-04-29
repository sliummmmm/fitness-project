import React from 'react';

class Dropdown extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    handleSelection = (e)=>{
        this.props.onSelection(e.target.value);
    }

    render(){
        return(
            < select className="ui search dropdown" onChange={this.handleSelection} >
                <option value=''>select a exercise</option>
                {this.props.options.map((option,index)=>{return <option key={index} value={option.id} >{option.name}</option>})}
            </select>
        )
    }
}

// const Dropdown=(props)=>{

//     const optionList = props.options.map((option,index)=>{
//         return <option key={index} value={option.id} >{option.name}</option>
//     });

//     handleSelection = (e) =>{
//         this.props.onSelection
//     }
//     //Done today: haven't finish the dropdown function

//         return(
//             <select className="ui search dropdown" onChange={handleSelection} >
//                 <option value=''>select a exercise</option>
//                 {optionList}
//             </select>
//         )
// };

export default Dropdown;