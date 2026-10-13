# Quiz Carabinieri v4.1

App di allenamento: **1.259 domande**, 15 materie, 214 capitoli e 28 fonti. Tre risposte per domanda, soluzione e spiegazione con riferimenti al materiale di studio. La banca ha copertura parziale e non è una banca ufficiale d’esame.

[Apri l’app](https://massimo23it.github.io/Quiz-Carabinieri/)

## Novità

- **122 nuovi quesiti avanzati dalle dispense** in tutte le 15 materie, con priorità alle sinossi e domande su casi e distinzioni. **48 quesiti esistenti rivisti** con alternative più plausibili e formulazioni meno ripetitive.
- Due quesiti sovrapposti sono stati accorpati. La migrazione conserva tentativi, errori, preferiti e registro delle domande viste.
- I quiz misti riservano, quando disponibili, il 60% dei posti al livello 3 e il 30% al livello 2. La selezione ruota fra le materie presenti per evitare che quella più numerosa domini il test. Restano disponibili i livelli singoli.
- Le domande ricavate da pagine già contrassegnate come importanti mantengono la priorità di selezione.
- **80 riferimenti Word controllati**, con 79 quesiti conservati dopo l'accorpamento: Informatica d’Arma e Storia dell’Arma hanno trascrizioni consultabili e collegamenti al paragrafo citato. Gli originali restano disponibili.
- **Nessuna ripetizione automatica nei quiz nuovi**, anche dopo una riapertura. Domande e risposte vengono mescolate.
- **Errori da rifare**: elenco persistente, filtro per materia e recupero dopo due risposte corrette consecutive.
- Restano disponibili gli originali e le trascrizioni delle otto presentazioni di diritto penale, con riferimenti alla singola diapositiva.

## Come funziona il ciclo senza ripetizioni

La prima visualizzazione registra l’ID della domanda. Anche una domanda mostrata ma non ancora risposta non torna nei quiz nuovi. Una sessione abbandonata non consuma le altre domande che erano state selezionate ma non mostrate.

Il registro è comune a quiz rapido, studio per materia o capitolo, sessioni casuali, livelli di difficoltà e simulazioni. La banca è finita: all’esaurimento della selezione l’app si ferma e invita a scegliere altre domande nuove. **Non ricicla automaticamente la banca.** Solo il comando esplicito *Ricomincia un ciclo*, con conferma, rende nuovamente disponibili le domande. Progressi, errori e preferiti restano salvati.

Il ripasso degli errori, le aree deboli e i preferiti sono esercizi volontari che permettono di ripetere le domande. Il registro comprende anche quelle mostrate nel ripasso.

Dalla versione precedente vengono importati nel registro gli ID per cui esistono risposte salvate. Gli ID dei quesiti conservati e le loro soluzioni restano stabili. I due ID accorpati sono associati ai corrispondenti quesiti canonici; i progressi vengono sommati senza azzerarli. Il registro e i progressi appartengono a questo browser: un altro dispositivo, un profilo diverso o la cancellazione dei dati del sito non condividono lo stesso ciclo.

## Avvio locale

Dopo aver clonato o scaricato la repository, dalla sua cartella:

```sh
python3 prepare_sources.py
python3 -m http.server 8080
```

Aprire http://localhost:8080. Non aprire index.html con doppio clic. Tre dispense grandi sono archiviate in `source-parts`; lo script verifica SHA-256 e ricostruisce gli originali. L’app dispone anche del recupero automatico per consultarle se una pubblicazione statica non ha ricostruito i file.

## Database

`banca-dati/Quiz_Carabinieri_Banca_v4.sqlite`: 1.259 domande, 3.777 risposte, fonti, capitoli, argomenti, citazioni e 56 collegamenti alle figure originali. Sono disponibili anche `banca.json`, `catalogo-fonti.json`, `domande.csv` e `schema.sql`.

## Pubblicazione e aggiornamenti

Il workflow `Publish Quiz Carabinieri` ricostruisce le dispense e prepara l’app per GitHub Pages. Nelle impostazioni Pages scegliere **GitHub Actions** per avere una sola procedura di pubblicazione.

Per caricare l’aggiornamento nel browser, aggiornare la pagina. Se compare una versione vecchia, usare Cmd+Shift+R su Mac o Ctrl+Shift+R su Windows. Nella versione installata, chiudere e riaprire l’app con connessione disponibile.

## Installazione e offline

Safari su iPhone/iPad: Condividi → Aggiungi alla schermata Home. Chrome su Android: Installa app / Aggiungi alla schermata Home. È una PWA, non un APK.

La banca, le immagini dei quesiti e le trascrizioni delle slide e dei due documenti Word sono disponibili offline dopo il primo caricamento completo. Per le dispense originali occorre prima consultarle con connessione. I dati restano salvati localmente nel browser.
