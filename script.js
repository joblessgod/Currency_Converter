const fromAmmountElement = document.querySelector('.ammount')
const convertedAmountElement = document.querySelector('.convertedAmount')
const fromCurrencyElement = document.querySelector('.fromCurrency')
const toCurrencyElement = document.querySelector('.toCurrency')
const resultElement = document.querySelector('.result')

// Array to populate the select tags with these countries
const countries = [
    { name: "Afghan Afghani", code: "AFA" },
    { name: "Albanian Lek", code: "ALL" },
    { name: "Algerian Dinar", code: "DZD" },
    { name: "Angolan Kwanza", code: "AOA" },
    { name: "Argentine Peso", code: "ARS" },
    { name: "Armenian Dram", code: "AMD" },
    { name: "Aruban Florin", code: "AWG" },
    { name: "Australian Dollar", code: "AUD" },
    { name: "Azerbaijani Manat", code: "AZN" },
    { name: "Bahamian Dollar", code: "BSD" },
    { name: "Bahraini Dinar", code: "BHD" },
    { name: "Bangladeshi Taka", code: "BDT" },
    { name: "Barbadian Dollar", code: "BBD" },
    { name: "Belarusian Ruble", code: "BYR" },
    { name: "Belgian Franc", code: "BEF" },
    { name: "Belize Dollar", code: "BZD" },
    { name: "Bermudan Dollar", code: "BMD" },
    { name: "Bhutanese Ngultrum", code: "BTN" },
    { name: "Bitcoin", code: "BTC" },
    { name: "Bolivian Boliviano", code: "BOB" },
    { name: "Bosnia-Herzegovina Convertible Mark", code: "BAM" },
    { name: "Botswanan Pula", code: "BWP" },
    { name: "Brazilian Real", code: "BRL" },
    { name: "British Pound Sterling", code: "GBP" },
    { name: "Brunei Dollar", code: "BND" },
    { name: "Bulgarian Lev", code: "BGN" },
    { name: "Burundian Franc", code: "BIF" },
    { name: "Cambodian Riel", code: "KHR" },
    { name: "Canadian Dollar", code: "CAD" },
    { name: "Cape Verdean Escudo", code: "CVE" },
    { name: "Cayman Islands Dollar", code: "KYD" },
    { name: "CFA Franc BCEAO", code: "XOF" },
    { name: "CFA Franc BEAC", code: "XAF" },
    { name: "CFP Franc", code: "XPF" },
    { name: "Chilean Peso", code: "CLP" },
    { name: "Chilean Unit of Account", code: "CLF" },
    { name: "Chinese Yuan", code: "CNY" },
    { name: "Colombian Peso", code: "COP" },
    { name: "Comorian Franc", code: "KMF" },
    { name: "Congolese Franc", code: "CDF" },
    { name: "Costa Rican Colón", code: "CRC" },
    { name: "Croatian Kuna", code: "HRK" },
    { name: "Cuban Convertible Peso", code: "CUC" },
    { name: "Czech Republic Koruna", code: "CZK" },
    { name: "Danish Krone", code: "DKK" },
    { name: "Djiboutian Franc", code: "DJF" },
    { name: "Dominican Peso", code: "DOP" },
    { name: "East Caribbean Dollar", code: "XCD" },
    { name: "Egyptian Pound", code: "EGP" },
    { name: "Eritrean Nakfa", code: "ERN" },
    { name: "Estonian Kroon", code: "EEK" },
    { name: "Ethiopian Birr", code: "ETB" },
    { name: "Euro", code: "EUR" },
    { name: "Falkland Islands Pound", code: "FKP" },
    { name: "Fijian Dollar", code: "FJD" },
    { name: "Gambian Dalasi", code: "GMD" },
    { name: "Georgian Lari", code: "GEL" },
    { name: "German Mark", code: "DEM" },
    { name: "Ghanaian Cedi", code: "GHS" },
    { name: "Gibraltar Pound", code: "GIP" },
    { name: "Greek Drachma", code: "GRD" },
    { name: "Guatemalan Quetzal", code: "GTQ" },
    { name: "Guinean Franc", code: "GNF" },
    { name: "Guyanaese Dollar", code: "GYD" },
    { name: "Haitian Gourde", code: "HTG" },
    { name: "Honduran Lempira", code: "HNL" },
    { name: "Hong Kong Dollar", code: "HKD" },
    { name: "Hungarian Forint", code: "HUF" },
    { name: "Icelandic Króna", code: "ISK" },
    { name: "Indian Rupee", code: "INR" },
    { name: "Indonesian Rupiah", code: "IDR" },
    { name: "Iranian Rial", code: "IRR" },
    { name: "Iraqi Dinar", code: "IQD" },
    { name: "Israeli New Sheqel", code: "ILS" },
    { name: "Italian Lira", code: "ITL" },
    { name: "Jamaican Dollar", code: "JMD" },
    { name: "Japanese Yen", code: "JPY" },
    { name: "Jordanian Dinar", code: "JOD" },
    { name: "Kazakhstani Tenge", code: "KZT" },
    { name: "Kenyan Shilling", code: "KES" },
    { name: "Kuwaiti Dinar", code: "KWD" },
    { name: "Kyrgystani Som", code: "KGS" },
    { name: "Laotian Kip", code: "LAK" },
    { name: "Latvian Lats", code: "LVL" },
    { name: "Lebanese Pound", code: "LBP" },
    { name: "Lesotho Loti", code: "LSL" },
    { name: "Liberian Dollar", code: "LRD" },
    { name: "Libyan Dinar", code: "LYD" },
    { name: "Litecoin", code: "LTC" },
    { name: "Lithuanian Litas", code: "LTL" },
    { name: "Macanese Pataca", code: "MOP" },
    { name: "Macedonian Denar", code: "MKD" },
    { name: "Malagasy Ariary", code: "MGA" },
    { name: "Malawian Kwacha", code: "MWK" },
    { name: "Malaysian Ringgit", code: "MYR" },
    { name: "Maldivian Rufiyaa", code: "MVR" },
    { name: "Mauritanian Ouguiya", code: "MRO" },
    { name: "Mauritian Rupee", code: "MUR" },
    { name: "Mexican Peso", code: "MXN" },
    { name: "Moldovan Leu", code: "MDL" },
    { name: "Mongolian Tugrik", code: "MNT" },
    { name: "Moroccan Dirham", code: "MAD" },
    { name: "Mozambican Metical", code: "MZM" },
    { name: "Myanmar Kyat", code: "MMK" },
    { name: "Namibian Dollar", code: "NAD" },
    { name: "Nepalese Rupee", code: "NPR" },
    { name: "Netherlands Antillean Guilder", code: "ANG" },
    { name: "New Taiwan Dollar", code: "TWD" },
    { name: "New Zealand Dollar", code: "NZD" },
    { name: "Nicaraguan Córdoba", code: "NIO" },
    { name: "Nigerian Naira", code: "NGN" },
    { name: "North Korean Won", code: "KPW" },
    { name: "Norwegian Krone", code: "NOK" },
    { name: "Omani Rial", code: "OMR" },
    { name: "Pakistani Rupee", code: "PKR" },
    { name: "Panamanian Balboa", code: "PAB" },
    { name: "Papua New Guinean Kina", code: "PGK" },
    { name: "Paraguayan Guarani", code: "PYG" },
    { name: "Peruvian Nuevo Sol", code: "PEN" },
    { name: "Philippine Peso", code: "PHP" },
    { name: "Polish Zloty", code: "PLN" },
    { name: "Qatari Rial", code: "QAR" },
    { name: "Romanian Leu", code: "RON" },
    { name: "Russian Ruble", code: "RUB" },
    { name: "Rwandan Franc", code: "RWF" },
    { name: "Salvadoran Colón", code: "SVC" },
    { name: "Samoan Tala", code: "WST" },
    { name: "São Tomé and Príncipe Dobra", code: "STD" },
    { name: "Saudi Riyal", code: "SAR" },
    { name: "Serbian Dinar", code: "RSD" },
    { name: "Seychellois Rupee", code: "SCR" },
    { name: "Sierra Leonean Leone", code: "SLL" },
    { name: "Singapore Dollar", code: "SGD" },
    { name: "Slovak Koruna", code: "SKK" },
    { name: "Solomon Islands Dollar", code: "SBD" },
    { name: "Somali Shilling", code: "SOS" },
    { name: "South African Rand", code: "ZAR" },
    { name: "South Korean Won", code: "KRW" },
    { name: "South Sudanese Pound", code: "SSP" },
    { name: "Special Drawing Rights", code: "XDR" },
    { name: "Sri Lankan Rupee", code: "LKR" },
    { name: "St. Helena Pound", code: "SHP" },
    { name: "Sudanese Pound", code: "SDG" },
    { name: "Surinamese Dollar", code: "SRD" },
    { name: "Swazi Lilangeni", code: "SZL" },
    { name: "Swedish Krona", code: "SEK" },
    { name: "Swiss Franc", code: "CHF" },
    { name: "Syrian Pound", code: "SYP" },
    { name: "Tajikistani Somoni", code: "TJS" },
    { name: "Tanzanian Shilling", code: "TZS" },
    { name: "Thai Baht", code: "THB" },
    { name: "Tongan Pa'anga", code: "TOP" },
    { name: "Trinidad & Tobago Dollar", code: "TTD" },
    { name: "Tunisian Dinar", code: "TND" },
    { name: "Turkish Lira", code: "TRY" },
    { name: "Turkmenistani Manat", code: "TMT" },
    { name: "Ugandan Shilling", code: "UGX" },
    { name: "Ukrainian Hryvnia", code: "UAH" },
    { name: "United Arab Emirates Dirham", code: "AED" },
    { name: "Uruguayan Peso", code: "UYU" },
    { name: "US Dollar", code: "USD" },
    { name: "Uzbekistan Som", code: "UZS" },
    { name: "Vanuatu Vatu", code: "VUV" },
    { name: "Venezuelan BolÃvar", code: "VEF" },
    { name: "Vietnamese Dong", code: "VND" },
    { name: "Yemeni Rial", code: "YER" },
    { name: "Zambian Kwacha", code: "ZMK" },
    { name: "Zimbabwean dollar", code: "ZWL" }
];

// Showing Countriesfrom array to select tag
countries.forEach(country => {
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')

    option1.value = option1.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;

    fromCurrencyElement.appendChild(option1)
    toCurrencyElement.appendChild(option2)

    // Setting default values of select tag
    fromCurrencyElement.value = 'USD'
    toCurrencyElement.value = 'NPR'

})


// Functiont get exchange rate using API
const getExchangeRate = async () => {
    const ammount = parseFloat(fromAmmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    //  Fetch data from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json()

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (ammount * conversionRate);

    convertedAmountElement.value = convertedAmount;

    // console.log(data);
}
fromAmmountElement.addEventListener('input', getExchangeRate)