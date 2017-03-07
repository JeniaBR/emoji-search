import React, {Component} from 'react';
import shortid from 'shortid';
import InputField from './components/InputField';
import EmojiCard from './components/EmojiCard';
import ModalBox from './components/ModalBox';
import emojiList from './emojiList.json';
import './App.css';

const EmojiResult = ({onCopy, emojiList}) => (
  <div className="emoji-result">
    {emojiList.map((emoji) => {
      return (        
        <EmojiRow key={shortid.generate()} onCopy={onCopy} emojiArray={emoji}/>
        );
      })
    }
  </div>
);

const EmojiRow = ({onCopy, emojiArray}) => (
  <div className='row'>
    {emojiArray.map((emoji)=>{
      return(
        <EmojiCard onCopy={onCopy} key={shortid.generate()} emoji={emoji}/>
      );
    })}
  </div>
);

const Title = ()=> (
    <h2 className="title">Emoji Search App</h2>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredEmoji: this.filterEmoji('',24)
    };
  }

  filterEmoji(text, numberOfResults) {
    return emojiList.filter((emoji) => {
      if (emoji.title.includes(text)) {
        return true;
      }
      if (emoji.keywords.includes(text)) {
        return true;
      }
      return false;
    }).slice(0, numberOfResults);
  }

  splitToRows(arr, len){
    var chunks = [],
    i = 0,
    n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    };

    return chunks;
  }

  handleChangeSearch = (e) => {
    this.setState({
      filteredEmoji: this.filterEmoji(e.target.value,24)
    });
  }

  handleCopyEmoji = (e)=>{
    const emojiSymbol = e.target.dataset.clipboard;
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = emojiSymbol;

    document.body.appendChild(textArea);
    textArea.select();

    try{
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    }catch (err){
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", emojiSymbol);
    
  }

  render() {
    let splittedFilteredEmoji = this.splitToRows(this.state.filteredEmoji,4);
    return (
      <div className="container-fluid">
        <ModalBox/>
        <div className='App'>
          <Title/>
          <InputField onTextChange={this.handleChangeSearch}/>
          <EmojiResult onCopy={this.handleCopyEmoji} emojiList={splittedFilteredEmoji}/>  
        </div>     
      </div>
    );
  }
}

export default App;
