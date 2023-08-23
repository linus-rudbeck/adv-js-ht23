function getZodiacSign(date: Date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let zodiacSign = "";

    switch (month) {
        case 1:
            zodiacSign = (day <= 19) ? "Stenbocken" : "Vattumannen";
            break;
        case 2:
            zodiacSign = (day <= 18) ? "Vattumannen" : "Fiskarna";
            break;
        case 3:
            zodiacSign = (day <= 20) ? "Fiskarna" : "Väduren";
            break;
        case 4:
            zodiacSign = (day <= 20) ? "Väduren" : "Oxen";
            break;
        case 5:
            zodiacSign = (day <= 20) ? "Oxen" : "Tvillingarna";
            break;
        case 6:
            zodiacSign = (day <= 21) ? "Tvillingarna" : "Kräftan";
            break;
        case 7:
            zodiacSign = (day <= 22) ? "Kräftan" : "Lejonet";
            break;
        case 8:
            zodiacSign = (day <= 22) ? "Lejonet" : "Jungfrun";
            break;
        case 9:
            zodiacSign = (day <= 22) ? "Jungfrun" : "Vågen";
            break;
        case 10:
            zodiacSign = (day <= 22) ? "Vågen" : "Skorpionen";
            break;
        case 11:
            zodiacSign = (day <= 22) ? "Skorpionen" : "Skytten";
            break;
        case 12:
            zodiacSign = (day <= 21) ? "Skytten" : "Stenbocken";
            break;
        default:
            return "Unknown";   
    }

    return `${date} ${zodiacSign}`;
}

console.log(getZodiacSign(new Date("1992-04-24")));
console.log(getZodiacSign(new Date("1992-06-30")));
console.log(getZodiacSign(new Date("1992-08-23")));
console.log(getZodiacSign(new Date("1992-07-17")));
console.log(getZodiacSign(new Date("1992-02-02")));
console.log(getZodiacSign(new Date("1992-12-31")));