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
        <div className='sortableitem'>
             <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
             <div><img className='bg-cover rounded-lg' src={props.id} alt={props.id}/></div>
             

             </div>
            
        </div>
    );
};

export default Sortableitem;