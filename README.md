# Quiz Carabinieri v3.2

Applicazione Quiz Carabinieri con contenuti dalle dispense fornite e 10 approfondimenti da fonti ufficiali online per Centrale operativa. Banca di allenamento con 933 domande uniche, tre risposte per domanda, una soluzione, spiegazione e riferimenti alle fonti. Non è una banca ufficiale e la copertura delle dispense è parziale.

## Avvio

Estrarre l’archivio e, nella cartella quiz-carabinieri, eseguire:

```sh
python3 -m http.server 8080
```

Aprire http://localhost:8080 sullo stesso computer. Il caricamento richiede un server HTTP: non aprire index.html con doppio clic.

Per installare l’app sul telefono occorre ospitarla su un sito HTTPS. Su iPhone: Safari → Condividi → Aggiungi alla schermata Home. Su Android: Chrome → Installa / Aggiungi alla schermata Home. Questo pacchetto non è un APK e non è ancora pubblicato online.

## Materie

| Materia | Domande |
| --- | ---: |
| Centrale operativa e trasmissioni | 353 |
| Tecniche operative e controllo del territorio | 31 |
| Patenti di guida | 43 |
| Diritto penale e penale militare | 65 |
| SDI | 43 |
| Diritto costituzionale | 40 |
| Diritto di polizia | 38 |
| Procedura penale e tecniche investigative | 40 |
| Esame testimoniale | 40 |
| Tutela dei soggetti vulnerabili | 40 |
| Tecnica professionale | 40 |
| Informatica d’Arma | 40 |
| Storia dell’Arma | 40 |
| Comunicazione interpersonale | 40 |
| Tecniche di apprendimento | 40 |

## Struttura della banca dati

Materia → capitolo didattico → argomento → domanda. Sono presenti 15 materie, 193 raggruppamenti didattici, 892 argomenti e 20 fonti: 17 dispense e 3 fonti ufficiali online. I capitoli sono raggruppamenti editoriali per lo studio e non riproducono integralmente gli indici delle dispense.

Ogni domanda ha un ID stabile, tre risposte, soluzione, spiegazione, difficoltà, tag e riferimenti alla fonte. I riferimenti PDF indicano la pagina del file, che può differire dalla numerazione stampata. Per Word si usano gli indici dei paragrafi estratti dall’XML, inclusi paragrafi vuoti e tabelle: non vengono attribuiti numeri di pagina artificiali.

- `questions.json`: banca utilizzata dall’app.
- `catalog.json`: materie, capitoli, argomenti e fonti.
- `banca-dati/banca.json`: esportazione completa.
- `banca-dati/Quiz_Carabinieri_Banca_v3.2.sqlite`: database relazionale con materie, capitoli, argomenti, domande, risposte, fonti, tag e riferimenti normativi.
- `banca-dati/schema.sql`: schema SQL, vincoli e vista bank_export.
- `banca-dati/domande.csv`: esportazione per Excel, UTF-8 con BOM e separatore punto e virgola.
- `banca-dati/catalogo-fonti.json`: catalogo delle fonti e relativi hash.
- `dispense/`: i 17 documenti originali unici.

Tre coppie di nuovi allegati erano identiche: è conservata una sola copia di ogni documento, mantenendo nel catalogo i nomi alternativi.

## Funzioni e aggiornamento

Ricerca delle materie e dei capitoli, quiz per materia o capitolo, quiz misto, spiegazioni immediate, collegamento alla pagina PDF, simulazione con timer, preferiti, statistiche, recupero errori dopo due risposte corrette, ripetizione dilazionata e studio intelligente.

La simulazione parte da 20 domande, 75 secondi per domanda e soglia 75%: sono impostazioni di allenamento, non il formato ufficiale di un esame. Il timer è per domanda.

Sono state corrette due domande SDI della versione precedente: profilo direzionale e significato di S.I.G.R., usando la nuova dispensa. L’aggiornamento conserva gli altri progressi e preferiti e azzera soltanto statistiche ed errori relativi a queste due domande. I preferiti relativi alle domande corrette vengono aggiornati.

I progressi restano locali al browser; non sono sincronizzati fra dispositivi. La PWA conserva offline app e banca dopo il primo caricamento riuscito; le dispense vengono conservate solo dopo essere state aperte o scaricate tramite l’app. Il browser può eliminare i dati del sito.

## Fonti e limiti

Le domande dalla sinossi sono affiancate da 10 approfondimenti ufficiali online esplicitamente identificati. Le domande hanno stato editoriale di bozza allineata alle fonti. Non tutte le pagine sono state trasformate in domande e non è stata svolta una revisione indipendente della normativa vigente. Il testo dello schema patenti conservato oltre il bordo del PDF è stato recuperato integralmente e viene fornito in dispense/patenti-testo-recuperato.html. Le domande su questi passaggi sono contrassegnate con il tag Passaggi importanti recuperati. La formulazione dei limiti riproduce la fonte; non è stata normalizzata come verifica indipendente del Codice della Strada. Gli appunti SDI informali restano identificati come tali; le due definizioni contraddette dalla nuova dispensa sono state corrette.

Le date effettive sono riportate nel catalogo: la sinossi centrale/trasmissioni è del 2023; la dispensa di comunicazione reca Ed. 2025 pur avendo 2026 nel nome del file; Informatica d’Arma ha copertina 2025 e aggiornamento agosto 2026.

## Verifica

Controllati unicità degli ID e delle domande, tre opzioni distinte, una soluzione per domanda, riferimenti entro i limiti delle fonti, integrità SQLite e chiavi esterne. Verificate ricerca, capitoli, quiz, spiegazioni, preferiti, recupero errori, timer, migrazione dei progressi, funzionamento offline e layout da 360 a 1440 pixel. Vedere QA.json e anteprime/.


## Grafica v3.0

Immagine della home ispirata alla fotografia allegata: figura femminile in uniforme, capelli castani lunghi e facciata con colonne sullo sfondo. Asset: assets/carabiniere-hero-v3.png. Generata con lo strumento integrato di creazione immagini. Prompt: illustrazione editoriale realistica di una carabiniera adulta, uniforme blu scuro con profili rossi, volto e capelli ispirati alla foto, figura sul lato destro, cortile con colonne sfumato, spazio blu scuro a sinistra, senza testo o interfaccia del telefono.

## Ampliamento v3.0

Aggiunte 300 domande su concetti distinti, senza duplicati testuali. Controllo di similarità e revisione dei concetti, con sostituzione dei casi di sovrapposizione individuati. Gli ID delle precedenti 320 domande sono conservati; il passaggio da banca 2.0.0 a 3.0.0 non azzera statistiche, errori o preferiti.

## Avvio aggiornamento locale v3.0.1

Se la Home mostra ancora 320 domande, arrestare il vecchio server con Ctrl+C. Aprire un Terminale nella nuova cartella quiz-carabinieri estratta e avviare `python3 -m http.server 8080`. Aprire http://localhost:8080 e premere Cmd+Shift+R. La versione aggiornata mostra 933 domande e la carabiniera generata. I progressi rimangono nel browser.

## Ampliamento Centrale operativa v3.1

La materia passa da 40 a 140 domande in 24 capitoli didattici: 90 nuovi quesiti dalla sinossi 2023 e 10 approfondimenti da tre fonti ufficiali online consultate il 7 ottobre 2026. Tutte le 620 domande precedenti e i loro ID sono conservati. L’aggiornamento dalla banca 3.0.0 conserva statistiche, errori e preferiti. Nessuna nuova sinossi completa ufficiale è stata reperita online: il documento allegato rimane la fonte principale.

Le fonti online sono Arma dei Carabinieri (data storica del 112 nazionale), Regione Lazio (funzionamento NUE e Where ARE U) ed ETSI (standard TETRA). Ogni approfondimento è riconoscibile nel quiz e collega a una scheda locale con il link alla pagina originale. Le schede locali sono disponibili offline; le pagine originali richiedono connessione. Le informazioni regionali sono formulate indicando il contesto Lazio. Il catalogo e SQLite conservano URL, origine e data di consultazione. Le descrizioni tecniche degli apparati nella sinossi sono riferite all’edizione 2023 e non costituiscono verifica dell’attuale dotazione.

## Quiz illustrati e sessioni casuali v3.2

Centrale operativa e trasmissioni raggiunge 353 domande in 26 capitoli: 213 nuovi quesiti dalla sinossi, con ampliamento di tutti i 24 capitoli precedenti e due sezioni per telecomandi/frontali e consolle CN2. Le altre materie conservano le domande precedenti. Il testo incollato in chat è fornito come trascrizione di supporto; le fonti dei quesiti rimandano alle pagine del PDF originale. Le descrizioni seguono la sinossi 2023, non una verifica della dotazione attuale.

Sono presenti 56 quesiti con immagini e 11 figure originali: TC4, FPG1, portatile GP380/388, consolle CN2, terminali SC2020/MTM5400, sistemi HF e schemi TMO/DMO. Le figure sono renderizzazioni di porzioni del PDF, con numerazione conservata; non sono ricostruzioni generate. Toccare una figura apre la versione ingrandita. Sono precaricate per uso offline. Ogni immagine conserva fonte, pagina, ritaglio, didascalia e testo alternativo; questi dati sono esportati in question_media nel database SQLite.

Tutte le sessioni mescolano domande e ordine delle tre risposte, aggiornando la posizione della soluzione corretta e senza modificare la banca originale. Nei quiz completi si utilizzano tutte le domande della materia o del capitolo, in ordine casuale. Se lo stesso ordine si ripresenta nella sessione successiva dello stesso tipo, viene ruotato. Anche l'ordine delle opzioni evita la ripetizione identica consecutiva per lo stesso quesito.

Le nuove sessioni casuali per materia o capitolo estraggono il numero configurato nelle Impostazioni (20 iniziali), limitato alla disponibilità del gruppo scelto. Si privilegiano domande non presenti nella precedente sessione dello stesso tipo, completando con quelle già usate se necessario. Nessuna domanda si ripete nella singola sessione; le sessioni successive possono riutilizzare quesiti della banca finita. Nei capitoli piccoli cambia l'ordine di domande e opzioni anche quando tutti i quesiti sono necessari. La casualità dei quiz e delle opzioni è applicata anche alle altre 14 materie.

Gli ID e le risposte corrette delle 720 domande precedenti sono conservati. L'aggiornamento da banca 3.1.0 mantiene statistiche, errori e preferiti. Le immagini restano associate anche ai quesiti salvati o agli errori.
