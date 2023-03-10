import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

function NoteBlock(props) {
  return props.listeNoteBlock.map((element, i) => (
    <div class="w-100 listeNote bg-secondary-subtle border border-dark-subtle rounded">
      <div class="w-100 bg-dark rounded text-white p-2 d-flex justify-content-between">
        <span></span>
        <div class="d-flex justify-content-between divButton">
          <button class="plusButton p-0 text-white">
            <BsThreeDots size={20} />
          </button>
          <button
            class="plusButton text-white p-0"
            name={element.key}
            onClick={props.closeNote}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
      <div>
        <textarea
          class="w-100"
          name={i}
          id=""
          rows="7"
          value={element.content.text}
          onChange={props.updateText}
        >
          {element.content.text}
        </textarea>
      </div>
    </div>
  ));
}

export default NoteBlock;
