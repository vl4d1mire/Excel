function toCell(cell, col) {
  return `
       <div class="cell" contenteditable="" data-col="${col}"></div>
    `
}

function toColumn(col, index) {
  return `
        <div class="column" data-type="resizable" data-col="${index}">
          ${col}
          <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRaw(index, content) {
  const resize = index
      ? `<div class="row-resize" data-resize="row"></div>`
      : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
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
