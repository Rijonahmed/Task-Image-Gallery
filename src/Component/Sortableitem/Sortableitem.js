import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from "@dnd-kit/utilities";

const Sortableitem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };
    console.log(props.id)
    return (
        <div className='container '>
             <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
             <div className=' w-32 h-60  bg-slate-900 text-red-700 border'><img src={props.id} alt={props.id}/></div>
             

             </div>
            
        </div>
    );
};

export default Sortableitem;