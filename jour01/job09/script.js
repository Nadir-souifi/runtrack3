function tri(numbers, order) {
    // Vérifie que le paramètre "order" est correct
    if (order === "asc") {
        // Tri ascendant (du plus petit au plus grand)
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Tri descendant (du plus grand au plus petit)
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Paramètre 'order' invalide. Utilisez 'asc' ou 'desc'.");
        return null;
    }

    return numbers;
}

// 🔍 Tests dans la console
console.log("Tri ascendant :", tri([5, 2, 8, 1, 3], "asc"));   // [1, 2, 3, 5, 8]
console.log("Tri descendant :", tri([5, 2, 8, 1, 3], "desc")); // [8, 5, 3, 2, 1]
console.log("Paramètre invalide :", tri([1, 2, 3], "xyz"));    // null + message erreur
