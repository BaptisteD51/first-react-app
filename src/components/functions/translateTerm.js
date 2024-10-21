function translateTerm(term){
    let translations = {
        age: "Âge",
        height: "Taille",
        fur_length: "Poil",
        medium: "Moyen",
        long: "Long",
        short: "Court",
        senior: "Senior",
        adult: "Adulte",
        junior: "Junior",
        big: "Grand",
        small: "Petit",
        dry: "Croquette",
        wet: "Pâtée",
        snack: "Friandise",
    }

    return translations[term] != undefined ? translations[term] : term 

}

export default translateTerm