const deque = [];

function visualizeDeque() {
  const dequeItems = document.getElementById('deque-items');
  dequeItems.innerHTML = '';

  for (let i = 0; i < deque.length; i++) {
    const dequeItem = document.createElement('div');
    dequeItem.innerText = deque[i];
    dequeItems.appendChild(dequeItem);
  }
}

function enqueueFront() {
  const value = document.getElementById('input-value').value;
  if (value) {
    deque.unshift(value);
    visualizeDeque();
  }
}

function dequeueFront() {
  if (deque.length > 0) {
    deque.shift();
    visualizeDeque();
  }
}

function enqueueRear() {
  const value = document.getElementById('input-value').value;
  if (value) {
    deque.push(value);
    visualizeDeque();
  }
}

function dequeueRear() {
  if (deque.length > 0) {
    deque.pop();
    visualizeDeque();
  }
}

function clearDeque() {
  deque.length = 0;
  visualizeDeque();
}
