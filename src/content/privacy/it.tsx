// src/content/privacy/it.tsx — Dimora del Funaro
import {
  A,
  ADDRESS_IT,
  BROWSER_LINKS,
  EMAIL,
  H2,
  H3,
  HAS_GOOGLE_ANALYTICS,
  HAS_GOOGLE_MAPS_EMBED,
  NAME,
  OL,
  P,
  SITE,
  UL,
} from './ui';

export function PrivacyIt() {
  return (
    <>
      <H2>1) Informazioni relative alla privacy policy del sito</H2>
      <P>
        In questa sezione sono contenute le informazioni relative alle modalità di gestione del sito {SITE} in
        riferimento al trattamento dei dati degli utenti che lo consultano.
      </P>
      <P>
        La presente informativa ha valore anche ai fini degli artt. 13 e 14 del Regolamento UE 2016/679, relativo alla
        protezione delle persone fisiche con riguardo al trattamento dei dati personali nonché alla libera circolazione
        di tali dati, per i soggetti che interagiscono con “{NAME}”, raggiungibile all’indirizzo corrispondente alla
        pagina iniziale {SITE}.
      </P>
      <P>
        La presente informativa è resa anche ai sensi del provvedimento in materia di cookie n. 229 dell’8 maggio 2014
        e delle Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021 del Garante della Privacy, al
        fine di informare i visitatori del sito circa l’utilizzo dei dati inseriti e dei cookie utilizzati dal sito
        stesso.
      </P>
      <P>
        L’informativa è resa solo per il sito {SITE} e non anche per altri siti web eventualmente consultati
        dall’utente tramite link in esso contenuti.
      </P>
      <P>
        Scopo del presente documento è fornire indicazioni circa le modalità, i tempi e la natura delle informazioni
        che i titolari del trattamento devono fornire agli utenti al momento della connessione alle pagine web di “
        {NAME}”, indipendentemente dagli scopi del collegamento stesso, secondo la legislazione italiana ed europea.
      </P>
      <P>
        Se l’utente ha meno di sedici anni, ai sensi dell’art. 8, paragrafo 1 del Regolamento UE 2016/679, non dovrà
        effettuare prenotazioni ovvero richieste di informazioni in assenza di un previo consenso al trattamento dei
        dati conferito dai genitori esercenti la responsabilità genitoriale.
      </P>
      <P>
        Utilizzando uno qualsiasi dei nostri servizi e/o accettando la presente informativa (nell’ambito della
        registrazione di uno dei nostri servizi), l’utente acconsente alla raccolta e all’uso delle informazioni
        personali come descritto dalla presente informativa.
      </P>

      <H2>2) Titolare del trattamento</H2>
      <P>
        Il Titolare del trattamento è “{NAME}”, con sede in {ADDRESS_IT}. Email:{' '}
        <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
      </P>

      <H2>3) Oggetto del trattamento</H2>
      <P>
        Il Titolare tratta i dati personali identificativi (ad esempio: nome, cognome, indirizzo, e-mail e telefono) in
        occasione della conclusione del contratto con la struttura ricettiva ovvero di richieste di informazioni.
        {HAS_GOOGLE_ANALYTICS &&
          ' Previo consenso dell’utente, sono inoltre trattati dati di navigazione in forma aggregata e pseudonimizzata (ad esempio pagine visitate, durata della visita, tipo di dispositivo e browser, provenienza geografica approssimativa).'}
      </P>

      <H2>4) Finalità e base giuridica del trattamento</H2>
      <P>I trattamenti sono effettuati per le seguenti finalità:</P>
      <OL>
        <li>
          per acquisire e confermare la sua prenotazione di servizi di alloggio o ad essi accessori da lei richiesti
          alla struttura ricettiva. Trattandosi di trattamenti necessari per la definizione del contratto e per la sua
          successiva esecuzione, non è richiesto il suo consenso al trattamento. In caso di rifiuto a conferire i suoi
          dati personali, la struttura non potrà confermare la prenotazione o fornirle i servizi richiesti;
        </li>
        <li>
          per adempiere all’obbligo previsto dal Testo Unico delle Leggi di Pubblica Sicurezza (art. 109, R.D.
          18/06/1931 n. 773), che impone alla struttura ricettiva di comunicare alla Questura, per i fini di pubblica
          sicurezza, le generalità dei clienti alloggiati secondo le modalità previste dal Decreto Ministeriale del 7
          gennaio 2013. Il conferimento dei dati è obbligatorio e non richiede il suo consenso e, in caso di rifiuto a
          fornirli, la struttura non potrà ospitarla;
        </li>
        <li>
          per adempiere ai vigenti obblighi amministrativi, contabili e fiscali. Per tali finalità il trattamento viene
          effettuato senza necessità di acquisire il suo consenso. I dati sono trattati dal Titolare o da soggetti da
          esso specificatamente incaricati. In caso di rifiuto a conferire i dati necessari per i citati adempimenti,
          la struttura non potrà fornire i servizi richiesti;
        </li>
        <li>
          per rispondere a richieste di prenotazione e di informazioni sul soggiorno. Al riguardo, nella pagina
          Contatti del sito è presente un modulo attraverso cui può inviarci le sue date e le sue richieste, indicando
          nome, cognome, indirizzo e-mail ed eventualmente telefono. Previa acquisizione del suo consenso (spuntando la
          casella relativa alla presa visione dell’informativa sulla privacy), la struttura la contatterà via e-mail o
          telefono. L’invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo
          sito comporta la successiva acquisizione dell’indirizzo del mittente, necessario per rispondere alle
          richieste, nonché degli eventuali altri dati personali inseriti nella sua missiva
          {HAS_GOOGLE_ANALYTICS ? ';' : '.'}
        </li>
        {HAS_GOOGLE_ANALYTICS && (
          <li>
            per finalità statistiche, ossia per misurare in forma aggregata l’utilizzo del sito (pagine visitate, clic
            sui contatti, invio del modulo) e migliorarne i contenuti. Questo trattamento avviene esclusivamente previo
            suo consenso (art. 6, par. 1, lett. a del Regolamento UE 2016/679), espresso tramite il banner cookie, e
            può essere revocato in qualsiasi momento dal link «Preferenze cookie» presente in fondo a ogni pagina. Il
            mancato consenso non ha alcuna conseguenza sulla possibilità di navigare il sito o di contattare la
            struttura.
          </li>
        )}
      </OL>

      <H2>5) Modalità di trattamento</H2>
      <P>
        Il trattamento dei dati avverrà da parte dello stesso Titolare ovvero da soggetti appositamente incaricati
        (quali ad esempio Responsabili esterni) con procedure, strumenti tecnici e informatici ovvero manuali idonei a
        tutelare la riservatezza e la sicurezza dei dati dell’Interessato, e consiste nella loro raccolta,
        registrazione, organizzazione, conservazione, consultazione, elaborazione, modificazione, selezione, estrazione,
        raffronto, utilizzo, interconnessione, blocco, comunicazione, diffusione, cancellazione e distruzione, comprese
        la combinazione di due o più delle attività suddette.
      </P>

      <H2>6) Tempi di conservazione</H2>
      <P>I dati da lei forniti:</P>
      <UL>
        <li>per la finalità n. 1: saranno conservati sino alla sua partenza;</li>
        <li>per la finalità n. 2: non sono conservati dalla struttura;</li>
        <li>
          per la finalità n. 3: saranno conservati dai Responsabili esterni (consulente fiscale e contabile) per i tempi
          previsti dalle rispettive normative (10 anni, o anche oltre in caso di accertamenti fiscali);
        </li>
        <li>
          per la finalità n. 4: saranno conservati per il tempo strettamente necessario a fornire all’utente le
          informazioni richieste
          {HAS_GOOGLE_ANALYTICS ? ';' : '.'}
        </li>
        {HAS_GOOGLE_ANALYTICS && (
          <li>
            per la finalità n. 5: i dati statistici sono conservati in Google Analytics per un massimo di 14 mesi, al
            termine dei quali vengono cancellati automaticamente.
          </li>
        )}
      </UL>
      <P>
        I dati saranno in ogni caso eliminati a seguito di richiesta dell’Interessato, salvi ulteriori obblighi di
        conservazione previsti dalla legge.
      </P>

      <H2>7) Accesso ai dati</H2>
      <P>
        I suoi dati potranno essere accessibili a consulenti esterni, istituti di credito e ad autorità di vigilanza e
        di controllo.
        {HAS_GOOGLE_ANALYTICS &&
          ' I dati statistici sono trattati da Google Ireland Limited, in qualità di Responsabile del trattamento, per il servizio Google Analytics; il consenso ai cookie è gestito tramite iubenda S.r.l.'}
      </P>

      <H2>8) Trasferimento dati</H2>
      {HAS_GOOGLE_ANALYTICS ? (
        <P>
          Il Titolare non trasferisce direttamente i dati personali in paesi terzi o organizzazioni internazionali.
          Limitatamente ai dati statistici raccolti tramite Google Analytics, e solo previo consenso dell’utente, i
          dati possono essere trattati da Google LLC anche negli Stati Uniti. Tale trasferimento avviene sulla base
          della decisione di adeguatezza della Commissione Europea relativa all’EU-U.S. Data Privacy Framework, a cui
          Google LLC aderisce, e delle Clausole Contrattuali Standard.
        </P>
      ) : (
        <P>
          Il Titolare del trattamento non trasferisce i dati personali in paesi terzi o organizzazioni internazionali.
        </P>
      )}

      <H2>9) Diritti dell’interessato</H2>
      <P>
        L’interessato potrà far valere i propri diritti, come espressi dall’art. 15 del Regolamento UE 2016/679, nei
        confronti del Titolare del trattamento. In particolare l’interessato potrà ottenere la conferma dell’esistenza
        o meno di dati personali che lo riguardano, anche se non ancora registrati, e la loro comunicazione in forma
        intelligibile.
      </P>
      <P>L’interessato ha diritto di ottenere l’indicazione:</P>
      <UL>
        <li>dell’origine dei dati personali;</li>
        <li>delle finalità e modalità del trattamento;</li>
        <li>della logica applicata in caso di trattamento effettuato con l’ausilio di strumenti elettronici;</li>
        <li>
          dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono
          venirne a conoscenza in qualità di rappresentante designato nel territorio dello Stato, di responsabili o
          incaricati.
        </li>
      </UL>
      <P>L’interessato ha diritto di ottenere:</P>
      <UL>
        <li>l’aggiornamento, la rettificazione ovvero, quando vi ha interesse, l’integrazione dei dati;</li>
        <li>
          la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge,
          compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati
          raccolti o successivamente trattati;
        </li>
        <li>
          l’attestazione che le operazioni di cui ai punti precedenti sono state portate a conoscenza, anche per quanto
          riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in
          cui tale adempimento si riveli impossibile o comporti un impiego di mezzi manifestamente sproporzionato
          rispetto al diritto tutelato.
        </li>
      </UL>
      <P>
        L’interessato ha diritto di opporsi al trattamento nei termini e con le modalità previste dalle disposizioni
        richiamate
        {HAS_GOOGLE_ANALYTICS
          ? ' e di revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca. Ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).'
          : '.'}
      </P>

      <H2>10) Modifiche della presente informativa</H2>
      <P>
        La presente informativa può subire variazioni, al fine di fornire all’interessato un’informativa costantemente
        aggiornata sia alle modifiche delle finalità per le quali il Titolare tratta i dati dell’interessato, sia alle
        modifiche normative in materia di privacy. Si consiglia, quindi, di riferirsi sempre alla versione più
        aggiornata.
      </P>
      <P>
        Per qualsiasi ulteriore informazione, e per far valere i diritti a lei riconosciuti dalla normativa in materia
        di privacy, potrà rivolgersi al Titolare del trattamento “{NAME}”, con sede in {ADDRESS_IT}, al seguente
        indirizzo e-mail: <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
      </P>

      <H2>Informativa estesa sui cookie</H2>

      <H3>Cosa sono i cookie</H3>
      <P>
        Un “cookie” è un piccolo file di testo creato sul dispositivo dell’utente al momento in cui questo accede a un
        determinato sito, con lo scopo di immagazzinare e trasportare informazioni. I cookie sono inviati da un server
        web (il computer sul quale è in esecuzione il sito visitato) al browser dell’utente e memorizzati sul
        dispositivo di quest’ultimo; vengono quindi re-inviati al sito web al momento delle visite successive. Nel
        corso della navigazione l’utente potrebbe ricevere sul suo terminale anche cookie di siti diversi (cosiddetti
        cookie di “terze parti”), impostati direttamente dai gestori di detti siti web e utilizzati per le finalità e
        secondo le modalità da questi definite.
      </P>

      <H3>Tipologie di cookie utilizzate dal presente sito</H3>
      <P>
        Il sito {SITE} utilizza cookie tecnici, strettamente necessari al funzionamento del sito e alla navigazione,
        rispetto ai quali, ai sensi dell’art. 122 del Codice privacy e del Provvedimento del Garante dell’8 maggio
        2014, non è richiesto alcun consenso da parte dell’interessato. Il sito non utilizza cookie di profilazione.
      </P>

      {HAS_GOOGLE_ANALYTICS && (
        <P>
          Tra i cookie tecnici rientra quello installato da iubenda, la piattaforma con cui il sito raccoglie e
          registra le preferenze dell’utente sui cookie: serve unicamente a ricordare la scelta espressa nel banner,
          così da non riproporlo a ogni visita.
        </P>
      )}

      {HAS_GOOGLE_MAPS_EMBED && (
        <P>
          Nella pagina Contatti è disponibile una mappa fornita dal servizio Google Maps (Google Ireland Limited). La
          mappa viene caricata solo dopo un clic esplicito dell’utente sul pulsante «Mostra la mappa»: prima di allora
          non viene trasmesso alcun dato a Google. La visualizzazione della mappa può comportare l’installazione di
          cookie di terze parti da parte di Google, che li gestisce secondo la propria informativa, consultabile
          all’indirizzo <A href="https://policies.google.com/privacy">policies.google.com/privacy</A>. In alternativa,
          l’indirizzo della struttura è indicato in chiaro nella stessa pagina, insieme a un link per aprirlo
          direttamente in Google Maps.
        </P>
      )}

      {HAS_GOOGLE_ANALYTICS && (
        <>
          <H3>Cookie statistici (solo previo consenso)</H3>
          <P>
            Previo consenso dell’utente, il sito utilizza Google Analytics 4, un servizio di analisi web fornito da
            Google Ireland Limited, attivato tramite Google Tag Manager. Google Analytics raccoglie informazioni in
            forma aggregata e pseudonimizzata sull’utilizzo del sito (ad esempio pagine visitate, durata della visita,
            clic su telefono, e-mail, WhatsApp e mappa, invio del modulo di contatto), utilizzate dal Titolare
            esclusivamente per finalità statistiche e per migliorare il sito. Google Analytics 4 non registra né
            memorizza gli indirizzi IP degli utenti; la funzione Google Signals e la condivisione dei dati per finalità
            pubblicitarie sono disattivate.
          </P>
          <P>
            Fino a quando l’utente non presta il consenso tramite il banner, i cookie di Google Analytics non vengono
            installati e nessun dato statistico viene inviato a Google. Il consenso è gestito tramite iubenda e
            Google Consent Mode, e può essere modificato o revocato in qualsiasi momento dal link «Preferenze cookie»
            presente in fondo a ogni pagina.
          </P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-ink-muted">
              <thead>
                <tr className="border-b border-ink/20 text-espresso">
                  <th className="py-2 pr-4">Cookie</th>
                  <th className="py-2 pr-4">Tipo</th>
                  <th className="py-2 pr-4">Durata</th>
                  <th className="py-2">Descrizione</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ink/10">
                  <td className="py-2 pr-4">_iub_cs-*</td>
                  <td className="py-2 pr-4">Tecnico</td>
                  <td className="py-2 pr-4">fino a 12 mesi</td>
                  <td className="py-2">iubenda: memorizza le preferenze sui cookie espresse dall’utente</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-2 pr-4">_ga</td>
                  <td className="py-2 pr-4">Statistico (terze parti)</td>
                  <td className="py-2 pr-4">2 anni</td>
                  <td className="py-2">Google Analytics: distingue gli utenti in forma pseudonimizzata</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-2 pr-4">_ga_*</td>
                  <td className="py-2 pr-4">Statistico (terze parti)</td>
                  <td className="py-2 pr-4">2 anni</td>
                  <td className="py-2">Google Analytics: mantiene lo stato della sessione</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Informativa di Google:{' '}
            <A href="https://policies.google.com/privacy">policies.google.com/privacy</A>. Componente aggiuntivo del
            browser per la disattivazione di Google Analytics:{' '}
            <A href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</A>.
          </P>
        </>
      )}

      <H3>Modalità del trattamento</H3>
      <P>
        Il trattamento viene effettuato con strumenti automatizzati dal Titolare. Non viene effettuata alcuna
        diffusione o comunicazione.
      </P>

      <H3>Disabilitazione dei cookie</H3>
      {HAS_GOOGLE_ANALYTICS && (
        <P>
          L’utente può modificare o revocare in qualsiasi momento il consenso ai cookie statistici dal link
          «Preferenze cookie» presente in fondo a ogni pagina del sito.
        </P>
      )}
      <P>
        L’utente può inoltre gestire le preferenze relative ai cookie direttamente all’interno del proprio browser e
        impedire, ad esempio, che terze parti possano installarne. Tramite le preferenze del browser è inoltre
        possibile eliminare i cookie installati in passato. È importante notare che, disabilitando tutti i cookie, il
        funzionamento di questo sito potrebbe essere compromesso. Ciascun browser presenta procedure diverse per la
        gestione delle impostazioni; l’utente può ottenere istruzioni specifiche attraverso i link sottostanti:
      </P>
      <UL>
        {BROWSER_LINKS.map((b) => (
          <li key={b.name}>
            <A href={b.href}>{b.name}</A>
          </li>
        ))}
      </UL>
      <P>
        In caso di servizi erogati da terze parti, l’utente può inoltre esercitare il proprio diritto a opporsi al
        tracciamento informandosi tramite la privacy policy della terza parte, tramite il link di opt-out se
        esplicitamente fornito o contattando direttamente la stessa. Per avere informazioni sui cookie archiviati sul
        proprio terminale e disattivarli singolarmente si rinvia al link:{' '}
        <A href="https://www.youronlinechoices.com/it/le-tue-scelte">www.youronlinechoices.com/it/le-tue-scelte</A>.
      </P>

      <P>
        <em>Ultimo aggiornamento: 13 ottobre 2026.</em>
      </P>
    </>
  );
}