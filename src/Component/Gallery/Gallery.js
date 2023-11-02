import React, { useState } from 'react';
import {DndContext, closestCenter} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import Sortableitem from '../Sortableitem/Sortableitem';
import './Gallery.css'

const Gallery = () => {
// const hotel = ['https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-3.png', 'https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-4.png', 'https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-5.png', 'https://ppccamp.com/wp-content/uploads/2023/10/Rectangle-7-copy-56.png', 'https://ppccamp.com/wp-content/uploads/2023/09/post23-890x664-1.jpg']
const hotel = [
  'https://i.imgur.com/AnM4gAB.jpg', 
  'https://i.imgur.com/9TpS6zs.jpg',
  'https://i.imgur.com/amvZBCO.png', 
  'https://i.imgur.com/hw47hFu.png',
  'https://i.imgur.com/cRDxqiN.png',
  'https://i.imgur.com/kDsVGko.png',
  'https://i.imgur.com/j5QvJRY.png',
  'https://i.imgur.com/2mL2Ki4.png',
  'https://i.imgur.com/AlKS2Pz.png',
  'https://i.imgur.com/QLEtPBz.png',
  'https://i.imgur.com/7eL733Q.png'

]

    const [images, setImages] = useState(hotel)
    console.log(images);

    function handleDragEnd(e) {
        console.log("Drag end called");
        const {active, over} = e;
        console.log("ACTIVE: " + active.id);
        console.log("OVER :" + over.id);
    
        if(active.id !== over.id) {
          setImages((items) => {
            const activeIndex = items.indexOf(active.id);
            const overIndex = items.indexOf(over.id);
            console.log(arrayMove(items, activeIndex, overIndex));
            return arrayMove(items, activeIndex, overIndex);
           
          });
          
        }

    }
    
    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <h1 className='text-3xl'>Hello Drag end</h1>
            <SortableContext items={images}
            
           >
            <div className='gallery-area '>
                 {images.map(image => <Sortableitem key={image} id={image} />)}
                 </div>
            </SortableContext>
        
        </DndContext>
    );

};

export default Gallery;