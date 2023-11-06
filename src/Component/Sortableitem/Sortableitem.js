import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Sortableitem = (props) => {
  const { id, image,  selectThumbnails, setSelectThumbnails } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  // console.log(id)

  return (
    <div className={"sortableitem relative before:content-[''] before:cursor-move"}>
      <div
       className={
        "before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors " +
        (selectThumbnails.find((photo) => photo.id === image.id)
          ? " opacity-100"
          : " hover:before:bg-black/50")
      }
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <img
          className={
            "h-full w-full max-w-full rounded-lg object-contain border-2" +
            " " +
            (selectThumbnails.find((photo) => photo.id === image.id) &&
              "opacity-70")
          }
          src={image.thumbnail}
          alt={id}
        />
      </div>
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
          " " +
          (selectThumbnails.find((photo) => photo.id === image.id)
            ? "opacity-100"
            : "opacity-0")
        }
        checked={
          selectThumbnails.find((photo) => photo.id === image.id) ? true : false
        }
        onChange={() => {
          if (selectThumbnails.find((photo) => photo.id === image.id))
            setSelectThumbnails(
              selectThumbnails.filter((photo) => photo.id !== image.id)
            );
          else setSelectThumbnails([...selectThumbnails, image]);
        }}
      />
    </div>
  );
};

export default Sortableitem;
