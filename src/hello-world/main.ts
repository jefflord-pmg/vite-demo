import '../style.less'
import $ from 'jquery'
import { formatUntil, getNextChristmas } from '../utils/date'

let count: number = 0

function isPrimeNumber(n: number): boolean {
  if (n <= 1) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true;
}

$('#xmasCountdown').text(formatUntil(getNextChristmas()))

$('#alertBtn').on('click', function(): void {
  alert('jQuery is working! Version: ' + $.fn.jquery)
})

$('#incrementBtn').on('click', function(): void {
  count++;

  console.log('Count incremented to:', count);
  $("#txtCounter").val(count.toString() + "-" + (isPrimeNumber(count) ? "Prime" : "Not Prime")  );

  $('#counter').text(count.toString())
})

$('#resetBtn').on('click', function(): void {
  count = 0
  $('#counter').text(count.toString())
})

console.log('jQuery version:', $.fn.jquery)
console.log('App initialized with TypeScript!')
$("#txtCounter").val("INITIAL TEXT");
