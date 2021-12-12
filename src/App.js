import './App.css';
import React, {Component} from 'react';
import ReactFCCtest from 'react-fcctest';
import { quotes_list } from "./Quotes.js";


class App extends Component {
   constructor(props) {
       super(props);
       this.state = { 
           quote: "I do not fear computers. I fear lack of them." , 
           author: " Isaac Asimov"
       };
   }
    newQuote(){
       let quoteIndex = Math.floor(Math.random()*quotes_list.length);
       this.setState ({
          quote: quotes_list[quoteIndex].quote,
          author: quotes_list[quoteIndex].author
    });
    }
    tweetTextFormater (){
        return "https://twitter.com/intent/tweet?text=" +
                this.state.quote.replace(' ' , "%20") +
                " - " +
                this.state.author.replace(' ' , "%20")
    };
   render(){ 
     return (
       <div id='box' className='box'>
         {/*Free Code Camp Test CDN */}
        <ReactFCCtest />

         {/*App*/}
        <wrapper id='quote-box'>

            <div className="buttons">

               <button id='new-quote'className="button" onClick={()=>this.newQuote()}>New Quote</button>

               <a id="tweet-quote" className="tweetButton" href={this.tweetTextFormater()} data-size="large">Tweet</a>

            </div>

         <br/>

            <div className="qouteAndauthor">

                <div id='text' className='quote'>
                    <q>{this.state.quote}</q>
                </div>

                <div id='author' className = 'author'>
                    <p>- {this.state.author}</p>
                </div>

            </div>
        </wrapper>
       </div>
    );
  }
}


export default App;
