import React, {Component} from 'react';
import './EmojiCard.css';

class EmojiCard extends Component {

    render(){
        let {title,symbol} = this.props.emoji;
        const codePointHex = symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return(
            <div className='col-md-3 col-xs-6'>
                <div className='emoji-card'>                
                    <div className='emoji-img'><img onClick={this.props.onCopy} data-clipboard={symbol} alt={title} src={src} width='64' height='64'/></div>
                    <div className='emoji-title'>{title}</div>
                </div>
            </div>
        );
    }
};

EmojiCard.propTypes = {
    onCopy: React.PropTypes.func.isRequired,
    emoji: React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        symbol: React.PropTypes.string.isRequired
    })
};

export default EmojiCard;
