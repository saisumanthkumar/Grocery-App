import './List.css';

import React from 'react';
import {FaTrash,FaEdit} from 'react-icons/fa';

function List({items,remove,editItem}) {
    const status = false

    return (
        <div className="output">
            {status && <h1>hello</h1> }
            {
                items.map((item) =>
                {
                    return (
                        <div className="item" key={item.id} data-key={item.id}>
                            
                            <span className="title">{item.title}</span>                 
                            <button className="delete" onClick={remove}><FaTrash /></button>
                            <button className="edit" onClick={editItem}><FaEdit /></button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default  List;