import React, { useState } from 'react';
import {DndContext, closestCenter} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import Sortableitem from '../Sortableitem/Sortableitem';

const Gallery = () => {
const hotel = ['https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-3.png', 'https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-4.png', 'https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-5.png', 'https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-56.png']

    const [languages, setLanguages] = useState(hotel)

    

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <h1 className='text-3xl'>Hello Drag end</h1>
            <SortableContext items={languages}
            
           >
            <div className='grid grid-cols-3 gap-5'>
                 {languages.map(language => <Sortableitem key={language} id={language}/>)}
                 </div>
            </SortableContext>
        
        </DndContext>
    );
    function handleDragEnd(e) {
        console.log("Drag end called");
        const {active, over} = e;
        console.log("ACTIVE: " + active.id);
        console.log("OVER :" + over.id);
    
        if(active.id !== over.id) {
          setLanguages((items) => {
            const activeIndex = items.indexOf(active.id);
            const overIndex = items.indexOf(over.id);
            console.log(arrayMove(items, activeIndex, overIndex));
            return arrayMove(items, activeIndex, overIndex);
           
          });
          
        }

    }
};

export default Gallery;