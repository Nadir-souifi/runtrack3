document.getElementById('filtrer').addEventListener('click', function () {
  fetch('pokemon.json')
    .then(resp => {
      if (!resp.ok) throw new Error('Network response was not ok');
      return resp.json();
    })
    .then(pokemons => {
      const idFilter = document.getElementById('id').value.trim();
      const nomFilter = document.getElementById('nom').value.trim().toLowerCase();
      const typeFilter = document.getElementById('type').value;

      const results = pokemons.filter(p => {
        if (idFilter && String(p.id) !== idFilter) return false;
        if (nomFilter && !p.nom.toLowerCase().includes(nomFilter)) return false;
        if (typeFilter && (!p.type || p.type.indexOf(typeFilter) === -1)) return false;
        return true;
      });

      const container = document.getElementById('results');
      container.innerHTML = '';
      if (results.length === 0) {
        container.textContent = 'Aucun résultat.';
        return;
      }
      const ul = document.createElement('ul');
      results.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.id} - ${p.nom} - ${p.type.join(', ')}`;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    })
    .catch(err => console.error(err));
});
