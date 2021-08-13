import React from 'react'
import '../styles/about.css'
import d3Mal from '../images/d3Mal.jpg'
import gamePlay from '../images/gamePlay.jpg'
import wDoctor from '../images/wDoctor.jpg'
import barb from '../images/barb.jpg'
import wiz from '../images/wiz.jpg'
import monks from '../images/monks.jpg'
import dem from '../images/dem.jpg'
import sader from '../images/sader.jpg'
import mancer from '../images/mancer.jpg'
import tram from '../images/tram.jpg'

const About = () => {
  return (
    <div id='about'>
      <h1 id='aboutTitle'>Diablo 3-The Game</h1>

      <p id='aboutPara'>Diablo III is a hack-and-slash action role-playing game 
        developed and published by Blizzard Entertainment as the 
        third installment in the Diablo franchise. It was released 
        for Microsoft Windows and OS X in May 2012, the PlayStation 
        3 and Xbox 360 in September 2013, the PlayStation 4 and 
        Xbox One in August 2014, and the Nintendo Switch in 
        November 2018. Players choose to play as one of seven 
        character classes – Barbarian, Crusader, Demon Hunter, 
        Monk, Necromancer, Witch Doctor, or Wizard – and are tasked 
        with defeating the Lord of Terror, Diablo, as in previous 
        games in the series.
      </p>

      <p id='aboutPara'>An expansion pack entitled Reaper of 
        Souls was released for PC in March 2014. It was released 
        for consoles as part of the Diablo III: Ultimate Evil 
        Edition version in August 2014. The Rise of the Necromancer 
        pack was released for the Windows, macOS, and PlayStation 4 
        and Xbox One in June 2017. Diablo III: Eternal Collection, 
        combining Reaper of Souls and Rise of the Necromancer, was 
        released for PlayStation 4 and Xbox One in June 2017, and 
        for the Nintendo Switch in November 2018.
      </p>

      <p id='aboutPara'>The game received 
        critical acclaim, although its always-on DRM feature was 
        criticized. The game set a new record for 
        "fastest-selling PC game" by selling over 3.5 million 
        copies in the first 24 hours of its release, and became the 
        best-selling PC game of 2012 by selling over 12 million 
        copies. As of August 2015, the number of sales had grown to 
        over 30 million. A sequel, Diablo IV, was announced in 2019 
        and is currently in development.
      </p>

      <div id='aboutImgDiv'>
        <img id='d3Mal' alt="Diablo 3 Malthiel" src={d3Mal}/>
      </div>
      <br/><br/>

      <h2 id='aboutSubTitle'>Game Play</h2>

      <br/>

      <p id='aboutPara'>Much like in Diablo and Diablo II, the quality and 
        attributes of equipment are randomized. In addition to base 
        stats (such as damage and attack speed for weapon or armor 
        points on armor) higher-quality items have additional 
        properties such as extra damage, attribute bonuses, bonuses 
        to critical hit chance, or sockets, which allow items to be 
        upgraded and customized by adding gems for various stat 
        bonuses. Magic-quality items have up to three random 
        properties, rare-quality items have up to six, and 
        legendary-quality items typically have up to eight with 
        varying degrees of randomness. Set items are a subtype of 
        legendary items which provide additional, cumulative 
        bonuses if multiple items from the same set are 
        simultaneously equipped. Higher level monsters tend to 
        drop higher level items, which tend to have higher base 
        stats and bonuses.
      </p>

      <p id='aboutPara'>The proprietary engine incorporates Blizzard's custom 
        in-house physics, and features destructible environments 
        with an in-game damage effect. The developers sought to 
        make the game run on a wide range of systems without 
        requiring DirectX 10. Diablo III uses a custom 3D game 
        engine in order to present an overhead view to the 
        player, in a somewhat similar way to the isometric view 
        used in previous games in the series. Enemies utilize 
        the 3D environment as well, in ways such as crawling up 
        the side of a wall from below into the combat area.
      </p>

      <p id='aboutPara'>As in Diablo II, multiplayer games are possible using 
        Blizzard's Battle.net service, with many of the new 
        features developed for StarCraft II also available in 
        Diablo III. Players are also able to drop in and out of 
        sessions of co-operative play with other players. Unlike 
        its predecessor, Diablo III requires players to be 
        connected to the internet constantly due to their 
        DRM policy, even for single-player games. An enhanced quest 
        system, a random level generator, and a random encounter 
        generator are used in order to ensure the game provides 
        different experiences when replayed.
      </p>

      <p id='aboutPara'>Unlike previous iterations, gold can be picked up 
        merely by touching it, or coming within range (adjusted by 
        gear) rather than having to manually pick it up. One of 
        the new features intended to speed up gameplay is that 
        health orbs drop from enemies, replacing the need to have a 
        potion bar. The latter is replaced by a skill bar that 
        allows a player to assign quick bar buttons to skills and 
        spells; previously, players could only assign two skills 
        (one for each mouse button) and had to swap skills with the 
        keyboard or mousewheel. Players can still assign specific 
        attacks to mouse buttons.
      </p>

      <p id='aboutPara'>Skill runes, another new feature, are skill modifiers 
        that are unlocked as the player levels up. Unlike the 
        socketable runes in Diablo II, skill runes are not items 
        but instead provide options for enhancing skills, often 
        completely changing the gameplay of each skill. For 
        example, one skill rune for the Wizard's meteor ability 
        reduces its arcane power cost, while another turns the 
        meteor to ice, causing cold damage rather than fire.
    </p>

    <div id='aboutImgDiv'>
      <img id='gamePlay' alt="Game Play" src={gamePlay}/>
    </div>

    <br/><br/>

    <h2 id='aboutSubTitle'>Hardcore Mode</h2>

    <p id='aboutPara'>As in Diablo II, Diablo III gives players the choice to 
      make hardcore characters. Players are required to first 
      level up a regular character to level 10 before they have 
      the option to create new Hardcore characters. Hardcore 
      characters cannot be resurrected; instead they become 
      permanently unplayable if they are killed. Hardcore 
      characters are separately ranked, and they can only form 
      teams with other hardcore characters. After dying, the 
      ghost of a hardcore character can still chat. Their name 
      still shows up in rankings, but the character cannot return 
      to the game. If the hardcore character reached level 10 
      before dying, it can be placed in the Hall of 
      Fallen Heroes.
    </p>

    <br/>

    <h2 id='aboutSubTitle'>Artisans</h2>

    <p id='aboutPara'>Artisans are non-player characters (NPCs) who sell and 
      craft. Two types of artisans can be introduced by 
      completing a quest for each: Haedrig Eamon the Blacksmith 
      and Covetous Shen the Jeweler. The Reaper of Souls 
      expansion introduced the Mystic artisan, who can replace 
      individual item enchantments and change the physical 
      appearance of items. Artisans create items using materials 
      the player can gather by scrapping acquired items and 
      reducing them to their component parts. These materials 
      are used to create items with random bonuses. Unlike 
      Diablo II rare and magic items can also be enhanced 
      rather than just basic weaponry and armor. Crafting can 
      be used to train and improve the skills of the artisans 
      rather than create new items. When artisans gain new 
      levels, their shop reflects their higher skill level. 
      The process of salvaging items into materials also makes 
      inventory management easier. Blizzard stated that this 
      crafting system was designed so that it would not slow 
      down the pace of the game.
    </p>

    <br/>

    <h2 id='aboutSubTitle'>Followers</h2>

    <p id='aboutPara'>Followers are NPC allies that can accompany the player 
      throughout the game world. There are three followers in 
      Diablo III: Kormac the Templar, Lyndon the Scoundrel and 
      Eirena the Enchantress, who each possess their own skills 
      and background. As followers fight alongside the 
      player, they gain new experience, skills, and equipment as 
      they level up. Only one follower accompanies the player 
      at a time, creating a gameplay strategy decision. 
      Originally, followers were only going to appear in Normal 
      mode; however, Jay Wilson stated at BlizzCon 2011 that 
      followers would continue to be usable in later difficulty 
      levels.
    </p>

    <br/>

    <h2 id='aboutSubTitle'>Auction House</h2>

    <p id='aboutPara'>On August 1, 2011, it was reported that Diablo III 
      would feature two types of auction houses: one where 
      players spend in-game gold and another where players 
      could buy or sell virtual items for real-world money. 
      The real-money auction house was not available in Hardcore 
      mode. Prior to release, Blizzard stated that nearly 
      everything that drops on the ground, including gold, could 
      be traded with other players either directly or through 
      the auction house system. Aside from certain bound on 
      account items, such as the Staff of Herding needed to 
      access the Whimsyshire easter egg, Blizzard stated there 
      would be very few items that would be bound to a particular 
      character and therefore untradable.</p>

    <p id='aboutPara'>In order to get rated in South Korea, Blizzard had to 
      remove the real-money auction house from the Korean release 
      of the game as the auction house violated Korean 
      anti-gambling laws.
    </p>

    <p id='aboutPara'>In the gold-based auction house, a flat fee of 15 
      percent was taken from the final sale price of an auction. 
      The real-money auction house fees were US$1, €1 or £1 
      (or equivalent) for equipment (weapons and armor) and a 
      15 percent fee for commodity auctions, which included items 
      like crafting materials, blacksmith and jewelcrafting 
      plans, and gold exchange. There was an additional 15 
      percent "cashing-out" fee from proceeds gained selling 
      items in the real-money auction house. While the 
      gold-based auction house was available to any player 
      regardless of which region they play in, the real-money 
      auction was restricted to players on their home region. 
      If they used the global play function to play in a 
      different region, they would not be able to access the 
      real-money auction house. The real money auction 
      house was opened on June 12, 2012 
      (June 15 in the Americas).
    </p>

    <p id='aboutPara'>In March 2013, former Diablo III game director 
      Jay Wilson stated that he felt the existence of the 
      auction houses "really hurt" the game. "I think we would 
      turn it off if we could," Wilson said during his talk. 
      But the solution is "not as easy as that." On 
      September 17, 2013, Blizzard stated that both the gold and 
      real-money auction houses would be shut down on 
      March 18, 2014. Players had until June 24, 2014 to 
      claim gold and items from the completed tab on the auction 
      house interface.
    </p>

    <br/>

    <h2 id='aboutSubTitle'>PvP Combat</h2>

    <p id='aboutPara'>Player versus player combat (PvP) was added to 
      Diablo III in a limited form with the 1.0.7 patch in 
      February 2013. The Brawling system provides a simple free 
      for all area where between two and four characters can 
      fight and defeat each other as long as they like, but 
      without any scores or damage being tracked. Players can 
      participate by choosing from their existing characters, 
      with access to all of the gear and skill they have 
      gathered from playing the game in single-player or 
      cooperative mode.</p>

    <p id='aboutPara'>PvP content for Diablo III had been discussed throughout 
      the game's development, but on March 9, 2012, Blizzard 
      announced that PvP had been delayed and would not be 
      included with the game's release. Lead designer Jay 
      Wilson said in a post on Battle.net that the PvP Arena 
      system would arrive in a post-release patch; it would 
      include multiple Arena maps with themed locations and 
      layouts, PvP-centric achievements, and a quick and easy 
      matchmaking system.</p>

    <p id='aboutPara'>On December 27, 2012, Blizzard announced that the 
      previously mentioned Team Deathmatch or Arena mode was 
      canceled, because it did not have enough depth. Instead a 
      simple PvP system would be added for the time being. That 
      PvP mode was initially named Dueling, and was renamed to 
      Brawling before release. Although the PvP systems 
      initially outlined were not released, Blizzard stated that 
      they would add other full-featured PvP systems in a free 
      future content patch. In a May 2013 interview, Diablo III 
      developer Wyatt Cheng stated that the development team was 
      looking to see how the Brawling PvP evolves, while 
      they "continue to work on figuring out something more 
      objective-based."</p>

      <br/>

      <h2 id='aboutSubTitle'>Seasons</h2>

      <p id='aboutPara'>Patch 2.1 introduced seasons to the game, which are 
        the equivalent of ladders from Diablo II. In each 
        season, players start with a new level 1 character and 
        game performance is compared on a leaderboard. Each season 
        has exclusive Legendary items, which will be awarded for 
        good Ladder performance and through Tiered Rifts and each 
        season includes Conquests, which are seasonal achievements 
        for the first 1,000 to complete them on each server. 
        Seasons last for around three months. When a season ends 
        all seasonal characters are transferred to the main 
        account.
      </p>

      <br/>

      <h2 id='aboutSubTitle'>Adventure Mode</h2>

      <p id='aboutPara'>Adventure Mode allows players to explore every region 
        currently available in the game, without having to create 
        new games. New objectives (including Bounties and Nephalem 
        Rifts) and the Mystic NPC are also available to the 
        players, and these features can only be found in Adventure 
        Mode. As soon as a player completes the entire campaign 
        (including the newly added Act V) and defeats the final 
        boss Malthael, Adventure Mode is unlocked and available to 
        all characters on the player's account, including new 
        seasonal characters.
      </p>

      <br/>

      <h2 id='aboutSubTitle'>Bounties</h2>

      <p id='aboutPara'>Players are able to complete five random Bounties for 
        each act when playing in Adventure Mode. Bounties are 
        random missions that may require players to hunt down a 
        specific enemy, clear a specific area, slay a certain 
        number of enemies, or complete a certain event, for 
        example cleanse a cursed chest or a cursed shrine. Upon 
        completion of Bounties, players will be rewarded with 
        certain amount of gold, loots as well as crystalline 
        blood shards, which can be traded for powerful items. 
        Once players complete all five Bounties designated to 
        one act, they will be rewarded with a Horadric Cache, 
        which contains random loots and rewards such as gems, 
        crafting materials, crafting recipes, and equipment. As 
        of patch 2.3, Rift Key Fragments are no longer in the 
        game, and thus have been removed from Horadric caches. 
        Additional bounty areas were added with the Ruins of 
        Sescheron in Act III (patch 2.3), Greyhollow Island in 
        Act V (patch 2.4), the Shrouded Moors and the Temple of 
        the Firstborn in Act II, and the Realms of Fate in Act 
        IV (both patch 2.6).
      </p>

      <br/>

      <h2 id='aboutSubTitle'>Nephalem Rifts</h2>

      <p id='aboutPara'>Nephalem Rifts are dungeons in Adventure Mode that 
        consist of randomized regions and encounters. Players 
        fight enemies and explore areas drawn randomly from all 
        acts. As of patch 2.3 Nephalem rifts can be opened for 
        free and no longer require Rift Keystone Fragments 
        (which have been removed from the game). Players will 
        also find "pylons" that grant players powerful abilities 
        during exploration of the Rifts. In the first major 
        content patch Greater Rifts were added where the 
        difficulty increases each time you complete the rift 
        within the time limit. The final boss in each Nephalem 
        Rift has a chance of dropping a Greater Rift Keystone, 
        which can be used to open these Greater Rifts.
      </p>

      <br/>

      <h2 id='aboutSubTitle'>Kanai's Cube</h2>

      <p id='aboutPara'>Added in patch 2.3, Kanai's Cube is an improvement on 
        the Horadric Cubes used in Diablo II. In Adventure Mode, 
        players will speak to the ghost of Zoltun Kulle in town, 
        at which point he will direct them to the Ruins of 
        Sescheron in Act III to locate the cube. Once found, the 
        cube is available to all characters of the type that 
        finds it (normal or Hardcore; the first character in a 
        new Season must re-acquire it regardless of whether their 
        normal or Hardcore characters have already found it). 
        With certain crafting material combinations, the cube can 
        be used to extract legendary powers (marked in orange 
        text in the item's stats), upgrade rare items to 
        legendary, remove level requirements on items, and other 
        abilities.
      </p>

      <br/>

      <h2 id='aboutSubTitle'>The Darkening of Tristram Event</h2>

      <p id='aboutPara'>To commemorate the 20th anniversary of the original 
        Diablo, Blizzard announced at BlizzCon on November 4, 
        2016, that they will add a remade version of the original 
        game (complete with its 16-level dungeon and original 
        bosses) to Diablo III; this will also include "retro 
        touches" such as the option for the pixelated graphics 
        and the eight-direction movement limitations of the 
        original game, while being played with the Diablo III 
        classes. The event, known as "the Darkening of 
        Tristram", went live on January 4, 2017, and ran until 
        January 31.
      </p>

      <br/>

      <h2 id='aboutSubTitle'>Character Classes</h2>

      <p id='aboutPara'>There are five available character classes from 
        Diablo III and two from the Reaper of Souls expansion, 
        for a total of seven character classes. In the previous 
        two games each class had a fixed gender, but in Diablo 
        III players may choose the gender.
      </p>

      <br/>

      <ul>

        <li id='aboutPara'>
          The Witch Doctor is a new character reminiscent of 
          the Diablo II's necromancer, but with skills more 
          traditionally associated with shamanism and voodoo 
          culture. The witch doctor has the ability to summon 
          monsters, cast curses, harvest souls, and hurl poisons 
          and explosives at their enemies. To power spells the 
          Witch Doctor uses Mana, a vast pool of mental power 
          which regenerates slowly.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='wDoctor' alt="Witch Doctor" src={wDoctor}/>
        </div>

        <br/><br/><br/>

        <li id='aboutPara'>The Barbarian was initially the only returning class 
          from Diablo II, and according to Jay Wilson the original 
          backstory (since discarded) envisioned the male as the 
          older character from Diablo II. Barbarians have a variety 
          of revamped skills at their disposal based on incredible 
          physical prowess. The barbarian is able to whirlwind 
          through crowds, cleave through swarms, leap across 
          crags, crush opponents upon landing, and grapple-snap 
          enemies into melee range. The resource used by the 
          barbarian is fury, which is generated through attacking 
          enemies, getting attacked by enemies, and using certain 
          abilities. Fury is used for the barbarian's strongest 
          abilities and degenerates over time.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='barb' alt="Barbarian" src={barb}/>
        </div>

        <br/><br/><br/>

        <li id='aboutPara'>The Wizard succeeds the sorceress from Diablo II 
          and the sorcerer from Diablo. The initial backstory for 
          the female wizard described her as a rebellious 
          sorceress who could not be tamed. The Wizard's abilities 
          range from shooting lightning, fire and ice at their 
          enemies to slowing time and teleporting past enemies and 
          through walls. Wizards fuel their spells with arcane 
          power, which is a shallow but fast-regenerating power 
          source.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='wiz' alt="Wizard" src={wiz}/>
        </div>

        <br/><br/><br/>

        <li id='aboutPara'>The Monk is a melee attacker, using martial arts to 
          cripple foes, resist damage, deflect projectiles, attack 
          with blinding speed, and land explosive killing blows. 
          Monk gameplay combines the melee elements of Diablo II's 
          assassin class with the "holy warrior" role of the 
          paladin. Blizzard has stated that the monk is not related 
          in any way to the monk class from the Sierra 
          Entertainment–made Diablo: Hellfire expansion. The monk 
          is fueled by spirit, which has defensive purposes and is 
          slowly generated through attacking, though it does not 
          degenerate.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='monks' alt="Monks" src={monks}/>
        </div>

        <br/><br/><br/>

        <li id='aboutPara'>The Demon Hunter combines elements of Diablo II's 
          amazon and assassin classes. Demon hunters use bows and 
          crossbows as their main weapons and can also throw small 
          bombs and knives at enemies. The demon hunter is fueled 
          by both discipline and hatred: hatred is a fast 
          regenerating resource that is used for attacks, while 
          discipline is a slow regenerating resource used for 
          defensive abilities involving acrobatics or shadows.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='dem' alt="Demon Hunter" src={dem}/>
        </div>

        <br/><br/><br/>

        <li id='aboutPara'>The Crusader is a Reaper of Souls expansion character 
          and is similar to the Paladin from Diablo II; in the 
          backstory these two classes plus the Templar make up the 
          three military orders of the Church of Zakarum. The 
          crusader has a variety of combat skills at its disposal 
          based on physical prowess, and typically wields a shield 
          and an associated weapon (typically a flail). The crusader 
          has an eclectic mix of abilities, including movement 
          abilities to move into the thick of battle, close-quarters 
          attacks that dispose of many nearby enemies, and many 
          more. The resource used by the crusader is wrath, which is 
          generated through attacking enemies, getting attacked by 
          enemies, and using certain abilities.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='sader' alt="Crusader" src={sader}/>
        </div>

        <br/><br/><br/>

        <li id='aboutPara'>The Necromancer is a death-themed spellcaster, 
          available as downloadable content for Reaper of Souls. 
          Described as a "reimagining" of the previous incarnation 
          seen in Diablo II, the necromancer specializes in 
          controlling the dead, be it by summoning minions, 
          reviving dead enemies temporarily or using their corpses 
          as a medium to their magical powers, while using blood 
          magic to power their offensive and defensive abilities. 
          The resource used by the necromancer is essence, which 
          is generated through attacking enemies with their primary 
          skills. Compared to the other summoning class, while the 
          Witch Doctor's lighthearted "creepy crawlies" summons of 
          spiders and snakes, the Necromancer has a "grim, visceral 
          and dark" design around blood, bone and corpses.
        </li>

        <br/>

        <div id='aboutImgDiv'>
          <img id='mancer' alt="Necromancer" src={mancer}/>
        </div>

      </ul>

      <br/>

      <p id='aboutPara'>All seven classes are represented in the crossover MOBA 
        game Heroes of the Storm (2015) as playable heroes. Players 
        can choose between Sonya (the Barbarian), Johanna 
        (the Crusader), Valla (the Demon Hunter), Kharazim 
        (the Monk), Xul (the Necromancer), Nazeebo 
        (the Witch Doctor), and Li-Ming (the Wizard).
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Plot</h2>

      <p id='aboutPara'>The game takes place in Sanctuary, the dark fantasy 
        world of the Diablo Series, twenty years after the events 
        of Diablo II. Deckard Cain and Leah are in Tristram 
        Cathedral (the same cathedral that was the setting of Diablo) 
        investigating ancient texts regarding an ominous prophecy. 
        A mysterious star falling from the sky strikes the 
        Cathedral, creating a deep crater into which Deckard Cain 
        disappears.
      </p>

      <h6 id='aboutSubTitle'>Act 1</h6>

      <p id='aboutPara'>The protagonist arrives in the town of New Tristram to 
        investigate the falling star which struck the cathedral, 
        which is now emanating risen undead. The protagonist 
        accompanies Leah to the cathedral in order to rescue Cain 
        from the crater into which he fell. After rescuing Cain, 
        the protagonist learns that the only way to the fallen 
        star is to defeat King Leoric, the former ruler of 
        Khanduras known now as the 'Skeleton King'. Cain informs 
        the protagonist that Leoric's crown must be recovered to 
        defeat him, and the protagonist searches for Leoric's 
        crown with the aid of Haedrig Eamon, the blacksmith of 
        New Tristram. After recovering the crown, the protagonist 
        returns to the cathedral where he/she eventually encounters 
        and rescues Kormac, a warrior of the Templar order who has 
        been taken captive by members of a cult known as the Dark 
        Coven. Together, they defeat Leoric and find a stranger 
        where the fallen star landed. The stranger's only memory 
        is of a sword that shattered into three pieces as he 
        fell.
      </p>

      <p id='aboutPara'>The protagonist recovers the sword pieces from the 
        Khazra Den and the Drowned Temple, opposed by the witch 
        Maghda, leader of the Dark Coven - giving aid to a bandit 
        named Lyndon in retrieving a false relic in the process. 
        Maghda, however, recovers the third piece before the 
        protagonist does and attempts to force Cain to repair the 
        sword. Leah, however, kills the cultists with a surge of 
        magical power, forcing Maghda to kill Cain and flee with 
        the stranger. Cain, before dying, repairs the sword and 
        tasks the protagonist with returning it to the stranger, 
        revealing that both the sword and the stranger are 
        angelic. The protagonist pursues Maghda into the bowels of 
        King Leoric's dilapidated torture chambers underneath 
        his manor, rescuing the stranger and returning to him his 
        sword after a violent fight with the Butcher, a powerful 
        demon. The stranger's memories are recovered, and it is 
        revealed that he is the Archangel Tyrael, the Aspect of 
        Justice. Disgusted with his fellow angels' unwillingness 
        to protect humanity from the forces of Hell, Tyrael 
        casts aside his divinity to become a mortal and warn 
        Sanctuary about the arrival of the demon lords Belial 
        (Lord of Lies) and Azmodan (Lord of Sin).
      </p>

      <h6 id='aboutSubTitle'>Act 2</h6>

      <p id='aboutPara'>The protagonist, Leah, and Tyrael travel to the city of 
        Caldeum. The protagonist leaves to track down Maghda at 
        Alcarnus as per orders from Asheara, commander of the Iron 
        Wolves (returning from Diablo II), while Leah and Tyrael 
        search for evidence of Belial in the city sewers. The 
        protagonist first encounters a young Enchantress who 
        introduces herself as Eirena, who hails from a different 
        era. With Eirena's help, the protagonist finds and stops 
        cultists from channeling an illusion by halting their 
        progress. Continuing on, the protagonist reaches the Khasim 
        Outpost, finding that Belial's serpent demons have 
        imprisoned and replaced the true guards. Freeing Captain 
        Davyd and his men, the protagonist reclaims the Khasim 
        Outpost from the serpent demons and is given access to 
        Alcarnus. After freeing the prisoners, the protagonist 
        fights Maghda in her lair and kills her, avenging Cain, 
        then returns to Caldeum to rescue Leah from the grasp of 
        the Imperial Guards. Gaining an audience with the young 
        Emperor of Caldeum, Hakan II, the protagonist is blamed 
        for the chaos at Alcarnus, and the Emperor orders the 
        protagonist's death and that Leah be brought to him, 
        forcing the protagonist to escape the palace. Escaping 
        to the sewers, Leah reveals that her mother, Adria 
        (the witch of Tristram from the original game) is still 
        alive. The protagonist aids Leah in rescuing Adria from the 
        city's sewers.
      </p>

      <p id='aboutPara'>Adria reveals that the key to stopping the forces of 
        Hell is the Black Soulstone. Crafted by the deranged 
        warlock Zoltun Kulle, it has the power to trap the souls 
        of the seven Lords of Hell and destroy them forever. Leah 
        explains that Kulle was slain by the Horadrim before he 
        could put the finishing touches on the stone, and that his 
        severed head was sealed off in the lush Dahlgur Oasis. 
        Adria instructs the protagonist to find the warlock's 
        head in the oasis if the Soulstone is to be retrieved. 
        After the head is retrieved, Leah revives the ghost of 
        Zoltun Kulle, and Tyrael instructs him to activate the 
        Black Soulstone. Kulle states that two vials of his blood 
        hidden by the Horadrim in the Desolate Sands are needed 
        to reach the stone. Leah decides to accompany the 
        protagonist whilst putting the warlock's head in the 
        protagonist's packs. After recovering the two vials of 
        blood, the protagonist ventures into Kulle's archives in 
        search of his body, while Leah prepares the ritual to 
        bring Kulle back. After Kulle is brought back to life, 
        the protagonist is then led into the archive's inner 
        sanctum where the Black Soulstone is located, but is 
        forced to defeat Kulle when the resurrected warlock 
        attempts to take the soulstone for himself. Upon returning 
        to Caldeum, the protagonist finds the city under attack 
        by Belial's forces. Leah and Adria fight their way to the 
        palace with the protagonist, revealing Belial as having 
        taken the form of the Emperor to deceive them, and 
        eventually defeat him. Leah then traps Belial's soul within 
        the Black Soulstone, freeing Caldeum, after which she has 
        a vision of the demon lord Azmodan, who is invading 
        Sanctuary from the crater of Mount Arreat (destroyed by 
        Tyrael in Diablo II: Lord of Destruction) in order to 
        retrieve the Black Soulstone and empower himself, becoming 
        the Prime Evil.
      </p>

      <h6 id='aboutSubTitle'>Act 3</h6>

      <p id='aboutPara'>The protagonist travels to Bastion's Keep with Tyrael, 
        their followers, Leah and Adria only to find it under 
        attack by Azmodan's army. Tyrael instructs the protagonist 
        to aid the defenders, lighting the signal fires on the 
        keep's walls, and raising the catapults. With that done, 
        the protagonist enters the stronghold, where Azmodan's 
        forces have breached the lower levels, defeating the demon 
        Ghom, the Lord of Gluttony. The protagonist then takes to 
        the battlefield, destroying Azmodan's siege weapons and 
        traveling to the crater of Mount Arreat. Tyrael assists 
        the protagonist in reaching the demonic gate protecting 
        the crater, and destroys it with his sword, El'druin. 
        After a gruesome battle with a huge Siegebreaker Assault 
        Beast, the protagonist traverses the depths of Arreat's 
        inner core, destroying the Sin Hearts, which empower 
        Azmodan and his armies. Azmodan's consort Cydaea, the 
        Maiden of Lust, attempts to protect the hearts, but is 
        defeated by the protagonist, who then confronts and 
        defeats Azmodan. Leah seals Azmodan's soul within the 
        Black Soulstone. With all seven Lords of Hell trapped 
        within the stone, Tyrael states that the Eternal Conflict 
        between Heaven and Hell will be ended if the stone is 
        destroyed. The protagonist returns to Bastion's Keep, but 
        finds that Adria has betrayed them. Adria reveals she has 
        been serving Diablo from the beginning, and that Leah's 
        father is Leoric's son Aidan, the Dark Wanderer 
        (the Warrior player character from the first game and 
        Diablo's reincarnate body in Diablo II), who was possessed 
        by Diablo. Adria uses the Black Soulstone to resurrect 
        Diablo while forcing Leah to serve as his vessel. With all 
        the souls of the Lords of Hell now within him, Diablo 
        becomes the Prime Evil, and begins an assault on the High 
        Heavens.
      </p>

      <h6 id='aboutSubTitle'>Act 4</h6>

      <p id='aboutPara'>The protagonist arrives in the High Heavens to find 
        that it is already under attack. Imperius, the Aspect of 
        Valor, blames the protagonist and Tyrael for their 
        downfall, causing Tyrael to give in to despair. On the 
        other hand, the protagonist remains determined to fight, 
        and defeats the demon Iskatu. The protagonist then meets 
        Itherael, the Aspect of Fate, who instructs him to rescue 
        Auriel, the Aspect of Hope, from Rakanoth, the Lord of 
        Despair, in the Library of Fate. After rescuing Auriel and 
        returning hope to the forces of Heaven, the protagonist 
        is then instructed by Auriel to close the Hell Rifts. 
        After this is done, the protagonist finds Tyrael, who has 
        overcome his despair. Together, they attempt to stop 
        Diablo from reaching the Crystal Arch, the source of power 
        for the forces of Heaven, but not before a brawl with 
        Izual, Tyrael's corrupted former lieutenant. After a long 
        and fierce battle, Diablo is defeated and his physical 
        manifestation is destroyed. The Black Soulstone is shown 
        falling from the High Heavens, still intact. After the 
        battle, Tyrael decides to rejoin the Angiris Council as 
        the new Aspect of Wisdom, but remains a mortal, 
        dedicated to building a permanent alliance between angels 
        and humans.
      </p>

      <h6 id='aboutSubTitle'>Act 5</h6>

      <p id='aboutPara'>After Diablo is defeated by the Nephalem (the player 
        character), Tyrael recovers the Black Soulstone that 
        contains the essence of all seven of the Great Evils. 
        Knowing it is too dangerous to leave in the hands of 
        mortals or angels, he and six Horadrim take the Black 
        Soulstone back to Sanctuary and attempt to seal it away 
        where it can never be found - deep in the tomb of Rakkis, 
        the first King of Westmarch, the kingdom established to 
        the west of Khanduras. However, the group is ambushed by 
        Malthael, former Archangel of Wisdom and member of the 
        Angiris Council, who had disappeared after the destruction 
        of the Worldstone after it was corrupted by Baal twenty 
        years earlier (at the end of Diablo II: Lord of 
        Destruction). Now calling himself the "Angel of Death", 
        Malthael kills all but one of the Horadrim, incapacitates 
        Tyrael in the process and steals the Black Soulstone.
      </p>

      <p id='aboutPara'>Tyrael sends the surviving Horadrim, Lorath Nahr, to 
        locate the Nephalem. Nahr encounters the Nephalem outside 
        Westmarch City, which has been overrun by the Reapers, 
        Malthael's army of enslaved spirits and renegade angels. 
        With the gates blocked, the Nephalem fights through the 
        city sewers to the Zakarum cathedral in the city center, 
       where they encounter Tyrael. Tyrael reveals that with 
        Diablo gone, Malthael sees humanity as a race of demons 
        based on their descent from the original Nephalem, the 
        offspring of angels and demons; by wiping out humanity, 
        Malthael hopes to end the Eternal Conflict, the long war 
        between Heaven and Hell. A sliver broke off from the Black 
        Soulstone when Malthael took it, and Tyrael attempts to use 
        it to discover Malthael's plans. The Reapers deploy two 
        soul crucibles into Westmarch City to claim the souls of the 
        dead, and the Nephalem locates and destroys them, earning 
        the ire of Urzael, Malthael's chief lieutenant, who awaits 
        the hero in Westmarch Heights. The Nephalem tracks Urzael 
        down to the Tower of Korelan and defeats him in a gruesome 
        battle.
      </p>

      <p id='aboutPara'>The Nephalem learns from Myriam Jahzia, a mystic 
        rescued during the attack against the soul crucibles, that 
        Adria (the witch of Tristram from the original game, who 
        is revealed to have been a servant of Diablo in Diablo III) 
        is in Westmarch seeking to locate the Black Soulstone and 
        resurrect her master again. Lorath decides to accompany the 
        hero, then learns that Adria sealed the tomb's entrance with 
        a rock slide, so he suggests unlocking the guide-stones to 
        open the correct passageway. Travelling into the ancient 
        ruins in the Blood Marsh outside Westmarch, the Nephalem 
        confronts Adria, who manages to locate Malthael at the 
        Pandemonium Fortress (last seen in Diablo II), built in the 
        realm between Heaven and Hell to watch over the Worldstone. 
        She then transforms into a winged demonic creature, claiming 
        that Diablo sent her a vision of his return at the hands of 
        the Nephalem, after which the Nephalem slays her. Upon 
        learning of Malthael's location, Tyrael takes the Nephalem 
        back into the High Heavens, where they find the Pandemonium 
        Gate under attack by Malthael's Reapers. Upon defeating the 
        attackers, they are met by Imperius, Aspect of Valor and 
        the commander of Heaven's armies, who reluctantly admits 
        that Malthael must be stopped and leads the Nephalem into 
        the Realm of Pandemonium. Imperius directs the Nephalem to 
        use an ancient battering ram to breach the fortress gates, 
        using siege runes held by the demons trapped there.
      </p>

      <p id='aboutPara'>Tyrael arrives just as the Nephalem prepares to 
        activate the ram, revealing that he has discovered 
        Malthael's plan; he intends to use the Black Soulstone to 
        consume all demonic essence in Sanctuary, including that 
        which makes up the bloodline of humanity, leading to its 
        extinction. After breaching the gates with four hits with 
        the battering ram, Tyrael informs the Nephalem that they 
        must become "one with death", as Malthael is, in order to 
        defeat him. Inside the fortress, the Nephalem encounters 
        a figure from their past (dependent on their class) who 
        directs them to unlock the soul prison kept in its depths. 
        The Nephalem channels the spirits from the prison and takes 
        on an aspect of death themselves, before moving on to 
        defeat the guardians that bar the way to Malthael's sanctum 
        at the heart of the fortress.
      </p>

      <p id='aboutPara'>The Nephalem holds their own against Malthael for a 
        time, until he shatters the Black Soulstone and takes the 
        power of the Seven Evils within himself. The Nephalem 
        ultimately triumphs, striking down Malthael and saving 
        mankind from his attempt to exterminate it; however, 
        Malthael's death frees the Seven Evils, shattering the 
        Black Soulstone; fulfilling Adria's final prophecy. As 
        Tyrael and Imperius look on after the Nephalem's victory, 
        Tyrael sees the Nephalem in a new light: a protector of 
        the innocent who can confront the most powerful champions 
        of Heaven and Hell alike. Yet in the end the Nephalem 
        still has a mortal heart that can be corrupted, and 
        Tyrael wonders if the Nephalem will remain the savior, 
        or become the doom of all creation.
      </p>

      <br/>

        <div id='aboutImgDiv'>
          <img id='tram' alt="Tristram" src={tram}/>
        </div>

        <br/><br/>

      <h2 id='aboutSubTitle'>Development</h2>

      <p id='aboutPara'>Development on Diablo III began in 2001 when Blizzard 
        North was still in operation, and the game was announced 
        on June 28, 2008, at the Blizzard Worldwide Invitational 
        in Paris, France. The original artistic design differed 
        from that shown at Blizzard Worldwide Invitational 2008 
        demonstration, and had undergone three revisions before 
        reaching the standards felt necessary by the team behind 
        Diablo III. It was announced that the 
        game would be simultaneously released on both Windows and 
        macOS platforms, and would require a constant internet 
        connection to play, even for single-player mode.
      </p>

      <p id='aboutPara'>The proprietary engine incorporates Blizzard's custom 
        in-house physics, a change from the original usage of 
        Havok's physics engine, and features destructible 
        environments with an in-game damage effect. Diablo III's 
        lead designer was Jay Wilson, a former Relic Entertainment 
        designer credited with work on Warhammer 40,000: Dawn of 
        War and Company of Heroes, as well as Blood II: The Chosen 
        for Monolith Productions. The lead world designer was 
        Leonard Boyarsky, one of the six co-creators of 
        Fallout.
      </p>

      <p id='aboutPara'>On May 9, 2011, Blizzard announced that the game was 
        expected to be released for external beta testing in Q3 of 
        2011. On September 7, 2011, Blizzard community manager 
        Bashiok confirmed the start of the closed public beta test 
        of the game with limited external testing by employees 
        and their families. Testers were not restricted by a 
        non-disclosure agreement. The beta began on 
        April 20, 2012, and closed on May 1, 2012. Following 
        the beta, the game officially released for Windows and 
        OS X on May 15, 2012.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Updates</h2>

      <p id='aboutPara'>On June 11, 2012, it was announced at the 2012 Apple 
        Worldwide Developers Conference keynote that native 
        retina display support would be coming to Diablo III. 
        The following day, a Blizzard representative confirmed 
        via the official Battle.net forums Apple's statement, the 
        ongoing work by the developer on the optimization of the 
        game engine for its rendering on the Retina display 
        (and technically on other similar future high-density 
        monitors) and that this optimization was mainly for 
        aesthetic purposes.
      </p>

      <p id='aboutPara'>Patch 1.0.4 introduced the paragon leveling system. 
        After reaching the level cap of 60, characters continue 
        to accumulate experience points, gaining paragon levels 
        (up to a cap of 100), each of which provides a bonus to 
        core stats (making characters more powerful and durable) 
        and magic find and gold find (increasing the quantity and 
        average quality of loot drops). Patch 1.0.5 expanded the 
        difficulty settings with the addition of the Monster Power 
        system. In addition to the Normal/Nightmare/Hell/Inferno 
        difficulty system, players can also set Monster Power at 
        any level from 0 to 10, with each level of Monster Power 
        increasing the damage, health points, experience point 
        yield and loot drop rates beyond the base value for a 
        given difficulty tier. The first PvP addition to the 
        game was in February 2013, as part of patch 1.0.7; a simple 
        free-for-all system called "Brawling" and multiple item 
        crafting options.
      </p>

      <p id='aboutPara'>For Diablo's 20th anniversary, it was announced during 
        BlizzCon 2016 that Diablo III would receive a free patch 
        called The Darkening of Tristam that would recreate the 
        original game. The patch contained a 16-level dungeon, four 
        main bosses from the 1996 version and special graphics 
        filters and 8-directions limited movement like the 
        original game. The patch released on November 4, 2016.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Console Development</h2>

      <p id='aboutPara'>On January 10, 2012, Blizzard community manager Bashiok 
        tweeted "Yup. Josh Mosqueira is lead designer for the 
        Diablo III console project" however a Blizzard 
        spokesperson later clarified that Bashiok's tweet was only 
        "intended as a confirmation that Blizzard is actively 
        exploring the possibility of developing a console version 
        of Diablo III," adding, "This is not a confirmation that 
        Diablo III is coming to any console platform."
      </p>

      <p id='aboutPara'>At Sony's Press Conference on February 20, 2013, Chris 
        Metzen announced that Diablo III would release on both 
        PlayStation 3 and PlayStation 4. Activision Blizzard 
        stated in their first-quarter 2013 earnings report, that 
        the PlayStation 3 version of Diablo III would be released 
        in 2013. On June 6, 2013, Blizzard announced that both 
        the PlayStation 3 and Xbox 360 port of the game would be 
        released on September 3, 2013. A PS3 version of the 
        game was published and localized by Square Enix in Japan, 
        released there on January 30, 2014.
      </p>

      <p id='aboutPara'>In August 2013, Diablo III developers stated that they 
        had started on the PlayStation 4 development of the game,                                                                                                                                                                                                                                                                                                                                                                                                                      
        titled Diablo III: Ultimate Evil Edition, and were looking 
        at how to best utilize the new features of the PS4 
        controller, such as the TouchPad and the Share button. 
        In May 2014, Blizzard announced that Diablo III: Ultimate 
        Evil Edition would be released on August 19, bringing the 
        game to the PlayStation 4, Xbox One, PlayStation 3, and 
        Xbox 360. The game runs at a display resolution of 
        1080p on the PlayStation 4 and Xbox One.
      </p>

      <p id='aboutPara'>On June 27, 2017, Diablo III: Eternal Collection, 
        which includes all content from previous expansions, was 
        released for PlayStation 4 and Xbox One. It was later 
        released for the Nintendo Switch as well, which included 
        exclusive content based on Nintendo's The Legend of Zelda 
        series and features Amiibo support.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Reaper of Souls Expansion</h2>

      <p id='aboutPara'>At Gamescom 2013, Diablo III: Reaper of Souls was 
        announced as the first expansion pack for the game. It 
        features the fallen angel of wisdom Malthael as the 
        expansion's main villain and is set in the city of 
        Westmarch, which takes inspiration from many Gothic                                                                                                                                                                 
        medieval locations. The expansion includes a new hero                                                                                                                                                                                                                                                                                                                                                                                                      
        called the Crusader, an increased level cap to level 70, 
        major improvements to loot drops including the ability to 
        change item stats using an enchanting system, the ability 
        to change the look of an item using transmogrification, 
        and an improved Paragon leveling system which is 
        account-wide and does not have a level cap. Reaper of Souls 
        was released on March 25, 2014, for the Windows and macOS 
        versions of Diablo III. The expansion pack content was 
        released as part of the Diablo III: Ultimate Evil Edition 
        version for consoles on August 19 for the PlayStation 4, 
        Xbox One, PlayStation 3, and Xbox 360. That edition 
        expanded the base Diablo III game on the PlayStation 3 and 
        Xbox 360, and brought the game for the first time to the 
        PlayStation 4 and Xbox One. A second expansion was being 
        worked on at the time of Reaper of Soul's release, but was 
        later abandoned by Blizzard with the developers 
        predominantly moving over to World of Warcraft.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Music</h2>

      <p id='aboutPara'>Russell Brower wrote the original score for the game, 
        with additional music being composed by Derek Duke, Glenn 
        Stafford, Joseph Lawrence, Neal Acree, Laurence Juber, and 
        Edo Guidotti. When composing for the orchestra, Brower 
        tried to respect the Wagnerian style from the expansion 
        to the second game in the series, Lord of Destruction. The 
        Overture is considered the main theme of the game and it 
        has been performed by the Eminence Symphony Orchestra, and 
        was released on iTunes in 2009, as a single. A similar 
        composition was used in the cinematic teaser trailer of 
        the game. The Tristram theme from the first Diablo, also 
        used in the second game, is present in Diablo III with 
        some changes. Irish choral ensemble 
        Anúna also feature on the soundtrack. Brower stated 
        that "Working somewhat against conventional expectations, 
        Hell is a beautiful and seductive sound, provided by 
        Dublin’s uniquely astounding choral group ANÚNA". A full 
        soundtrack was released on iTunes at the same time of 
        the game's release, as well as part of the Collector's 
        Edition of the game.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Marketing and Release</h2>

      <p id='aboutPara'>Diablo III was released on May 15, 2012. Players had 
        the options to buy one of two retail boxed versions, a 
        standard edition and collector's edition, or could also 
        pre-order directly from Battle.net and download the 
        installer in advance. On May 14, 2012, players who bought 
        the downloadable version from Battle.net could install 
        the rest of the game including patches. On 
        May 15, 2012, the retail version could be bought from 
        stores doing midnight launches such as GameStop. The 
        Diablo III Battle.net servers went live at this point, 
        people who downloaded the game could begin playing. 
        Initially the launches were hindered by heavy server 
        load with many users getting various errors, including 
        the error 37 which reads; "The servers are busy at this 
        time. Please try again later". These issues made the game 
        unplayable for those affected, while some others 
        experienced in-game bugs. Despite assurances 
        from Blizzard that the problems leading to the connection 
        errors during Diablo III's launch had been resolved, 
        Eurogamer reported on May 31, 2012, that these errors 
        were still ongoing, and had reappeared after patch 1.0.2 
        was released for the game. Many fans complained that the 
        ongoing problems had caused them to lose their 
        hardcore (permanent death) characters. In South Korea, 
        players waited up to 36 hours to purchase the collector's 
        edition.
      </p>

      <p id='aboutPara'>The release was also the source of a minor controversy 
        in Australia when retailer Game went into voluntary 
        administration the day before the release, and so was 
        unable to honor pre-orders or offer refunds. In 
        response to this, Blizzard Entertainment offered affected 
        customers credit in purchasing the digital version of the 
        game. On April 23, 2015, the game was released in 
        China as it was approved by the Ministry of Culture. It 
        used to be sold under the name "Big Pineapple" (大菠萝 Dɑ 
        Boluo) which sounds similar to Diablo in Mandarin Chinese 
        in order to dodge the sales ban.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>World of Warcraft Promotion</h2>

      <p id='aboutPara'>Starting at BlizzCon in October 2011, Blizzard offered 
        an "annual pass" for World of Warcraft, where players who 
        signed up for a 12-month subscription to that game 
        received a free digital copy of Diablo III once released, 
        as well as guaranteed beta access for the Mists of 
        Pandaria expansion to World of Warcraft and a special 
        Diablo-inspired mount called Tyrael's Charger in World of 
        Warcraft.
      </p>

      <p id='aboutPara'>A demo version of the game, called the Starter Edition, 
        was released simultaneously with the full release. It 
        provides a limited introduction to the game where players 
        can complete Act 1 up to the Skeleton King boss encounter 
        with a level cap of 13. Originally after Diablo III's 
        release the Starter Edition was only available through a 
        guest pass code, which was included with the boxed 
        versions of the game. Players have the option to upgrade 
        to the full game through their Battle.net accounts. The 
        Starter Edition became available to all users a few months 
        after release on August 15, 2012.
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Reception</h2>

      <p id='aboutPara'>Diablo III received "generally positive reviews" from 
        critics, according to review aggregator Metacritic. 
        GamesRadar+ was positive about the game's opening act and 
        its nods to past Diablo games saying "we liked what we 
        saw". IGN was positive about the new skill system 
        stating "Instead of gameplay like Diablo II, where I often 
        regretted how I allotted my ability points, Diablo III 
        encourages experimentation and finding out exactly what 
        works for your play-style. It's a vastly superior way to 
        handle character abilities", and praised the overall 
        gameplay, stating "the new systems really do make it a lot 
        easier to enjoy Diablo III". IGN further praised the 
        game's new gameplay design, in particular the rune and 
        loot systems, the randomly generated levels and the game's 
        enjoyable unpredictability. It stated the game's feel is 
        quite intuitive and also praised the game's sound and 
        voicing.
      </p>

      <p id='aboutPara'>Rock, Paper, Shotgun gave mixed commentary during the 
        game's beta period, praising the actual game itself by 
        stating that it is much more direct than its predecessors 
        and intuitive in its interface. However, it said the 
        playing experience is spoiled due to lag in single-player 
        mode caused by a lack of an offline single-player mode. 
        Following the game's release, it reaffirmed its displeasure 
        at the always-online DRM and offered a mixed opinion that 
        the game was enjoyable but added "nothing new" to 
        its genre.
      </p>

      <p id='aboutPara'>Users have voiced criticism about the game's strong 
        digital rights management which requires what is known as 
        persistent online authentication, resulting in the lack of 
        an offline single-player mode. Erik Kain, a Forbes 
        contributing writer, stated that the requirement to remain 
        online is not necessary for single-player mode and that 
        Blizzard is abusing its position as a "juggernaut" and is 
        setting a worrying precedent for the gaming industry. In 
        response to questions about the lack of offline 
        single-player, Diablo III senior producer Alex Mayberry 
        said, "Obviously StarCraft II did it, World of Warcraft 
        authenticates also. It's kind of the way things are, these 
        days. The world of gaming is not the same as it was when 
        Diablo II came out."
      </p>

      <p id='aboutPara'>Gaming Blend supported the game's fanbase (referring to 
        the user ratings on Metacritic and Amazon) and rejected 
        counter-criticisms of the community. It claims that the 
        gaming industry at large is far too defensive of production 
        companies' actions, to the point of accepting backward 
        steps in game availability. William Usher, the article's 
        author said, "Journalists should have been acknowledging 
        consumer distaste rather than fueling it with pro-corporate 
        pandering." While Gaming Blend disliked the 
        always-online DRM, it did give the game a positive review. 
        It stated the game includes interesting opportunities for 
        experimentation and has great appeal for replaying over 
        and over. The review concluded the game is "smooth and 
        entertaining". A GameArena critic questioned how 
        Blizzard managed to "fail so spectacularly at creating 
        reliable networking for Diablo 3" before going on to point 
        out the lack of competitive multiplayer.
      </p>

      <p id='aboutPara'>Many users criticized the art direction as it was 
        considered too bright and colourful in contrast to the 
        darker atmosphere of the previous releases. This led to 
        petitions demanding Blizzard to change the design. The 
        lead producer Keith Lee responded to these criticisms and 
        explaining the design choices by stating that "We feel 
        that color actually helps to create a lot of highlights in 
        the game so that there is contrast." He also highlighted 
        that unlike the previous games, the players explore 
        outdoors.
      </p>

      <p id='aboutPara'>The Black Soulstone footage won the 'Outstanding Visual 
        Effects in an Animated Commercial or Video Game Trailer' 
        award from the Visual Effects Society. The Switch version 
        was nominated for the Freedom Tower Award for Best Remake 
        at the New York Game Awards 2019.
      </p>

      <p id='aboutPara'>The 2012 PC release of Diablo III received nominations 
        for "Role-Playing/Massively Multiplayer Game of the Year", 
        "Outstanding Achievement in Online Gameplay", "Outstanding 
        Achievement in Original Music Composition" and "Outstanding 
        Achievement in Sound Design" at the 16th Annual D.I.C.E. 
        Awards. A year later at the 17th Annual D.I.C.E. 
        Awards, the 2013 console version of Diablo III won the 
        award for "Role-Playing/Massively Multiplayer Game of the 
        Year", along with a nomination for "Online Game of 
        the Year".
      </p>

      <br/><br/>

      <h2 id='aboutSubTitle'>Sales</h2>

      <p id='aboutPara'>Before its release, Diablo III broke several presale 
        records and became the most pre-ordered PC game to date on 
        Amazon. Activision Blizzard reported that Diablo III 
        had broken the one-day PC sales records, accumulating over 
        3.5 million sales in the first 24 hours after release and 
        over 6.3 million sales in its first week, including the 
        1.2 million people who obtained Diablo III through the 
        World of Warcraft annual pass. On its first day, the 
        game amassed 4.7 million players worldwide, an estimate 
        which includes those who obtained the game via the World 
        of Warcraft annual pass. In its 2012 second quarter 
        report, Diablo III was reported to have pushed Activision 
        Blizzard's expectations and as of July 2012, more than 10 
        million people had played the game. Diablo III 
        remains the fastest selling PC game to date, and also one 
        of the best-selling PC video games. As of the end of 2012, 
        it had sold more than 12 million copies, and as of 
        March 2013, Blizzard stated that Diablo III had around 1 
        million daily players, with 3 million unique players each 
        month. By May 2013, Diablo III had been played by 
        14.5 million unique players. and had sold over 30 
        million copies worldwide by August 2015.
      </p>

    </div>
  )
}

export default About