import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                pageTitle: "Kata Randomizer",
                selectAStyle: "Select a Style",
                actionResults: "Action Results",
                kataList: "Kata List",
                showQuotes: "Show Quotes",
                showMain: "Show Main",
                randomizeAgain: "Randomize Again",
                quotes: "Quotes",
                styleLabel: "Style",
                kataLabel: "Kata",
                actionLabel: "Action",
                longs: "Longs",
                shorts: "Shorts",
                all: "All"
            }
        },
        da: {
            translation: {
                pageTitle: "Kata Randomizer",
                selectAStyle: "Vælg en stilart",
                actionResults: "Handlingsresultater",
                kataList: "Kata Liste",
                showQuotes: "Vis citater",
                showMain: "Vis Main",
                randomizeAgain: "Randomiser igen",
                quotes: "Citater",
                styleLabel: "Stil",
                kataLabel: "Kata",
                actionLabel: "Handling",
                longs: "Længer",
                shorts: "Kort",
                all: "Alle"
            }
        },
        de: {
            translation: {
                pageTitle: "Kata-Zufallsgenerator",
                selectAStyle: "Wählen Sie einen Stil",
                actionResults: "Ergebnisse der Aktion",
                kataList: "Kata-Liste",
                showQuotes: "Zitate anzeigen",
                showMain: "Hauptansicht anzeigen",
                randomizeAgain: "Erneut zufällig sortieren",
                quotes: "Zitate",
                styleLabel: "Stil",
                kataLabel: "Kata",
                actionLabel: "Aktion",
                longs: "Lange",
                shorts: "Kurz",
                all: "Alle"
            }
        },        
        es: {
            translation: {
                pageTitle: "Aleatorizador de kata",
                selectAStyle: "Seleccione un estilo",
                actionResults: "Resultados de la acción",
                kataList: "Lista de katas",
                showQuotes: "Mostrar citas",
                showMain: "Mostrar principal",
                randomizeAgain: "Aleatorizar de nuevo",
                quotes: "Citas",
                styleLabel: "Estilo",
                kataLabel: "Kata",
                actionLabel: "Acción",
                longs: "Largos",
                shorts: "Cortas",
                all: "Toda"
            }
        }
    }
});

export default i18n;