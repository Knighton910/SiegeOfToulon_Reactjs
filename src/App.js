import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade'
import logo from './logo.svg';
import canBal from './cbcopy.png';
import canN from './can.png';
import oldC from './accopy.jpg';
import Napol from './Napoleon.png';
import Data1 from './DataShot1.png';
import Data2 from './DataShot2.png';
import Data3 from './DataShot3.png';
import Data4 from './DataShot4.png';
import Ene2 from './Burgundy.svg';
import Ene1 from './Habsburg.svg';
import Ene3 from './Prussia.svg';
import Ene4 from './Sardinia.png';
import Ene5 from './GreatBrit.png';
import Revo1 from './dantonG.jpg';
import Revo2 from './Robespierre.png';
import Revo3 from './saintjust.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Napoleon's First Victory</h1>
          <p className='siege'>Siege of Toulon¨ 1793</p>
          <Parallax
          className=''
          offsetXMax={2}
          offsetXMin={-6}
          slowerScrollRage
          tag='figure'>
          <h2 id='rep'>‘ It was in <em><span id='touch'>Toulon</span></em> that my reputation began. ‘</h2>
          <p id='repName'> - Napoleon Bonaparte</p>
        </Parallax>
        
        <div id='context-set1'>
          <div id='context1'> 
            <p>In the Summer of 1793 the French Revolution was entering into it's fourth year and France was on the verge of anarchy. In Paris, political extremist had seized control of the Revolution.</p>
          </div>

          <div className='revolunaries'>
            <div className='rev1'>
              <h4>Maximilien Robespierre</h4>
              <img src={Revo2} className="Rev1" />
            </div>
            <div className='rev2'>
              <h4>Georges Danton</h4>
              <img src={Revo1} className="Rev2" />
            </div>
            <div className='rev3'>
              <h4>Louis Saint-Just</h4>
              <img src={Revo3} className="Rev3" />
            </div>
          </div>

          <div id='context2'> 
            <p>They Guillotined the king and imposed a reign of terror that dealt justice to all suspected enemies of the revolution.</p>
            <p>Neiboring kingdoms wanted to stomp out this new dangerous political experiment. <span id='hLight'>The Habsburg empire</span>, <span id='hLight'>Kingdom of Spain</span>, <span id='hLight'>Great Britain</span>, <span id='hLight'>Kingdom of Sardinia</span> and <span id='hLight'>The Kingdom of Prussia</span>. France was fighting on all it's border sides and losing it's land. Not only was France fighting external enemies, but now it had to fight insurgency on home turf because of the revolts. The city of Toulon had joined the revolt (Toulon and other regions of France switched to Royalist) and Great Britian had landed a huge blow to the Revolution without firing a shot.</p>
            <p>t is a long established letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>

        <div className='enemies'>
          <div className='enemy1'>
            <h4>The Habsburg empire </h4>
            <img src={Ene1} className="Ene1" />
          </div>
          <div className='enemy2'>
            <h4>Kingdom Of Spain </h4>
            <img src={Ene2} className="Ene2" />
          </div>
          <div className='enemy3'>
            <h4>Kingdom Of Prussia </h4>
            <img src={Ene3} className="Ene3" />
          </div>
          <div className='enemy4'>
            <h4>Kingdom of Sardinia </h4>
            <img src={Ene4} className="Ene4" />
          </div>
          <div className='enemy5'>
            <h4>Great Britian</h4>
            <img src={Ene5} className="Ene5" />
          </div>
        </div>

        <img src={Data1} className="D1set" />
        
        <Fade left>
          <Parallax
            className='blast'
            offsetXMax={-40}
            offsetXMin={-60}
            slowerScrollRage
            tag='figure'>
            <img src={canBal} className="" />
          </Parallax>
        </Fade>

        <Parallax
          className=''
          offsetXMax={-38}
          offsetXMin={-60}
          slowerScrollRage
          tag='figure'>
          <img src={canN} />
        </Parallax>
        <img src={Data2} className="" />
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <img src={Data3} className="" />
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <img src={Data4} className="" />
        {/* <Fade left>
          <img src={canBal} className="" />
        </Fade> */}

        <img src={Napol}/>
      </div>
    );
  }
}

export default App;
