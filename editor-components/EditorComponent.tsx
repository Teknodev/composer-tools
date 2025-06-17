import * as React from "react";
import { getProjectHook } from "../custom-hooks/project";
import { EventEmitter, EVENTS } from "../EventEmitter";
import sanitizeHtml from "sanitize-html";
import { renderToString } from "react-dom/server";
import { THEMES, TTheme } from "./location/themes";
import InlineEditor from "../../custom-hooks/UseInlineEditor";
import { v4 as uuidv4 } from 'uuid';

export const currencies = [
  { code: "AFN", symbol: "؋", name: "Afghan Afghani" },
  { code: "ALL", symbol: "Lek", name: "Albanian Lek" },
  { code: "DZD", symbol: "د.ج", name: "Algerian Dinar" },
  { code: "AOA", symbol: "Kz", name: "Angolan Kwanza" },
  { code: "ARS", symbol: "$", name: "Argentine Peso" },
  { code: "AMD", symbol: "֏", name: "Armenian Dram" },
  { code: "AWG", symbol: "ƒ", name: "Aruban Florin" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "AZN", symbol: "₼", name: "Azerbaijani Manat" },
  { code: "BSD", symbol: "B$", name: "Bahamian Dollar" },
  { code: "BHD", symbol: ".د.ب", name: "Bahraini Dinar" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "BBD", symbol: "Bds$", name: "Barbadian Dollar" },
  { code: "BYR", symbol: "Br", name: "Belarusian Ruble" },
  { code: "BEF", symbol: "fr", name: "Belgian Franc" },
  { code: "BZD", symbol: "BZ$", name: "Belize Dollar" },
  { code: "BMD", symbol: "$", name: "Bermudan Dollar" },
  { code: "BTN", symbol: "Nu.", name: "Bhutanese Ngultrum" },
  { code: "BTC", symbol: "₿", name: "Bitcoin" },
  { code: "BOB", symbol: "Bs.", name: "Bolivian Boliviano" },
  { code: "BAM", symbol: "KM", name: "Bosnia-Herzegovina Convertible Mark" },
  { code: "BWP", symbol: "P", name: "Botswanan Pula" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "GBP", symbol: "£", name: "British Pound Sterling" },
  { code: "BND", symbol: "B$", name: "Brunei Dollar" },
  { code: "BGN", symbol: "лв", name: "Bulgarian Lev" },
  { code: "BIF", symbol: "FBu", name: "Burundian Franc" },
  { code: "KHR", symbol: "៛", name: "Cambodian Riel" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CVE", symbol: "$", name: "Cape Verdean Escudo" },
  { code: "KYD", symbol: "CI$", name: "Cayman Islands Dollar" }, 
  { code: "CLP", symbol: "$", name: "Chilean Peso" },
  { code: "CNY", symbol: "CN¥", name: "Chinese Yuan" },
  { code: "COP", symbol: "Col$", name: "Colombian Peso" },
  { code: "CRC", symbol: "₡", name: "Costa Rican Colón" },
  { code: "HRK", symbol: "kn", name: "Croatian Kuna" },
  { code: "CZK", symbol: "Kč", name: "Czech Republic Koruna" },
  { code: "DKK", symbol: "kr", name: "Danish Krone" },
  { code: "DOP", symbol: "RD$", name: "Dominican Peso" },
  { code: "EGP", symbol: "E£", name: "Egyptian Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GHS", symbol: "₵", name: "Ghanaian Cedi" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "HUF", symbol: "Ft", name: "Hungarian Forint" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "ILS", symbol: "₪", name: "Israeli New Sheqel" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
  { code: "KWD", symbol: "د.ك", name: "Kuwaiti Dinar" },
  { code: "LAK", symbol: "₭", name: "Laotian Kip" },
  { code: "LBP", symbol: "ل.ل", name: "Lebanese Pound" },
  { code: "LKR", symbol: "Rs", name: "Sri Lankan Rupee" },
  { code: "MAD", symbol: "د.م.", name: "Moroccan Dirham" },
  { code: "MXN", symbol: "MEX$", name: "Mexican Peso" },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "PEN", symbol: "S/.", name: "Peruvian Nuevo Sol" },
  { code: "PHP", symbol: "₱", name: "Philippine Peso" },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
  { code: "PLN", symbol: "zł", name: "Polish Zloty" },
  { code: "QAR", symbol: "ر.ق", name: "Qatari Rial" },
  { code: "RON", symbol: "lei", name: "Romanian Leu" },
  { code: "RUB", symbol: "₽", name: "Russian Ruble" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "THB", symbol: "฿", name: "Thai Baht" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "TWD", symbol: "NT$", name: "New Taiwan Dollar" },
  { code: "UAH", symbol: "₴", name: "Ukrainian Hryvnia" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "VEF", symbol: "Bs", name: "Venezuelan Bolívar" },
  { code: "VND", symbol: "₫", name: "Vietnamese Dong" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "AED", symbol: "د.إ", name: "United Arab Emirates Dirham" },
  { code: "XAF", symbol: "FCFA", name: "Central African CFA Franc" },
  { code: "XOF", symbol: "CFA", name: "West African CFA Franc" },
  { code: "XPF", symbol: "₣", name: "CFP Franc" }
];
export const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ab", name: "Abkhaz", nativeName: "аҧсуа" },
  { code: "aa", name: "Afar", nativeName: "Afaraf" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans" },
  { code: "ak", name: "Akan", nativeName: "Akan" },
  { code: "sq", name: "Albanian", nativeName: "Shqip" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "an", name: "Aragonese", nativeName: "Aragonés" },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া" },
  { code: "av", name: "Avaric", nativeName: "авар мацӀ, магӀарул мацӀ" },
  { code: "ae", name: "Avestan", nativeName: "avesta" },
  { code: "ay", name: "Aymara", nativeName: "aymar aru" },
  { code: "az", name: "Azerbaijani", nativeName: "azərbaycan dili" },
  { code: "bm", name: "Bambara", nativeName: "bamanankan" },
  { code: "ba", name: "Bashkir", nativeName: "башҡорт теле" },
  { code: "eu", name: "Basque", nativeName: "euskara, euskera" },
  { code: "be", name: "Belarusian", nativeName: "Беларуская" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "bh", name: "Bihari", nativeName: "भोजपुरी" },
  { code: "bi", name: "Bislama", nativeName: "Bislama" },
  { code: "bs", name: "Bosnian", nativeName: "bosanski jezik" },
  { code: "br", name: "Breton", nativeName: "brezhoneg" },
  { code: "bg", name: "Bulgarian", nativeName: "български език" },
  { code: "my", name: "Burmese", nativeName: "ဗမာစာ" },
  { code: "ca", name: "Catalan; Valencian", nativeName: "Català" },
  { code: "ch", name: "Chamorro", nativeName: "Chamoru" },
  { code: "ce", name: "Chechen", nativeName: "нохчийн мотт" },
  { code: "ny", name: "Chichewa; Chewa; Nyanja", nativeName: "chiCheŵa, chinyanja" },
  { code: "zh", name: "Chinese", nativeName: "中文 (Zhōngwén), 汉语, 漢語" },
  { code: "cv", name: "Chuvash", nativeName: "чӑваш чӗлхи" },
  { code: "kw", name: "Cornish", nativeName: "Kernewek" },
  { code: "co", name: "Corsican", nativeName: "corsu, lingua corsa" },
  { code: "cr", name: "Cree", nativeName: "ᓀᐦᐃᔭᐍᐏᐣ" },
  { code: "hr", name: "Croatian", nativeName: "hrvatski" },
  { code: "cs", name: "Czech", nativeName: "česky, čeština" },
  { code: "da", name: "Danish", nativeName: "dansk" },
  { code: "dv", name: "Divehi; Dhivehi; Maldivian;", nativeName: "ދިވެހި" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands, Vlaams" },
  { code: "eo", name: "Esperanto", nativeName: "Esperanto" },
  { code: "et", name: "Estonian", nativeName: "eesti, eesti keel" },
  { code: "ee", name: "Ewe", nativeName: "Eʋegbe" },
  { code: "fo", name: "Faroese", nativeName: "føroyskt" },
  { code: "fj", name: "Fijian", nativeName: "vosa Vakaviti" },
  { code: "fi", name: "Finnish", nativeName: "suomi, suomen kieli" },
  { code: "fr", name: "French", nativeName: "français, langue française" },
  { code: "gl", name: "Galician", nativeName: "Galego" },
  { code: "ka", name: "Georgian", nativeName: "ქართული" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "el", name: "Greek, Modern", nativeName: "Ελληνικά" },
  { code: "gn", name: "Guaraní", nativeName: "Avañeẽ" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ht", name: "Haitian; Haitian Creole", nativeName: "Kreyòl ayisyen" },
  { code: "ha", name: "Hausa", nativeName: "Hausa, هَوُسَ" },
  { code: "he", name: "Hebrew (modern)", nativeName: "עברית" },
  { code: "hz", name: "Herero", nativeName: "Otjiherero" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी, हिंदी" },
  { code: "ho", name: "Hiri Motu", nativeName: "Hiri Motu" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar" },
  { code: "ia", name: "Interlingua", nativeName: "Interlingua" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "ga", name: "Irish", nativeName: "Gaeilge" },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo" },
  { code: "ik", name: "Inupiaq", nativeName: "Iñupiaq, Iñupiatun" },
  { code: "io", name: "Ido", nativeName: "Ido" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "iu", name: "Inuktitut", nativeName: "ᐃᓄᒃᑎᑐᑦ" },
  { code: "ja", name: "Japanese", nativeName: "日本語 (にほんご／にっぽんご)" },
  { code: "jv", name: "Javanese", nativeName: "basa Jawa" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "kr", name: "Kanuri", nativeName: "Kanuri" },
  { code: "ks", name: "Kashmiri", nativeName: "कश्मीरी, كشميري‎" },
  { code: "kk", name: "Kazakh", nativeName: "Қазақ тілі" },
  { code: "km", name: "Khmer", nativeName: "ភាសាខ្មែរ" },
  { code: "ki", name: "Kikuyu, Gikuyu", nativeName: "Gĩkũyũ" },
  { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda" },
  { code: "ky", name: "Kirghiz, Kyrgyz", nativeName: "кыргыз тили" },
  { code: "kv", name: "Komi", nativeName: "коми кыв" },
  { code: "kg", name: "Kongo", nativeName: "KiKongo" },
  { code: "ko", name: "Korean", nativeName: "한국어 (韓國語), 조선말 (朝鮮語)" },
  { code: "ku", name: "Kurdish", nativeName: "Kurdî, كوردی‎" },
  { code: "kj", name: "Kwanyama, Kuanyama", nativeName: "Kuanyama" },
  { code: "la", name: "Latin", nativeName: "latine, lingua latina" },
  { code: "lb", name: "Luxembourgish, Letzeburgesch", nativeName: "Lëtzebuergesch" },
  { code: "lg", name: "Luganda", nativeName: "Luganda" },
  { code: "li", name: "Limburgish, Limburgan, Limburger", nativeName: "Limburgs" },
  { code: "ln", name: "Lingala", nativeName: "Lingála" },
  { code: "lo", name: "Lao", nativeName: "ພາສາລາວ" },
  { code: "lt", name: "Lithuanian", nativeName: "lietuvių kalba" },
  { code: "lu", name: "Luba-Katanga", nativeName: "" },
  { code: "lv", name: "Latvian", nativeName: "latviešu valoda" },
  { code: "gv", name: "Manx", nativeName: "Gaelg, Gailck" },
  { code: "mk", name: "Macedonian", nativeName: "македонски јазик" },
  { code: "mg", name: "Malagasy", nativeName: "Malagasy fiteny" },
  { code: "ms", name: "Malay", nativeName: "bahasa Melayu, بهاس ملايو‎" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "mt", name: "Maltese", nativeName: "Malti" },
  { code: "mi", name: "Māori", nativeName: "te reo Māori" },
  { code: "mr", name: "Marathi (Marāṭhī)", nativeName: "मराठी" },
  { code: "mh", name: "Marshallese", nativeName: "Kajin M̧ajeļ" },
  { code: "mn", name: "Mongolian", nativeName: "монгол" },
  { code: "na", name: "Nauru", nativeName: "Ekakairũ Naoero" },
  { code: "nv", name: "Navajo, Navaho", nativeName: "Diné bizaad, Dinékʼehǰí" },
  { code: "nb", name: "Norwegian Bokmål", nativeName: "Norsk bokmål" },
  { code: "nd", name: "North Ndebele", nativeName: "isiNdebele" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली" },
  { code: "ng", name: "Ndonga", nativeName: "Owambo" },
  { code: "nn", name: "Norwegian Nynorsk", nativeName: "Norsk nynorsk" },
  { code: "no", name: "Norwegian", nativeName: "Norsk" },
  { code: "ii", name: "Nuosu", nativeName: "ꆈꌠ꒿ Nuosuhxop" },
  { code: "nr", name: "South Ndebele", nativeName: "isiNdebele" },
  { code: "oc", name: "Occitan", nativeName: "Occitan" },
  { code: "oj", name: "Ojibwe, Ojibwa", nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ" },
  { code: "om", name: "Oromo", nativeName: "Afaan Oromoo" },
  { code: "or", name: "Oriya", nativeName: "ଓଡ଼ିଆ" },
  { code: "os", name: "Ossetian, Ossetic", nativeName: "ирон æвзаг" },
  { code: "pa", name: "Panjabi, Punjabi", nativeName: "ਪੰਜਾਬੀ, پنجابی‎" },
  { code: "pi", name: "Pāli", nativeName: "पाऴि" },
  { code: "fa", name: "Persian", nativeName: "فارسی" },
  { code: "pl", name: "Polish", nativeName: "polski" },
  { code: "ps", name: "Pashto, Pushto", nativeName: "پښتو" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "qu", name: "Quechua", nativeName: "Runa Simi, Kichwa" },
  { code: "rm", name: "Romansh", nativeName: "rumantsch grischun" },
  { code: "rn", name: "Kirundi", nativeName: "kiRundi" },
  { code: "ro", name: "Romanian, Moldavian, Moldovan", nativeName: "română" },
  { code: "ru", name: "Russian", nativeName: "русский язык" },
  { code: "sa", name: "Sanskrit (Saṁskṛta)", nativeName: "संस्कृतम्" },
  { code: "sc", name: "Sardinian", nativeName: "sardu" },
  { code: "sd", name: "Sindhi", nativeName: "सिन्धी, سنڌي، سندھی‎" },
  { code: "se", name: "Northern Sami", nativeName: "Davvisámegiella" },
  { code: "sm", name: "Samoan", nativeName: "gagana faa Samoa" },
  { code: "sg", name: "Sango", nativeName: "yângâ tî sängö" },
  { code: "sr", name: "Serbian", nativeName: "српски језик" },
  { code: "gd", name: "Scottish Gaelic; Gaelic", nativeName: "Gàidhlig" },
  { code: "sn", name: "Shona", nativeName: "chiShona" },
  { code: "si", name: "Sinhala, Sinhalese", nativeName: "සිංහල" },
  { code: "sk", name: "Slovak", nativeName: "slovenčina" },
  { code: "sl", name: "Slovene", nativeName: "slovenščina" },
  { code: "so", name: "Somali", nativeName: "Soomaaliga, af Soomaali" },
  { code: "st", name: "Southern Sotho", nativeName: "Sesotho" },
  { code: "es", name: "Spanish; Castilian", nativeName: "español, castellano" },
  { code: "su", name: "Sundanese", nativeName: "Basa Sunda" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili" },
  { code: "ss", name: "Swati", nativeName: "SiSwati" },
  { code: "sv", name: "Swedish", nativeName: "svenska" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "tg", name: "Tajik", nativeName: "тоҷикӣ, toğikī, تاجیکی‎" },
  { code: "th", name: "Thai", nativeName: "ไทย" },
  { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ" },
  { code: "bo", name: "Tibetan Standard, Tibetan, Central", nativeName: "བོད་ཡིག" },
  { code: "tk", name: "Turkmen", nativeName: "Türkmen, Түркмен" },
  { code: "tl", name: "Tagalog", nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔" },
  { code: "tn", name: "Tswana", nativeName: "Setswana" },
  { code: "to", name: "Tonga (Tonga Islands)", nativeName: "faka Tonga" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "ts", name: "Tsonga", nativeName: "Xitsonga" },
  { code: "tt", name: "Tatar", nativeName: "татарча, tatarça, تاتارچا‎" },
  { code: "tw", name: "Twi", nativeName: "Twi" },
  { code: "ty", name: "Tahitian", nativeName: "Reo Tahiti" },
  { code: "ug", name: "Uighur, Uyghur", nativeName: "Uyƣurqə, ئۇيغۇرچە‎" },
  { code: "uk", name: "Ukrainian", nativeName: "українська" },
  { code: "ur", name: "Urdu", nativeName: "اردو" },
  { code: "uz", name: "Uzbek", nativeName: "zbek, Ўзбек, أۇزبېك‎" },
  { code: "ve", name: "Venda", nativeName: "Tshivenḓa" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "vo", name: "Volapük", nativeName: "Volapük" },
  { code: "wa", name: "Walloon", nativeName: "Walon" },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg" },
  { code: "wo", name: "Wolof", nativeName: "Wollof" },
  { code: "fy", name: "Western Frisian", nativeName: "Frysk" },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa" },
  { code: "yi", name: "Yiddish", nativeName: "ייִדיש" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá" },
  { code: "za", name: "Zhuang, Chuang", nativeName: "Saɯ cueŋƅ, Saw cuengh" },
];

export type CurrencyCode = (typeof currencies )[number]["code"];


export function generateComponentId(){
  return uuidv4();
}

type PreSufFix = {
  label: string;
  className: string;
};

export type InteractionType ={
  type?: string,
  modal?: string,
  trigger_action?: string,
  visible_on?: string,
  show_once?: false,
};
export type PageInteractionType ={
  type?: string;
  modal?: string;
  scroll_depth?: number;
  delay_time?: number;
  visible_on?: string;
  show_once?: boolean;
  trigger_action?: string;
};

export type TypeLocation = {
  lng: number;
  lat: number;
};

type currencyAdditionalParams ={
  showCode?: boolean;
  showSymbol?:boolean;
}

type GetPropValueProperties = {
  parent_object?: TypeUsableComponentProps[];
  as_string?: boolean;
  suffix?: PreSufFix;
  prefix?: PreSufFix;
};

type RangeInputAdditionalParams = { 
  maxRange?: number; 
  minRange?: number; 
  step?: number;
};

export type CSSClass = {
  id: string;
  class: string;
}

export type TypeCSSProp = { [key: string]: CSSClass[] };

export interface iComponent {
  render(): any;
  getInstanceName(): string;
  getName(): string;
  getProps(): TypeUsableComponentProps[];
  getShadowProps(): TypeUsableComponentProps[];
  getPropValue(
    propName: string,
    properties?: GetPropValueProperties
  ): TypeUsableComponentProps;
  getExportedCSSClasses(): { [key: string]: string };
  getCSSClasses(): TypeCSSProp;
  getCSSClasses(sectionName: string | null): CSSClass[];
  getCSSClasses(sectionName?: string | null): TypeCSSProp | CSSClass[];
  getInteractions(sectionName?: string | null): any;
  addProp(prop: TypeUsableComponentProps): void;
  setProp(key: string, value: any): void;
  setCSSClasses(key: string, value: { id: string; class: string }[]): void;
  setInteraction(key: string, value: InteractionType[]): void;
  decorateCSS(cssValue: string): string;
  getCategory(): CATEGORIES;
  initializeProp(prop: TypeUsableComponentProps): void;
  id: string;
}
type AvailablePropTypes =
  | { type: "string"; value: string }
  | { type: "number"; value: number }
  | { type: "boolean"; value: boolean }
  | { type: "page"; value: string }
  | { type: "array"; value: TypeUsableComponentProps[] }
  | { type: "object"; value: TypeUsableComponentProps[] }
  | { type: "image"; value: string }
  | { type: "video"; value: string }
  | { type: "select"; value: string }
  | { type: "color"; value: string }
  | { type: "icon"; value: string }
  | { type: "email"; value: string }
  | { type: "location"; value: TypeLocation }
  | { type: "range"; value: string; additionalParams?: RangeInputAdditionalParams}
  | { type: "currency"; value: { value: string; currency?: CurrencyCode }; additionalParams?: currencyAdditionalParams}
  | { type: "tag"; value: string[]}
  | { type: "phone"; value: string }
  | { type: "dateTime"; value: string ; additionalParams? : {mode?:string, timeInterval?:number, yearRange? : number, yearStart?: number}}
  | { type: "multiSelect"; value: string[] }
  | { type: "file"; value: string }
  | { type: "embededLink"; value: string }

export type TypeReactComponent = {
  type: string;
  props?: TypeUsableComponentProps[];
  cssClasses?: TypeCSSProp;
  interactions?: Record<string, InteractionType[]>;
  id?: string;
};
export type TypeUsableComponentProps = {
  id?: string;
  key: string;
  displayer: string;
  additionalParams?: { selectItems?: string[]; maxElementCount?: number};
  max?: number;
} & AvailablePropTypes & {
  getPropValue?: (
    propName: string,
    properties?: GetPropValueProperties
  ) => any;
};

type MemorizedElement = {
  jsxElement?: React.JSX.Element,
  value?: string;
};

export enum CATEGORIES {
  NAVIGATOR = "navigator",
  TESTIMONIALS = "testimonials",
  LIST = "list",
  HEADER = "header",
  PRICING = "pricing",
  FOOTER = "footer",
  TEAM = "team",
  CONTENT = "content",
  FORM = "form",
  DOWNLOAD = "download",
  CALLTOACTION = "callToAction",
  SLIDER = "slider",
  FAQ = "faq",
  MODAL = "modal",
  LOGOCLOUDS = "logoClouds",
  STATS = "stats",
  FEATURE = "feature",
  IMAGEGALLERY = "imageGallery",
  LOCATION = "location",
  BANNER = "banner",
  SOCIAL = "social",
  SOCIALWIDGET = "socialWidget",
  ECOMMERCE = "ecommerce",
  COMINGSOON = "comingSoon",
  PRIVACYPOLICY = "privacyPolicy",
  COMINGSOON = "comingSoon",
}

export function generateId(key: string): string {
  return key + "-" + Math.round(Math.random() * 1000000000).toString();
}
//@ts-ignore
export abstract class Component
  extends React.Component<{}, { states: any; componentProps: any }>
  implements iComponent
{
  private shadowProps: TypeUsableComponentProps[] = [];
  private styles: any;
  public id: string;
  static category: CATEGORIES;
  private memorizedElements: {[id: string]: MemorizedElement} = {};

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ states: any; componentProps: any; }>, snapshot?: any): void {
    EventEmitter.emit(EVENTS.COMPONENT_DID_UPDATE, { data: this });
  }

  constructor(props: any, styles: any) {
    super(props);
    this.styles = styles;
    this.id = props?.id || generateComponentId();

    let sectionsKeyValue: any = {};
    Object.keys(this.styles).forEach((key, index) => {
      sectionsKeyValue[key] = [];
    });
    
    this.state = {
      states: {},
      componentProps: {
        props: props?.props || [],
        cssClasses: props?.cssClasses || {...sectionsKeyValue},
        interactions: props?.interactions || {...sectionsKeyValue}
      },
    };

    if (props?.props?.length) {
      props?.props.forEach((prop: TypeUsableComponentProps) => {
        this.setProp(prop.key, prop.value);
      });
    }

    EventEmitter.emit(EVENTS.COMPONENT_ADDED, { data: this });
  }

  static getName(): string {
    // console.error("Static Method Not Implemented", this.name);
    return this.name;
  }

  getName(): string {
    // console.error("Static Method Not Implemented", this.name);
    return (this.constructor as typeof Component).getName();
  }

  static getInstanceName(): string {
    // console.error("Static Method Not Implemented", this.name);
    return this.name;
  }

  getInstanceName(): string {
    return (this.constructor as typeof Component).name;
  }

  static getCategory(): CATEGORIES {
    return this.category;
  }

  getCategory(): CATEGORIES {
    return (this.constructor as typeof Component).category;
  }

  getProps(): TypeUsableComponentProps[] {
    return this.state.componentProps.props;
  }

  getShadowProps(): TypeUsableComponentProps[] {
    return this.shadowProps;
  }

  private getFilteredProp(key: string, props: TypeUsableComponentProps[]): TypeUsableComponentProps | null {
    return props.find((prop: TypeUsableComponentProps) => prop.key === key) || null;
  }

  getShadowProp(key: string): TypeUsableComponentProps | null {
    return this.getFilteredProp(key, this.shadowProps);
  }

  getProp(key: string): TypeUsableComponentProps | null {
    return this.getFilteredProp(key, this.state.componentProps.props);
  }

  getPropValue(propName: string, properties?: GetPropValueProperties): any {
    let prop =
      properties?.parent_object?.filter(
        (prop: TypeUsableComponentProps) => prop.key === propName
      )[0] || this.getProp(propName);

    const isStringMustBeElement =
      prop?.type == "string" && !properties?.as_string;

    return isStringMustBeElement
      ? this.getPropValueAsElement(prop, properties)
      : prop?.value;
  }

  removeSuffixesAndPrefixes(htmlString: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const elementsWithClass = doc.querySelectorAll("[class]");
    elementsWithClass.forEach((element) => {
      const isSuffixOrPrefixElement =
        element.className.includes("suffix-prefix-elem");
      if (isSuffixOrPrefixElement) element.remove();
    });

    return doc.body.innerHTML;
  }


  getPropValueAsElement(
    prop: TypeUsableComponentProps,
    properties?: GetPropValueProperties
  ) {
    const sanitize = (dirty: string, options: sanitizeHtml.IOptions) => ({
      __html: sanitizeHtml(dirty, {
        allowedAttributes: {
          a: ["href", "name", "target"],
          "*": ["style", "class"],
        },
        parseStyleAttributes: false,
      }),
    });

    const preSufFixToElement = (elem?: PreSufFix) => {
      if (!elem) return null;

      return React.createElement("span", {
        className: `${elem.className} suffix-prefix-elem`,
        children: elem.label,
      });
    };

    const SanitizeHTML = ({ html, options }: any) => {
      const prefix = preSufFixToElement(properties?.prefix);
      const suffix = preSufFixToElement(properties?.suffix);

      const stringPrefix = renderToString(prefix || <></>);
      const stringSuffix = renderToString(suffix || <></>);

      const hasHtmlTag = html.indexOf("<");

      if (hasHtmlTag != 0 && hasHtmlTag != -1) {
        html = `<p> ${html} </p>`;
      }

      const firstTagStartIndex = html.indexOf(">") + 1;
      const firstTagEndIndex = html.lastIndexOf("<");

      const htmlWithPrefixAndSuffix =
        html.substring(0, firstTagStartIndex) +
        stringPrefix +
        html.substring(firstTagStartIndex, firstTagEndIndex) +
        stringSuffix +
        html.substring(firstTagEndIndex);

      const sanitizedHtml = sanitize(htmlWithPrefixAndSuffix, options);

      return (
        <InlineEditor
          id={prop.id}
          value={prop.value as string}
          props={this.getProps()}
          sanitizedHtml={sanitizedHtml}
          componentId={this.id}
        />
      );
    };


    if(!this.memorizedElements[prop.id]) {
      this.memorizedElements[prop.id] = {};
    }

    const memorizedElement: MemorizedElement  = this.memorizedElements[prop.id];
    const isValueChanged = (!!memorizedElement?.value || memorizedElement?.value == "") 
    && prop.value != memorizedElement?.value;

    if(!memorizedElement.jsxElement || isValueChanged){
      memorizedElement["jsxElement"] = <SanitizeHTML html={prop?.value}></SanitizeHTML>;
      memorizedElement["value"] = prop.value as string;
    }

    return memorizedElement.jsxElement;
  }

  getExportedCSSClasses() {
    return this.styles;
  }
  getCSSClasses(): TypeCSSProp;
  getCSSClasses(sectionName: string | null): CSSClass[];
  getCSSClasses(sectionName: string | null = null): TypeCSSProp | CSSClass[] {
    const { cssClasses } = this.state.componentProps;
    
    return sectionName 
      ? cssClasses[sectionName]
      : cssClasses;
  }

  private attachPropId(_prop: TypeUsableComponentProps) {
    if (_prop.type == "array" || _prop.type == "object") {
      (_prop.value as TypeUsableComponentProps[]).forEach(
        (v: TypeUsableComponentProps) => this.attachPropId(v)
      );
    } else {
      _prop.id = generateId(_prop.key)
    }

    return _prop;
  }

  addProp(prop: TypeUsableComponentProps) {
    this.shadowProps.push(JSON.parse(JSON.stringify(prop)));
    if (this.getProp(prop.key)) return;
    this.initializeProp(prop);
    this.state.componentProps.props.push(prop);
    EventEmitter.emit(EVENTS.RENDER_CONTENT_TAB)
  }

  removeProp(key: string) {
    this.shadowProps = this.shadowProps.filter((el) => el.key !== key);
    this.state.componentProps.props = this.state.componentProps.props.filter(
      (el: any) => el.key !== key
    );
    
    EventEmitter.emit(EVENTS.RENDER_CONTENT_TAB)
  }

  setProp(key: string, value: any): void {
    let i = this.state.componentProps.props
      .map((prop: any) => prop.key)
      .indexOf(key);

    const prop: TypeUsableComponentProps = this.state.componentProps.props[i];

    const isInvalidIndex = i === -1;
    const isMatchingSimpleValue =
      prop.type !== "array" && prop.type !== "object" && prop.value === value;
    const isMatchingComplexValue =
      (prop.type === "array" || prop.type === "object") &&
      prop.value.every((item) => item.getPropValue) &&
      prop.value === value;

    if (isInvalidIndex || isMatchingSimpleValue || isMatchingComplexValue) {
      return;
    }

    this.state.componentProps.props[i].value = value;
    this.state.componentProps.props[i] = this.attachValueGetter(
      this.state.componentProps.props[i]
    );
    this.setState({ componentProps: { ...this.state.componentProps } });
  }

  setComponentState(key: string, value: any): void {
    this.state.states[key] = value;
    this.setState({ ...this.state });
  }

  getComponentState(key: string): any {
    return this.state.states[key];
  }

  setCSSClasses(key: string, value: { id: string; class: string }[]) {
    this.state.componentProps.cssClasses[key] = value;
    this.setState({ componentProps: this.state.componentProps });
  }
  setInteraction(key: string, value: InteractionType[]) {
    this.state.componentProps.interactions[key] = value;
    this.setState({ componentProps: this.state.componentProps });
  }
  getInteractions(sectionName: string | null = null): string {
    return sectionName
      ? this.state.componentProps.interactions[sectionName]
      : this.state.componentProps.interactions;
  }
  decorateCSS(section: string) {
    let cssClass = [this.styles[section]];
    
    let cssManuplations = Object.entries(this.getCSSClasses()).filter(
      ([p, v]) => v.length > 0
    );

    cssManuplations.forEach(([key, value]: any) => {
      if (key === section) {
        value.forEach((el: any) => {
          cssClass.push(el.class);
        });
      }
    });

    cssClass.push(
      generateAutoClassName(this.id, section)
    );
    
    return cssClass.join(" ");
  }

  private attachValueGetter(propValue: TypeUsableComponentProps) {
    if (Array.isArray(propValue.value)) {
      if (propValue.type === "multiSelect") {
        propValue.value = propValue.value.filter((value) => typeof value === "string") as string[];
        return propValue;
      }
      propValue.value = propValue.value.filter((value) => value != null);
      propValue.value = propValue.value.map(
        (propValueItem: TypeUsableComponentProps) => {
          if (Array.isArray(propValueItem.value)) {
            propValueItem = this.attachValueGetter(propValueItem);
            propValueItem["getPropValue"] = (
              propName: string,
              properties?: GetPropValueProperties
            ) => {
              if (!properties) properties = {};
              properties.parent_object =
                propValueItem.value as TypeUsableComponentProps[];
              return this.getPropValue(propName, properties);
            };
          }

          return propValueItem;
        }
      );
    }
    return propValue;
  }
  

  castToObject<Type>(propName: string): Type {
    let i = this.state.componentProps.props
      .map((prop: any) => prop.key)
      .indexOf(propName);

    let castedObject = this.castingProcess(this.state.componentProps.props[i]);
    return castedObject;
  }

  castToString(elem: React.JSX.Element): string {
    return elem.props?.html?.replace(/<\/?[^>]+(>|$)/g, "");
  }

  private castingProcess(object: any) {
    let casted = object.value.map((propValue: any) => {
      let clonedPropValue = { ...propValue };
      if (clonedPropValue.hasOwnProperty("getPropValue")) {
        clonedPropValue.value.forEach((nestedObject: any, index: number) => {
          clonedPropValue[nestedObject.key] = clonedPropValue.getPropValue(
            nestedObject.key
          );
          if (nestedObject.hasOwnProperty("getPropValue")) {
            clonedPropValue[nestedObject.key] =
              this.castingProcess(nestedObject);
          }
        });
      } else {
        const value = this.getPropValue(clonedPropValue.key, {
          parent_object: object.value,
        });
        clonedPropValue = {
          key: clonedPropValue.key,
          value,
        };
      }
      return clonedPropValue;
    });

    if (object.type == "object") {
      const isObjectContainsAnotherObject = object.value.some(
        (val: TypeUsableComponentProps) => val.type == "object"
      );

      let tmpCasted = [...casted];
      casted = {};

      tmpCasted.forEach((manipulatedValue) => {
        const initialProp = manipulatedValue;
        let value: any = {};

        if (initialProp.type == "object" && isObjectContainsAnotherObject) {
          initialProp.value.forEach((propVal: any) => {
            value[propVal.key] = initialProp[propVal.key];
          });
        } else {
          value = manipulatedValue.value;
        }

        casted[manipulatedValue.key] = value;
      });
    }

    return casted;
  }

  insertForm(name: string, data: Object) {
    const inputData: { [key: string]: any } = {};
    const entries = Object.entries(data);
    entries.forEach(([_, value], index) => {
      inputData[`input_${index}`] = value;
    });

    EventEmitter.emit(EVENTS.INSERT_FORM, { name, data: inputData });
  }

  /**
   * Assigns a unique ID to the given property and integrates a method for retrieving its current value.
   * This ensures each property is distinct and always reflects the latest state.
   * The function directly modifies the prop object in place so it's not necessary to return it.
   */
  initializeProp(prop: TypeUsableComponentProps) {
    this.attachPropId(prop);
    this.attachValueGetter(prop);
  }
}

export abstract class BaseNavigator extends Component {
  static category = CATEGORIES.NAVIGATOR;
}

export abstract class Testimonials extends Component {
  static category = CATEGORIES.TESTIMONIALS;
}

export abstract class BaseList extends Component {
  static category = CATEGORIES.LIST;
}

export abstract class BaseHeader extends Component {
  static category = CATEGORIES.HEADER;
}

export abstract class BasePricingTable extends Component {
  static category = CATEGORIES.PRICING;
}

export abstract class BaseFooter extends Component {
  static category = CATEGORIES.FOOTER;
}

export abstract class Team extends Component {
  static category = CATEGORIES.TEAM;
}

export abstract class BaseContent extends Component {
  static category = CATEGORIES.CONTENT;
}

export abstract class BaseDownload extends Component {
  static category = CATEGORIES.DOWNLOAD;
}

export abstract class BaseCallToAction extends Component {
  static category = CATEGORIES.CALLTOACTION;
}

export abstract class BaseSlider extends Component {
  static category = CATEGORIES.SLIDER;
}

export abstract class BaseFAQ extends Component {
  static category = CATEGORIES.FAQ;
}

export abstract class BaseImageGallery extends Component {
  static category = CATEGORIES.IMAGEGALLERY;
}

export abstract class BaseModal extends Component {
  static category = CATEGORIES.MODAL;
}

export abstract class BasePrivacyPolicy extends Component {
  static category = CATEGORIES.PRIVACYPOLICY;
}

export abstract class LogoClouds extends Component {
  static category = CATEGORIES.LOGOCLOUDS;
}

export abstract class BaseBanner extends Component {
  static category = CATEGORIES.BANNER;
}

export abstract class Location extends Component {
  static category = CATEGORIES.LOCATION;
  protected themes: TTheme[] = THEMES;

  constructor(props: any, styles: any) {
    super(props, styles);
    this.addProp({
      type: "select",
      key: "theme",
      displayer: "Map Theme",
      value: "",
      additionalParams: {
        selectItems: [
          "Theme-0",
          "Theme-1",
          "Theme-2",
          "Theme-3",
          "Theme-4",
          "Theme-5",
        ],
      },
    });
  }

  selectTheme(selectedTheme: string) {
    return this.themes.find((theme: TTheme) => {
      return theme.name == selectedTheme;
    });
  }
}

export abstract class BaseStats extends Component {
  static category = CATEGORIES.STATS;
}

export abstract class BaseContacts extends Component {
  static category = CATEGORIES.FORM;
}

export abstract class BaseFeature extends Component {
  static category = CATEGORIES.FEATURE;
}
export abstract class BaseSocial extends Component {
  static category = CATEGORIES.SOCIAL;
}

export abstract class BaseSocialWidget extends Component {
  static category = CATEGORIES.SOCIALWIDGET;
}

export function generateAutoClassName(componentId: string, section: string){
  return `auto-generate-${componentId}-${section}`;
};

export abstract class BaseECommerce extends Component {  
  static category = CATEGORIES.ECOMMERCE;
}

export abstract class BaseComingSoon extends Component {  
  static category = CATEGORIES.COMINGSOON;
}
