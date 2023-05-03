import React from 'react'
import MyButton from './MyButton'
import DivPanel from './DivPanel';

const mainPanel =()=>{
    return (
        <div>
            This is main panel <MyButton></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}

export default mainPanel;
