# Quiz Carabinieri v4.0

App di allenamento: **1.139 domande**, 15 materie, 199 capitoli e 28 fonti. Tre risposte per domanda, soluzione e spiegazione con riferimenti al materiale di studio. La banca ha copertura parziale e non è una banca ufficiale d’esame.

[Apri l’app](https://massimo23it.github.io/Quiz-Carabinieri/)

## Novità

- **206 nuovi quesiti di diritto penale** dalle presentazioni del 13 ottobre: 51 di livello 2 e 155 di livello 3. Diritto penale conta ora 271 quesiti.
- Sei nuove sezioni: struttura del reato, cause di esclusione, pubblica amministrazione, amministrazione della giustizia, patrimonio e persona. Le versioni alternative delle slide restano consultabili. I passaggi contrastanti o superati non vengono usati come regole operative nei nuovi quiz.
- Le otto presentazioni originali sono scaricabili. Le trascrizioni permettono di raggiungere la singola diapositiva dalla spiegazione.
- **Nessuna ripetizione automatica nei quiz nuovi**, anche cambiando materia, capitolo o difficoltà e dopo una riapertura. Domande e opzioni sono mescolate. Quando disponibile, la selezione mista dedica almeno il 65% dei posti ai livelli 2 e 3.
- **Errori da rifare** nella Home e in Ripasso: elenco persistente, filtro per materia, quiz degli errori, spiegazioni e fonti. Due risposte corrette consecutive recuperano una domanda; un nuovo errore azzera la serie.

## Come funziona il ciclo senza ripetizioni

La prima visualizzazione registra l’ID della domanda. Anche una domanda mostrata ma non ancora risposta non torna nei quiz nuovi. Una sessione abbandonata non consuma le altre domande che erano state selezionate ma non mostrate.

Il registro è comune a quiz rapido, studio per materia o capitolo, sessioni casuali, livelli di difficoltà e simulazioni. La banca è finita: all’esaurimento della selezione l’app si ferma e invita a scegliere altre domande nuove. **Non ricicla automaticamente la banca.** Solo il comando esplicito *Ricomincia un ciclo*, con conferma, rende nuovamente disponibili le domande. Progressi, errori e preferiti restano salvati.

Il ripasso degli errori, le aree deboli e i preferiti sono esercizi volontari che permettono di ripetere le domande. Il registro comprende anche quelle mostrate nel ripasso.

Dalla versione precedente vengono importati nel registro gli ID per cui esistono risposte salvate. Si conservano tutti i 933 ID precedenti e i relativi testi e soluzioni. Il registro e i progressi appartengono a questo browser: un altro dispositivo, un profilo diverso o la cancellazione dei dati del sito non condividono lo stesso ciclo.

## Avvio locale

Dopo aver clonato o scaricato la repository, dalla sua cartella:

```sh
python3 prepare_sources.py
python3 -m http.server 8080
```

Aprire http://localhost:8080. Non aprire index.html con doppio clic. Tre dispense grandi sono archiviate in `source-parts`; lo script verifica SHA-256 e ricostruisce gli originali. L’app dispone anche del recupero automatico per consultarle se una pubblicazione statica non ha ricostruito i file.

## Database

`banca-dati/Quiz_Carabinieri_Banca_v4.sqlite`: 1.139 domande, 3.417 risposte, fonti, capitoli, argomenti, citazioni e 56 collegamenti alle figure originali. Sono disponibili anche `banca.json`, `catalogo-fonti.json`, `domande.csv` e `schema.sql`.

## Pubblicazione e aggiornamenti

Il workflow `Publish Quiz Carabinieri` ricostruisce le dispense e prepara l’app per GitHub Pages. Nelle impostazioni Pages scegliere **GitHub Actions** per avere una sola procedura di pubblicazione.

Per caricare l’aggiornamento nel browser, aggiornare la pagina. Se compare una versione vecchia, usare Cmd+Shift+R su Mac o Ctrl+Shift+R su Windows. Nella versione installata, chiudere e riaprire l’app con connessione disponibile.

## Installazione e offline

Safari su iPhone/iPad: Condividi → Aggiungi alla schermata Home. Chrome su Android: Installa app / Aggiungi alla schermata Home. È una PWA, non un APK.

La banca, le immagini dei quesiti e le trascrizioni delle nuove slide sono disponibili offline dopo il primo caricamento completo. Per le dispense originali occorre prima consultarle con connessione. I dati restano salvati localmente nel browser.
