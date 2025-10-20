function bisextile(annee) {
    // Une année est bisextile si elle est divisible par 4
    // mais pas divisible par 100, sauf si elle est aussi divisible par 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test dans la console :
console.log("2024 est-elle bisextile ? =>", bisextile(2024)); // true
console.log("2023 est-elle bisextile ? =>", bisextile(2023)); // false
console.log("2000 est-elle bisextile ? =>", bisextile(2000)); // true
console.log("1900 est-elle bisextile ? =>", bisextile(1900)); // false
