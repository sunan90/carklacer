// Login function
function login(username, password) {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  });
}

// GET checklist data with token
function loadChecklist() {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login first');
    window.location.href = 'index.html';
    return;
  }

  fetch('/api/checklist', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(response => {
    if (response.status === 401 || response.status === 403) {
      alert('Session expired or unauthorized. Please login again.');
      localStorage.removeItem('token');
      window.location.href = 'index.html';
      return;
    }
    return response.json();
  })
  .then(data => {
    if (!data) return;
    const checklistContainer = document.getElementById('checklistContainer');
    checklistContainer.innerHTML = '';

    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'checklist-item';
      div.innerHTML = `
        <label>
          <input type="checkbox" ${item.status === 'done' ? 'checked' : ''} 
            onchange="updateChecklist(${item.id}, this.checked)">
          ${item.nama} - ${item.task}
        </label>
      `;
      checklistContainer.appendChild(div);
    });
  });
}

// UPDATE checklist status with token
function updateChecklist(id, isChecked) {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login first');
    window.location.href = 'index.html';
    return;
  }

  fetch(`/api/checklist/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ status: isChecked ? 'done' : 'pending' })
  })
  .then(() => loadChecklist());
}

// Login form submit handler
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginError = document.getElementById('loginError');

  if (!username) {
    loginError.textContent = 'Pilih nama pegawai atau admin!';
    return;
  }

  login(username, password)
    .then(data => {
      localStorage.setItem('token', data.token);
      if (username === 'admin') {
        window.location.href = 'rekap.html';
      } else {
        window.location.href = 'dashboard.html';
      }
    })
    .catch(() => {
      loginError.textContent = 'Username atau password salah!';
    });
});

window.onload = loadChecklist;
