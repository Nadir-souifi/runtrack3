<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Job 03</title>
</head>
<body>
  <form id="filterForm">
    <label>id: <input type="text" id="id"></label>
    <label>nom: <input type="text" id="nom"></label>
    <label>type:
      <select id="type">
        <option value="">-- Tous --</option>
        <option value="Plante">Plante</option>
        <option value="Feu">Feu</option>
        <option value="Eau">Eau</option>
      </select>
    </label>
    <input type="button" id="filtrer" value="filtrer">
  </form>
  <div id="results"></div>
  <script src="script.js"></script>
</body>
</html>
