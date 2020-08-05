function toCell() {
  return `
       <div class="cell" contenteditable=""></div>
    `
}

function toColumn(col) {
  return `
        <div class="column">${col}</div>
    `
}

function createRaw(index, content) {
  return `
     <div class="row">

        <div class="row-info">${index ? index : ''}</div>

        <div class="row-data">${content}</div>
        
    </div>
    `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}
const CODES = {
  A: 65,
  Z: 90
}

export function createTable(rawCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const raw = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  raw.push(createRaw(null, cols))

  for (let i = 0; i < rawCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    raw.push(createRaw(i + 1, cells))
  }

  return raw.join('')
}
