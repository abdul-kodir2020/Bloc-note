import React from 'react';
import './style.css';
import ListeNote from './listeNote';
import NoteBlock from './NoteBlock';
import Alert from './Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listeNote: [],
      listeNoteBlock: [],
      content: false,
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.showNote = this.showNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
    this.updateText = this.updateText.bind(this);
    this.hide = this.hide.bind(this);
  }

  addNote() {
    if (this.state.listeNote.length == 0) {
      console.log('existe');
      const newNote = {
        id: Math.floor(Math.random() * 10000),
        text: '',
      };
      const newListe = [newNote, ...this.state.listeNote];
      this.setState({ listeNote: newListe });
    } else {
      if (this.state.listeNote[0].text != '') {
        console.log('existe pas et pas vide');

        const newNote = {
          id: Math.floor(Math.random() * 10000),
          text: '',
        };
        const newListe = [newNote, ...this.state.listeNote];
        this.setState({ listeNote: newListe });
      } else {
        this.setState({ content: true });
        const timer = setTimeout(() => {
          this.setState({ content: false });
        }, 2000);
      }
    }
  }

  deleteNote(e) {
    console.log(e.target.name);
    const newListe = e.target.getAttribute('fill')
      ? this.state.listeNote.filter(
          (note) => String(note.id) !== e.target.parentElement.name
        )
      : this.state.listeNote.filter(
          (note) =>
            String(note.id) !== e.target.parentElement.parentElement.name
        );

    console.log(newListe);
    this.setState({ listeNote: newListe });
    this.setState({ listeNoteBlock: [] });

  }

  showNote(e) {
    const newNote = e.target.getAttribute('fill')
      ? {
          key: e.target.parentElement.name,
          content: this.state.listeNote[parseInt(e.target.parentElement.name)],
        }
      : {
          key: e.target.parentElement.parentElement.name,
          content:
            this.state.listeNote[
              parseInt(e.target.parentElement.parentElement.name)
            ],
        };
    
    const newListe = [newNote];
    this.setState({ listeNoteBlock: newListe });
    console.log(newNote);

    console.log(this.state.listeNoteBlock);
  }

  closeNote(e) {
    const newListe = e.target.getAttribute('fill')
      ? this.state.listeNoteBlock.filter(
          (note) => String(note.key) !== e.target.parentElement.name
        )
      : this.state.listeNoteBlock.filter(
          (note) =>
            String(note.key) !== e.target.parentElement.parentElement.name
        );

    this.setState({ listeNoteBlock: newListe });

    console.log(newListe);
    console.log(e.target);
  }

  updateText(e) {
    const liste = [...this.state.listeNoteBlock];
    liste[parseInt(e.target.name)].content.text = e.target.value;
    this.setState({ listeNoteBlock: liste });
    console.log(e.target.value);
    console.log(liste[parseInt(e.target.name)].content.text);
  }

  hide() {
    this.setState({ content: false });
  }

  render() {
    return (
      <div class="container w-100">
        <h1 class="text-center">Bloc note</h1>
        <div class="mt-5 w-100 d-flex">
          <ListeNote
            listeNote={this.state.listeNote}
            addNote={this.addNote}
            deleteNote={this.deleteNote}
            listeNoteBlock={this.state.listeNoteBlock}
            showNote={this.showNote}
          />
          <div class={"w-50 sectionNote px-2 "+((this.state.listeNoteBlock.length == 0)?"d-none":"")}>
            <NoteBlock
              listeNoteBlock={this.state.listeNoteBlock}
              closeNote={this.closeNote}
              updateText={this.updateText}
            />
          </div>
        </div>
        <Alert content={this.state.content} hide={this.hide} />
      </div>
    );
  }
}

export default App;
