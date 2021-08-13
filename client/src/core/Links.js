import React from 'react'
import '../styles/links.css'
import barbarian from '../images/barbarian.jpg'
import crusader from '../images/crusader.jpg'
import demonhunter from '../images/demonhunter.jpg'
import monk from '../images/monk.jpeg'
import necro from '../images/necro.jpg'
import witchdr from '../images/witchdr.jpg'
import wizard from '../images/wizard.jpg'
import offdia from '../images/offdia.jpg'
import icyveins from '../images/icyveins.png'
import gameguide from '../images/gameguide.jpg'
import diaforum from '../images/diaforum.png'
import serverstatus from '../images/serverstatus.jpg'
import diablo1 from '../images/diablo1.jpg'
import whimsyshire from '../images/whimsyshire.jpeg'
import cowlevel from '../images/cowlevel.png'
import d4 from '../images/d4.jpg'
import goblin from '../images/goblin.png'
import seasons from '../images/seasons.jpg'
import leggems from '../images/leggems.jpg'
import setdungeon from '../images/setdungeon.png'
import tristram from '../images/tristram.jpg'
import hires from '../images/hires.png'
import weapons from '../images/weapons.png'
import transmog from '../images/transmog.jpg'
import rifts from '../images/rifts.jpg'
import vault from '../images/vault.jpg'
import cube from '../images/cube.jpg'
import discord from '../images/discord.jpg'

const Links = () => {
  return (
    <>
    <div id='linksTitle'>Diablo 3 Links</div>
    <br/><br/>
    <div className='linksDiv container'>

      <div class="cardL">
        <img id='barbLink' src={barbarian}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Barbarian_(Diablo_III)" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Barbarian</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='crusaderLink' src={crusader}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Crusader_(Diablo_III)" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Crusader</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='dhLink' src={demonhunter}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Demon_Hunter_(Diablo_III)" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Demon Hunter</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='monkLink' src={monk}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Monk_(Diablo_III)" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Monk</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='necroLink' src={necro}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Necromancer_(Diablo_III)" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Necromancer</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='witchDrLink' src={witchdr}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Witch_Doctor" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Witch Doctor</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='wizardLink' src={wizard}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Wizard_(Diablo_III)" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Wizard</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='offDiaLink' src={offdia}/>
      <div class="container">
        <a id='exLink' 
           href="https://us.diablo3.com/en/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Official Diablo Site</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='icyVeinsLink' src={icyveins}/>
      <div class="container">
        <a id='exLink' 
           href="https://www.icy-veins.com/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Icy Veins</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='gameGuideLink' src={gameguide}/>
      <div class="container">
        <a id='exLink' 
           href="https://us.diablo3.com/en/game/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Game Guide</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='diaForumLink' src={diaforum}/>
      <div class="container">
        <a id='exLink' 
           href="https://us.forums.blizzard.com/en/d3/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Diablo 3 Official Forums</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='serverStatusLink' src={serverstatus}/>
      <div class="container">
        <a id='exLink' 
           href="https://downdetector.com/status/diablo/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Diablo Server Status</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='diablo1Link' src={diablo1}/>
      <div class="container">
        <a id='exLink' 
           href="https://www.gameflare.com/retro-game/diablo-1/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Original Diablo Game</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='whimsyShireLink' src={whimsyshire}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Whimsyshire" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Whimsy Shire</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='cowLevelLink' src={cowlevel}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/The_Secret_Cow_Level" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Cow Level</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='diablo4Link' src={d4}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo4.blizzard.com/en-us/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Diablo 4</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='goblinLink' src={goblin}/>
      <div class="container">
        <a id='exLink' 
           href="https://www.icy-veins.com/d3/goblin-farming-guide" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Treasure Goblins</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='seasonsLink' src={seasons}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Season#:~:text=Seasons%20are%20a%20feature%20of,end%2Dgame%20of%20Diablo%20III." 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Seasons</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='legGemsLink' src={leggems}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Legendary_Gems" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Legendary Gems</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='setDungeonLink' src={setdungeon}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Set_Dungeon" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Set Dungeons</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='tristramLink' src={tristram}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/The_Darkening_of_Tristram" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>The Darkening of Tristram</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='hiresLink' src={hires}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Followers" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Hires</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='weaponsLink' src={weapons}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Weapons" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Weapons</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='transmogLink' src={transmog}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Transmogrification" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Transmogs</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='riftsLink' src={rifts}/>
      <div class="container">
        <a id='exLink' 
           href="https://blizzardwatch.com/2020/08/14/diablo-greater-rifts/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Rifts</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='vaultLink' src={vault}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/The_Vault" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>The Vault</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='cubeLink' src={cube}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Kanai%27s_Cube" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Kanai's Cube</b>
          </h4> 
        </a>
      </div>
      </div>

      <div class="cardL">
        <img id='discordLink' src={discord}/>
      <div class="container">
        <a id='exLink' 
           href="https://diablo.fandom.com/wiki/Diablo_Wiki:Discord" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <h4 id='cardLink'>
            <b>Diablo 3 Discord Server</b>
          </h4> 
        </a>
      </div>
      </div>

    </div>
    </>
  )
}

export default Links