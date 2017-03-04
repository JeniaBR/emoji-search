import React, {Component} from 'react';
import shortid from 'shortid';
import InputField from './components/InputField';
import EmojiCard from './components/EmojiCard';
import emojiList from './emojiList.json';
import './App.css';

const EmojiResult = ({emojiList}) => (
  <div className="emoji-result">
    {emojiList.map((emoji) => {
      return (        
        <EmojiRow key={shortid.generate()} emojiArray={emoji}/>
        );
      })
    }
  </div>
);

const EmojiRow = ({emojiArray}) => (
  <div className='row emoji-row'>
    {emojiArray.map((emoji)=>{
      return(
        <EmojiCard key={shortid.generate()} emoji={emoji}/>
      );
    })}
  </div>
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

  render() {
    let splittedFilteredEmoji = this.splitToRows(this.state.filteredEmoji,4);
    return (
      <div className="container-fluid App">
        <h2>Emoji Search App</h2>
        <InputField onTextChange={this.handleChangeSearch}/>
        <EmojiResult emojiList={splittedFilteredEmoji}/>      
      </div>
    );
  }
}

export default App;
