import Sun from '../../assets/sun.jpg'
import Moon from '../../assets/moon.jpg'
import Earth from '../../assets/earth.jpg'
import Mars from '../../assets/mars.jpg'
import Mercury from '../../assets/mercury.jpg'
import Neputne from '../../assets/neputne.jpg'
import Saturn from '../../assets/saturn.jpg'
import Venus from '../../assets/venus.jpg'
import Jupiter from '../../assets/Jupiter.jpg'
import Uranus from '../../assets/uranus.jpg'
import EarthAudio from '../../audio/earth.mp3'
import JupiterAudio from '../../audio/jupiter.mp3'
import MarsAudio from '../../audio/mars.mp3'
import MercuryAudio from '../../audio/mercury.mp3'
import MoonAudio from '../../audio/moon.mp3'
import NeputenAudio from '../../audio/neptune.mp3'
import SaturnAudio from '../../audio/saturn.mp3'
import SunAudio from '../../audio/sun.mp3'
import UranusAudio from '../../audio/uranus.mp3'
import VenusAudio from '../../audio/venus.mp3'


export const planetData=[
  {
    'id':"1",
    'title':'Earth', 
    'audio': EarthAudio,
    'image':Earth,
    'type':'Terrestrial',
    'about':`
     Earth—our home planet—is the only place we know of so far that’s
     inhabited by living things. It's also the only planet in our solar 
     system with liquid water on the surface.Earth is only the fifth 
     largest planet in the solar system, just slightly larger than nearby 
     Venus. Earth is the biggest of the four planets closest to the Sun, 
     all of which are made of rock and metal. NASA has the most missions 
     of all operating on our home planet. NASA’s Earth Observing System 
     (EOS) is a coordinated series of polar-orbiting and low inclination 
     satellites for long-term global observations of the land surface, 
     biosphere, solid Earth,
    `
  },
  {
    'id':"2",
    'title':'Moon',  
    'audio': MoonAudio,
    'image':Moon,
    'type':"Moon of EarthEarth's",
    'about':`
     Moon is the only place beyond Earth where humans have set foot.
     The brightest and largest object in our night sky, the Moon 
     makes Earth a more livable planet by moderating our home planet's 
     wobble on its axis, leading to a relatively stable climate. It 
     also causes tides, creating a rhythm that has guided humans for 
     thousands of years.Our moon is the fifth largest of the 190+ moons 
     orbiting planets in our solar system.
    `

  },
  {
    'id':"3",
    'title':'Sun',   
    'audio': SunAudio,
    'image':Sun,
    'type':'Yellow Dwarf Star',
    'about':`
      The Sun—the heart of our solar system—is a yellow dwarf star, 
      a hot ball of glowing gases.Its gravity holds the solar system 
      together, keeping everything from the biggest planets to the 
      smallest particles of debris in its orbit. Electric currents in 
      the Sun generate a magnetic field that is carried out through the 
      solar system by the solar wind—a stream of electrically charged 
      gas blowing outward from the Sun in all directions.
    `
  },
  {
    'id':"4",
    'title':'Mars',  
    'audio': MarsAudio,
    'image':Mars,
    'type':'Terrestrial',
    'about':`
     The fourth planet from the Sun, Mars is a dusty, cold, desert world 
     with a very thin atmosphere.Mars was named by the ancient Romans for 
     their god of war because its reddish color was reminiscent of blood. 
     The Red Planet is actually many colors. At the surface we see colors 
     such as brown, gold and tan. The reason Mars looks reddish is due to 
     oxidization—or rusting—of iron in the rocks, regolith (Martian “soil”), 
     and dust of Mars. This dust gets kicked up into the atmosphere and from 
     a distance 
    `
  },
  {
    'id':"5",
    'title':'Mercury', 
    'audio': MercuryAudio,
    'image':Mercury,
    'type':'Terrestrial',
    'about':`
      The smallest planet in our solar system and nearest to the Sun, Mercury
      is only slightly larger than Earth's Moon.Mercury's surface temperatures 
      are both extremely hot and cold. Because the planet is so close to the Sun, 
      day temperatures can reach highs of 800°F (430°C). Without an atmosphere to 
      retain that heat at night, temperatures can dip as low as -290°F (-180°C). 
      From the surface of Mercury, the Sun would appear more than three times as 
      large as it does when viewed from Earth, and the sunlight would be as much 
      as seven times brighter.
    `
  },
   {
    'id':"6",
    'title':'Neputne', 
    'audio': NeputenAudio,
    'image':Neputne,
    'type':'Ice GiantDark',
    'about':`
       cold and whipped by supersonic winds, ice giant Neptune is the eighth 
       and most distant planet in our solar system.More than 30 times as far 
       from the Sun as Earth, Neptune is the only planet in our solar system 
       not visible to the naked eye. In 2011 Neptune completed its first 165-year 
       orbit since its discovery in 1846.Neptune is so far from the Sun that 
       high noon on the big blue planet would seem like dim twilight to us. 
       The warm light we see here on our home planet is roughly 900 times as bright 
       as sunlight on Neptune. Neptune is one of two ice giants in the outer 
       solar system.
    `
  },
  {
    'id':"7",
    'title':'Saturn',  
    'audio': SaturnAudio,
    'image':Saturn,
    'type':' Gas Giant',
    'about':`
        Saturn is the sixth planet from the Sun and the second largest planet 
        in our solar system. Adorned with thousands of beautiful ringlets, 
        Saturn is unique among the planets. It is not the only planet to have 
        rings—made of chunks of ice and rock—but none are as spectacular or as 
        complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a 
        massive ball made mostly of hydrogen and helium.Surrounded by more than 
        140 known moons, Saturn is home to some of the most fascinating landscapes 
        in our solar system. From the jets of water that spray from Enceladus to 
        the methane lakes on smoggy Titan.
    `
  },
  {
    'id':"8",
    'title':'Venus',   
    'audio': VenusAudio,
    'image':Venus,
    'type':'Terrestrial',
    'about':`
       Similar in size and structure to Earth, Venus has been called 
       Earth's twin. These are not identical twins, however – there 
       are radical differences between the two worlds.Venus and Earth 
       are similar in size, mass, density, composition, and gravity. 
       There, however, the similarities end. Venus has a thick, toxic 
       atmosphere filled with carbon dioxide and it’s perpetually 
       shrouded in thick, yellowish clouds of mostly sulfuric acid that 
       trap heat, causing a runaway greenhouse effect. It’s the hottest 
       planet in our solar system, even though Mercury is closer to the Sun
    `
  },
  {
    'id':"9",
    'title':'Jupiter', 
    'audio': JupiterAudio,
    'image':Jupiter,
    'type':'Gas Giant',
    'about':`
        Jupiter is the fifth planet from our Sun and is, by far, the largest planet 
        in the solar system – more than twice as massive as all the other planets 
        combined.Jupiter's stripes and swirls are actually cold, windy clouds of 
        ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s 
        iconic Great Red Spot is a giant storm bigger than Earth that has raged for 
        hundreds of years. Jupiter is surrounded by dozens of moons. Jupiter also has 
        several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very 
        faint and made of dust, not ice. Jupiter has the shortest day in the solar system.
    `
  },
  {
    'id':"10",
    'title':'Uranus', 
    'audio': UranusAudio,
    'image':Uranus,
    'type':'Ice Giant',
    'about':`
        The seventh planet from the Sun with the third largest diameter in our solar system, 
        Uranus is very cold and windy.The ice giant is surrounded by 13 faint rings and 27 
        small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. 
        This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a 
        rolling ball. Uranus is the only planet whose equator is nearly at a right angle to 
        its orbit, with a tilt of 97.77 degrees—possibly the result of a collision with an 
        Earth-sized object long ago. This unique tilt causes the most extreme seasons in the 
        solar system. For nearly a quarter of each Uranian year, the Sun shines directly over 
        each pole, plunging the other half of the planet into a 21-year-long, dark winter
    `
  },
 
]













export const planetSizeData=[
  {
    'id':"1",
    'title':'Mercury', 
    'xRadius':4,
    'zRadius':4,
    'size':1,
    'image':Mercury,
   
  },

  {
    'id':"2",
    'title':'Venus', 
    'xRadius':7,
    'zRadius':7,
    'size':1,
    'image':Venus,
   
  },

  {
    'id':"3",
    'title':'Earth', 
    'xRadius':10,
    'size':1.2,
    'zRadius':10,
    'image':Earth,
   
  },
  {
    'id':"4",
    'title':'Mars', 
    'xRadius':14,
    'size':1.4,
    'zRadius':14,
    'image':Mars,
   
  },

   {
    'id':"4",
    'title':'Jupiter', 
    'xRadius':20,
    'size':2,
    'zRadius':20,
    'image':Jupiter,
   
  },

  {
    'id':"4",
    'title':'Saturn', 
    'xRadius':26,
    'size':1.7,
    'zRadius':26,
    'image':Saturn,
  },
  
   {
    'id':"5",
    'title':'Uranus', 
    'xRadius':30,
    'size':1.6,
    'zRadius':30,
    'image':Uranus,
  },
   
   {
    'id':"6",
    'title':'Neptune', 
    'xRadius':35,
    'size':1.6,
    'zRadius':35,
    'image':Neputne,
  },
]




