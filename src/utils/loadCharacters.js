// bronze saints
import andromeda from '../assets/images/saints/bronze/Andromeda_Shun.webp'
import bear from '../assets/images/saints/bronze/Bear_Geki.webp'
import chamaeleon from '../assets/images/saints/bronze/Chamaeleon_June.webp'
import cygnus from '../assets/images/saints/bronze/Cignus_Hyoga.webp'
import dragon from '../assets/images/saints/bronze/Dragon_Shiryuu.webp'
import fenix from '../assets/images/saints/bronze/Fenix_Ikki.webp'
import hydra from '../assets/images/saints/bronze/Hydra_Ichi.webp'
import lionet from '../assets/images/saints/bronze/Lionet_Ban.webp'
import pegasus from '../assets/images/saints/bronze/Pegasus_Seiya.webp'
import unicorn from '../assets/images/saints/bronze/Unicorn_Jabu.webp'
import wolf from '../assets/images/saints/bronze/Wolf_Nachi.webp'

// silver saints
import auriga from '../assets/images/saints/silver/Auriga_Capella.webp'
import canismaior from '../assets/images/saints/silver/CanisMaior_Sirius.webp'
import centaurus from '../assets/images/saints/silver/Centaurus_Babel.webp'
import cerberus from '../assets/images/saints/silver/Cerberus_Dante.webp'
import crow from '../assets/images/saints/silver/Crow_Jamian.webp'
import eagle from '../assets/images/saints/silver/Eagle_Marin.webp'
import hercules from '../assets/images/saints/silver/Hercules_Alghetti.webp'
import hound from '../assets/images/saints/silver/Hound_Asterion.webp'
import lizard from '../assets/images/saints/silver/Lizard_Misty.webp'
import musca from '../assets/images/saints/silver/Musca_Dio.webp'
import ophiucus from '../assets/images/saints/silver/Ophiucus_Shina.webp'
import perseus from '../assets/images/saints/silver/Perseus_Algol.webp'
import sagitta from '../assets/images/saints/silver/Sagitta_Ptolemy.webp'
import whale from '../assets/images/saints/silver/Whale_Moses.webp'

// gold saints
import aquarius from '../assets/images/saints/gold/Aquarius_Camus.webp'
import aries from '../assets/images/saints/gold/Aries_Mu.webp'
import cancer from '../assets/images/saints/gold/Cancer_Deathmask.webp'
import capricorn from '../assets/images/saints/gold/Capricorn_Shura.webp'
import gemini from '../assets/images/saints/gold/Gemini_Saga.webp'
import leo from '../assets/images/saints/gold/Leo_Aioria.webp'
import libra from '../assets/images/saints/gold/Libra_Dohko.webp'
import pisces from '../assets/images/saints/gold/Pisces_Aphrodite.webp'
import sagittarius from '../assets/images/saints/gold/Sagittarius_Aioros.webp'
import scorpio from '../assets/images/saints/gold/Scorpio_Milo.webp'
import taurus from '../assets/images/saints/gold/Taurus_Aldebaran.webp'
import virgo from '../assets/images/saints/gold/Virgo_Shaka.webp'

const allCharacters =
  [{
    // Bronze
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: andromeda,
    name: 'Andromeda',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: bear,
    name: 'Bear',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: chamaeleon,
    name: 'Chamaeleon',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: cygnus,
    name: 'Cygnus',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: dragon,
    name: 'Dragon',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: fenix,
    name: 'Fenix',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: hydra,
    name: 'Hydra',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: lionet,
    name: 'Lionet',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: pegasus,
    name: 'Pegasus',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: unicorn,
    name: 'Unicorn',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'bronze',
    image: wolf,
    name: 'Wolf',
    clicked: false
  },
  // SILVER
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: auriga,
    name: 'Auriga',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: canismaior,
    name: 'Canismaior',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: centaurus,
    name: 'Auriga',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: cerberus,
    name: 'Cerberus',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: crow,
    name: 'Crow',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: eagle,
    name: 'Eagle',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: hercules,
    name: 'Hercules',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: hound,
    name: 'Hound',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: lizard,
    name: 'Lizard',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: musca,
    name: 'Musca',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: ophiucus,
    name: 'Ophiucus',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: perseus,
    name: 'Perseus',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: sagitta,
    name: 'Sagitta',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'silver',
    image: whale,
    name: 'Whale',
    clicked: false
  },
  // GOLD
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: aquarius,
    name: 'Aquarius',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: aries,
    name: 'Aries',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: cancer,
    name: 'Cancer',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: capricorn,
    name: 'Capricorn',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: gemini,
    name: 'Gemini',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: leo,
    name: 'Leo',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: libra,
    name: 'Libra',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: pisces,
    name: 'Pisces',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: sagittarius,
    name: 'Sagittarius',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: scorpio,
    name: 'Scorpio',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: taurus,
    name: 'Taurus',
    clicked: false
  },
  {
    id: crypto.randomUUID(),
    cloth: 'gold',
    image: virgo,
    name: 'Virgo',
    clicked: false
  }
  ]

function selectCharacters (cloth, difficult) {
  const cloths = ['bronze', 'silver', 'gold', 'mixed']
  const difficults = [
    {
      difficult: 'easy',
      characters: 4
    },
    {
      difficult: 'normal',
      characters: 6
    },
    {
      difficult: 'hard',
      characters: 10
    }]
  if (!cloths.includes(cloth)) throw new Error('Wrong cloth selection')
  if (!difficults.some(d => d.difficult === difficult)) throw new Error('Wrong difficult selection')

  let characters
  if (cloth === 'mixed') { characters = structuredClone(allCharacters) } else { characters = structuredClone(allCharacters).filter(char => char.cloth === cloth) }

  const shuffledCharacters = shuffleArray(characters)
  let size
  difficults.forEach(dif => {
    if (dif.difficult === difficult) { size = dif.characters }
  })

  return shuffledCharacters.slice(0, size)
}

function shuffleArray (array) {
  const outArr = [...array]
  for (let i = outArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = outArr[i]
    outArr[i] = outArr[j]
    outArr[j] = tmp
  }
  return outArr
}

export {
  selectCharacters,
  shuffleArray
}
