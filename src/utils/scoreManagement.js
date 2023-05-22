// Get best score
function getLocalScore () {
  const score = JSON.parse(localStorage.getItem('bestScore'))
  if (typeof score !== 'number' || Number.isNaN(score)) { return 0 }
  return Number(score)
}

// Set new best score
function setLocalScore (score) {
  if (typeof score !== 'number') { throw new Error() }
  localStorage.setItem('bestScore', JSON.stringify(score))
}

export {
  getLocalScore,
  setLocalScore
}
