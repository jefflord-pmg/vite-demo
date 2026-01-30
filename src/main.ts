import './style.css'
import $ from 'jquery'

let count: number = 0

$('#alertBtn').on('click', function(): void {
  alert('jQuery is working! Version: ' + $.fn.jquery)
})

$('#incrementBtn').on('click', function(): void {
  count++;

  console.log('Count incremented to:', count);
  $("#jqueryVersion").val(count.toString());

  $('#counter').text(count.toString())
})

$('#resetBtn').on('click', function(): void {
  count = 0
  $('#counter').text(count.toString())
})

console.log('jQuery version:', $.fn.jquery)
console.log('App initialized with TypeScript!')
