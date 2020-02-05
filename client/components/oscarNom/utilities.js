const categories = [
  'best-picture',
  'lead-actor',
  'lead-actress',
  'supporting-actor',
  'supporting-actress',
  'best-director',
  'animated-feature',
  'short-animted-feature',
  'adapted-screenplay',
  'original-screenplay',
  'cinematography',
  'documentary-feature',
  'documentary-short-subject',
  'live-action-short',
  'international-feature',
  'film-editing',
  'sound-editing',
  'sound-mixing',
  'production-design',
  'original-score',
  'original-song',
  'hair-and-makeup',
  'costume-design',
  'visual-effects'
]

const capitalize = str => {
  let wordArr = str.split('-')
  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i]
    let upperFirst = word[0].toUpperCase()
    let restofWord = word.slice(1)
    wordArr[i] = `${upperFirst}${restofWord}`
  }

  return wordArr.join(' ')
}

module.exports = {
  categories,
  capitalize
}
