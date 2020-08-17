export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
  }

  select($el) {
    this.clear()
    this.group.push($el)
    $el.focus().addClass(TableSelection.className)
    this.current = $el
  }

  selectGroup($group) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }

  clear() {
    this.group.forEach($c => $c.removeClass('selected'))
    this.group = []
  }
}
