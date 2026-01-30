import $ from 'jquery'
import { formatUntil, getNextChristmas } from '../utils/date'

interface Item {
  id: number
  name: string
}

let items: Item[] = []
let nextId: number = 1

$('#xmasCountdown').text(formatUntil(getNextChristmas()))

function renderItems(): void {
  const $table = $('#itemsTable')
  
  if (items.length === 0) {
    $table.html('<tr><td colspan="3" class="text-center text-muted">No items yet. Add one!</td></tr>')
    return
  }
  
  const rows = items.map(item => `
    <tr data-id="${item.id}">
      <td>${item.id}</td>
      <td class="item-name">${item.name}</td>
      <td>
        <button class="btn btn-xs btn-warning edit-btn">Edit</button>
        <button class="btn btn-xs btn-danger delete-btn">Delete</button>
      </td>
    </tr>
  `).join('')
  
  $table.html(rows)
}

// Create
$('#addForm').on('submit', function(e: JQuery.SubmitEvent): void {
  e.preventDefault()
  const $input = $('#itemName')
  const name = $input.val() as string
  
  if (name.trim()) {
    items.push({ id: nextId++, name: name.trim() })
    $input.val('')
    renderItems()
  }
})

// Delete
$('#itemsTable').on('click', '.delete-btn', function(): void {
  const id = $(this).closest('tr').data('id') as number
  items = items.filter(item => item.id !== id)
  renderItems()
})

// Edit
$('#itemsTable').on('click', '.edit-btn', function(): void {
  const $row = $(this).closest('tr')
  const id = $row.data('id') as number
  const item = items.find(i => i.id === id)
  
  if (item) {
    const newName = prompt('Edit item name:', item.name)
    if (newName !== null && newName.trim()) {
      item.name = newName.trim()
      renderItems()
    }
  }
})

console.log('CRUD Testing page initialized!')
