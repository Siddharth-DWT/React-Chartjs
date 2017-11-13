import React from 'react';

const DropDown = (props) => {
return (
       <select className = "nav-item dropdown" >

           <option value="ruby">Ruby</option>
           <option value="node">Node</option>
           <option  selected={true} value="python">Python</option>

       </select>

)
}

export default DropDown;