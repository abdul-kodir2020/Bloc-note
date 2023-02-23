import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';

function ElementsInListe(props) {
  return props.listeNote.length != 0 ? (
    props.listeNote.map((element, i) => (
      <div class="p-2 border-bottom d-flex justify-content-between">
        <div class="overflow-hidden">
          <h5 class="d-inline">{i + 1}</h5>. {element.text}
        </div>
        <div class="d-flex justify-content-between divButton">
          <button
            class="plusButton p-0"
            onClick={props.deleteNote}
            name={element.id}
          >
            <BsFillTrashFill size={20} />
          </button>
          <button class="plusButton p-0" onClick={props.showNote} name={i}>
            <BsFillArrowRightCircleFill size={20} />
          </button>
        </div>
      </div>
    ))
  ) : (
    <div class="divListe">
      <p class="text-center m-0">Aucune Note</p>
    </div>
  );
}

export default ElementsInListe;
