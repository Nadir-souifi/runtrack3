document.addEventListener('DOMContentLoaded', function () {
  const updateBtn = document.getElementById('update');
  
  if (updateBtn) {
    updateBtn.addEventListener('click', function () {
      fetch('users.php')
        .then(resp => {
          if (!resp.ok) throw new Error('Network response was not ok');
          return resp.json();
        })
        .then(users => {
          const tbody = document.getElementById('tableBody');
          if (tbody) {
            tbody.innerHTML = '';
            if (Array.isArray(users) && users.length > 0) {
              users.forEach(u => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${u.id}</td><td>${u.nom}</td><td>${u.prenom}</td><td>${u.email}</td>`;
                tbody.appendChild(tr);
              });
            }
          }
        })
        .catch(err => console.error('Erreur:', err));
    });
  }
});
