import React, {Component} from 'react';
import Title from './components/Title';
import InputField from './components/InputField';
import ModalBox from './components/ModalBox';
import EmojiResult from './components/EmojiResult';
import emojiList from './emojiList.json';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredEmoji: this.filterEmoji('',24)
    };
  }

  componentDidMount(){
    this.showModal();
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

  showModal(){
    const modal = document.getElementById('start-modal');
    modal.style.display='block';

    window.onclick = (e) => {
      if(e.target === modal){
        modal.style.display = "none";
      }
    }
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
