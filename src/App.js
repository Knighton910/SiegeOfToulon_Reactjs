import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade'
import canBal from './cbcopy.png';
import canN from './can.png';
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
import TriangleGrid from './components/TriangleGrid';

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
                <p>Hoping to unify the new Republic, France leaders had declared war on the Habsburg empire, but the conflict quickly spread, and soon France was facing the combined might of Europe leading powers.</p>
                <p>Neighboring kingdoms wanted to stomp out this new dangerous political experiment. <span id='hLight'>The Habsburg empire</span>, <span id='hLight'>Kingdom of Spain</span>, <span id='hLight'>Great Britain</span>, <span id='hLight'>Kingdom of Sardinia</span> and <span id='hLight'>The Kingdom of Prussia</span>. France was fighting on all it's border sides and losing it's land. Not only was France fighting external enemies.</p>
                <p>Meanwhile whole regions of France had come out in open revolt horrified by the extremism of the Revolution. In August the Republic suffered a further potential fatal blow, when the city Toulon joined the revolt. Toulon was France's largest and most important naval base in the south, home to a 3rd of the French navy. So now rebels welcomed they're old enemy the British Royal Navy into the port, led by Lord Hood on HMS Victory.</p>
                <p>It was an extraordinary coupe, without a shot being fired the Allies had crippled French Naval Power in the Mediterranean and gained a vital toehold on the French Coast. All French forces in the area were immediately diverted to face this new Threat and lay siege to the rebel port.</p>
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

          <div id='context-set2'>
              <div id='context2'>
                  <p>Nineteen thousand troops in all, but since most French officers had been aristocrats who were now fleeing the Revolution in large numbers, they were seriously short of supply of leadership. Their commander General Jean-Francois Carteaux was a loyal republican but a Court Painter by trade with no military training. To make matters worse one of his few professional officers his Artillery Commander had been badly injured on the approach to Toulon, and recommended for his replacement a fellow country men from Corsica a twenty four old Artillery officer named Napoleone Buonaparte</p>
                  <p>Bonaparte was a professional soldier but he seen almost no active service, never the less his superiors was impressed with his manner and most of all his politics. Bonaparte had just written a political pamphlet, a short story about a young artillery officer who berate his fellow dinners for their disloyalty to the Republic named Le Souper de Beaucaire.</p>
                  <p></p>
              </div>

              <div id='context2'>
                  <p>The great port of Toulon was well defended by city walls and a dozen outlying Forts and Redoubts. They were held by 2,00 British soldiers and sailors, 6,000 Spanish troops, 6,000 Neopolitans and 800 Sardinians. Artillery would be the key to over coming these defenses, but when Bonaparte was put in command on the 16th of September, he found himself with few cannons, not enough trained gun crews and a shortage of gunpowder.</p>
                  <p>With relentless energy and determination Bonaparte transformed the situation. Requisitioning unused guns, training infantry to work them. Setting up a forge and workshop, and arranging transport from Marseille and a hundred sand bags for constructing new batteries. Through hard work, he was able to build his force up to 64 officers 1,500 men, manning 100 Cannon, Howitzers and Mortars. within days Bonaparte had established two new forward Batteries, with good revolutionary names, La Montagne and Sans Culottes. Which bought Toulon inner harbor in range and forced Admiral Lord Hood all his ships closer to the port.</p>
                  <p>Bonaparte also hatched a plan, that would bypass Toulon Defense system and secure a rapid victory that the Republic so desperately needed. Bonaparte argued that if Fort Leguilette could be captured he could fill it with heavy guns that reach across the harbor and shell the british and spanish fleet that anchor. Admiral lord Hood would be forced to abandon the port and take with him, the Allied solders that Toulon relied on for it’s defense.</p>
              </div>
          </div>

        <img src={Data3} className="" />
          <div id='context-set3'>
              <div id='context2'>
                  <p>General Carteaux saw the merits of Bonapart's plan and on the 22 September 1793 French forces attacked Mont Caire. Bonaparte argued an attack for 3,000 men, the indecisive Carteaux only committed only 400. Not only was the attack easily repulsed but it alerted the Allies to the danger, within 48 hours they had reinforced Mont Caire with thousands more troops and a freshly minted Fort named Fort MULGRAVE, bristling with 20 new cannons the position was now so strong that the French nicknamed it Little Gibraltar.</p>
                  <p>Now in mid November an experienced General Dugommier arrived to take control of french forces. General Dugommier saw that Bonaparte’s plan was the only way to take Toulon. And gave it his full backing. Now Bonaparte promoted to Major, got to work by over seeing several more batteries in preparation for the new decisive assault. On the 30th of November the Allied land forces Commander British General Charles O'Hara tried to seize back the initiative. At first the attack was successful, but a counter attack with greater numbers led by General Dugommier and Major Bonaparte drove back the Allies</p>
                  <p>General O'Hara was captured. 12 years before, he'd surrendered to General George Washington at the Siege of Yorktown during the American War of Independence, now he got to surrender to Napoleon Bonaparte.</p>
              </div>
              <div id='context2'>
                  <p>In the early hours of the 18th of December 1793 Howling wind and pouring rain, the French launched a major assault on Fort Mulgrave. The wet conditions rendered muskets useless, except as clubs or bayonets. Bonaparte’s horse was killed under him. He was Bayoneted in the thigh nearly ending his life. Finally the Allied garrison was overwhelmed. Mulgrave fell to the French. Fort Leguillette and Fort La Balaquier was soon also in french hands, by the following afternoon the French had 10 heavy guns in Fort Leguillette, placing the allied ships within range. Admiral Hood could not expose his ships to the line, he had no option but to order an immediate evacuation of fleet and garrison of Toulon.</p>
                  <p>Spanish, Neopolitan and British raced to destroy things that they could not take with them. Many French citizens of Toulon who turn Royalist, was desperately trying to escape with the allies on ships, knowing that the Republicans who inflict serious reprisals. British and Spanish took as many as they could, fourteen thousand in all, but scores drowned amid chaotic and desperate scenes. Other were left to face the wrath of the revolution. Republican troops entered the city in the next morning. Execution and firing squad begin almost immediately. For the next two weeks, about 200 we’re executed every day. Allied propaganda later blamed Napoleon for the atrocities, but there isn’t any evidence he was directly involved.</p>
                  <p>France’s young Republic was now fighting back on all fronts, and with the fall of Toulon, the Allies had lost a golden opportunity. A chance to stir up more revolt and deal a lasting blow to French Naval power, perhaps even overturn the Revolution, but instead the French Republic had weathered one of it’s greatest storms. In no small part, thanks to the remarkable  judgement, energy, and courage of one 24 year of Artillery officer, now promoted to Brigadier General in recognition of his extraordinary service at Toulon. Napoleon Bonaparte had taken his first step on the path to Greatness.</p>
              </div>
          </div>

        <img src={Data4} className="" />


        <img src={Napol}/>
          <TriangleGrid />
      </div>
    );
  }
}

export default App;
