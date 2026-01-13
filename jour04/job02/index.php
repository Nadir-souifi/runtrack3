<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 02 - JSON Value Key</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 3px solid #4CAF50;
            padding-bottom: 10px;
        }
        .input-group {
            margin: 20px 0;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        textarea, input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: monospace;
            font-size: 14px;
            box-sizing: border-box;
        }
        textarea {
            min-height: 150px;
            resize: vertical;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
        }
        button:hover {
            background-color: #45a049;
        }
        .result {
            margin-top: 20px;
            padding: 15px;
            background-color: #e8f5e9;
            border-left: 4px solid #4CAF50;
            border-radius: 4px;
            display: none;
        }
        .error {
            background-color: #ffebee;
            border-left-color: #f44336;
        }
        .result-text {
            font-family: monospace;
            font-size: 16px;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Job 02 - Extraction de valeur JSON</h1>
        
        <div class="input-group">
            <label for="jsonString">Chaîne JSON :</label>
            <textarea id="jsonString" placeholder='{"name": "La Plateforme_", "city": "Marseille"}'>{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}</textarea>
        </div>
        
        <div class="input-group">
            <label for="key">Clé à rechercher :</label>
            <input type="text" id="key" placeholder="city" value="city">
        </div>
        
        <button id="searchButton">Rechercher la valeur</button>
        
        <div id="result" class="result">
            <strong>Résultat :</strong>
            <p class="result-text" id="resultText"></p>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>