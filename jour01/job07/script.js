function jourtravaille(date) {
    // Liste des jours fériés en France en 2020 (format : "MM-DD")
    const joursFeries2020 = [
        "01-01", // Jour de l'an
        "04-13", // Lundi de Pâques
        "05-01", // Fête du Travail
        "05-08", // Victoire 1945
        "05-21", // Ascension
        "06-01", // Lundi de Pentecôte
        "07-14", // Fête Nationale
        "08-15", // Assomption
        "11-01", // Toussaint
        "11-11", // Armistice
        "12-25"  // Noël
    ];

    const jour = date.getDate();          // numéro du jour (ex: 14)
    const mois = date.getMonth() + 1;     // mois (0 = janvier, donc +1)
    const annee = date.getFullYear();     // année (ex: 2020)
    const jourSemaine = date.getDay();    // 0 = dimanche, 6 = samedi

    // Format de la date pour comparaison avec les jours fériés (ex: "05-01")
    const mmdd = (mois < 10 ? "0" + mois : mois) + "-" + (jour < 10 ? "0" + jour : jour);

    // Construction de la date formatée pour affichage
    const dateStr = `${jour} ${mois} ${annee}`;

    if (annee !== 2020) {
        console.log(`Cette fonction ne gère que l'année 2020.`);
        return;
    }

    if (joursFeries2020.includes(mmdd)) {
        console.log(`Le ${dateStr} est un jour férié`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${dateStr} est un week-end`);
    } else {
        console.log(`Oui, le ${dateStr} est un jour travaillé`);
    }
}

// 🔍 Tests :
jourtravaille(new Date("2020-05-01")); // Férié
jourtravaille(new Date("2020-05-02")); // Week-end (samedi)
jourtravaille(new Date("2020-05-04")); // Jour travaillé
