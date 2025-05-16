// Splash screen transition
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('login-page').classList.add('active');
  }, 3500);
});

// Login form
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Could add real auth here; for now just proceed
  document.getElementById('login-page').classList.remove('active');
  document.getElementById('main-page').classList.add('active');
});

// Expense tracker functionality
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseTitleInput = document.getElementById('expense-title');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseTbody = document.getElementById('expense-tbody');
const totalAmountSpan = document.getElementById('total-amount');

let totalAmount = 0;

addExpenseBtn.addEventListener('click', () => {
  const title = expenseTitleInput.value.trim();
  const amountStr = expenseAmountInput.value.trim();
  const amount = parseFloat(amountStr);

  if (!title) {
    alert('Please enter an expense title.');
    return;
  }
  if (!amountStr || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid positive amount.');
    return;
  }

  // Get current date
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  // Create table row
  const tr = document.createElement('tr');

  const tdTitle = document.createElement('td');
  tdTitle.textContent = title;
  tr.appendChild(tdTitle);

  const tdAmount = document.createElement('td');
  tdAmount.textContent = `₹${amount.toFixed(2)}`;
  tr.appendChild(tdAmount);

  const tdDate = document.createElement('td');
  tdDate.textContent = formattedDate;
  tr.appendChild(tdDate);

  expenseTbody.appendChild(tr);

  // Update total
  totalAmount += amount;
  totalAmountSpan.textContent = totalAmount.toFixed(2);

  // Clear inputs
  expenseTitleInput.value = '';
  expenseAmountInput.value = '';
  expenseTitleInput.focus();
});
