import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import Sortableitem from "../Sortableitem/Sortableitem";
import "./Gallery.css";
import { Data } from "../../FakeData/Data";

const Gallery = () => {
  const [images, setImages] = useState(Data);
  const [selectThumbnails, setSelectThumbnails] = useState([]);

   // Handle delete images
   const handleDeleteClick = () => {
    const updatedImages = images.filter(
      (image) => !selectThumbnails.some((selected) => selected.id === image.id)
    );

    setImages(updatedImages);
    setSelectThumbnails([]);
  };

  function handleDragEnd(e) {
    const { active, over } = e;

    if (active.id !== over.id) {
      setImages((images) => {
        const activeIndex = images.findIndex((image) => image.id === active.id);
        const overIndex = images.findIndex((image) => image.id === over.id);
        return arrayMove(images, activeIndex, overIndex);
      });
    }
  }

  return (
    <>
    <section className="w-10/12 m-auto">
    <nav className="py-4 px-6 ">
            <article className="flex flex-row justify-between items-center">
              <h1 className="text-2xl font-bold">
                {selectThumbnails.length === 0 ? (
                  "Gallery"
                ) : (
                  <label
                    htmlFor="select"
                    className="flex flex-row justify-between items-center gap-x-4"
                  >
                    <input
                      type="checkbox"
                      name="select"
                      id="select"
                      checked={selectThumbnails.length > 0}
                      className="h-5 w-5 accent-blue-500 cursor-pointer"
                      onChange={() => setSelectThumbnails([])}
                    />
                    {selectThumbnails.length} Files Selected
                  </label>
                )}
              </h1>
              {selectThumbnails.length === 0 ? ('') : ( <button
                className="text-red-500 font-medium"
                onClick={handleDeleteClick}
              >
                Delete files
              </button>)}
             
            </article>
          </nav>
          <hr/>
      
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
   
        <SortableContext items={images}>
          <div className="gallery-area ">
            {images.map((image, index) => (
              <Sortableitem
                key={image.id}
                id={image.id}
                image={image}
                index={index}
                selectThumbnails={selectThumbnails}
                setSelectThumbnails={setSelectThumbnails}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      </section>
    </>
  );
};

export default Gallery;
