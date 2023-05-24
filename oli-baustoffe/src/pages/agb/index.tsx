import React from 'react';
import Images from '../../constants/images';
import { Inter } from 'next/font/google';
import homeStyles from '../../styles/Home.module.css';

import {
    NavbarTwo,
    Footer
  } from '../../components';

const inter = Inter({ subsets: ['latin'] })

const index = () => {
  return (
    <>
    <header className={`${homeStyles.main} ${inter.className}` + ' header'}>
        <NavbarTwo />
    </header>      
    <div className='container margin-bottom-md'>
        <h1 className='heading_primary padding_top center-text'> AGB</h1>
        <section>
          <h2 className='heading_tertiary'>§ 1 Zahlungsarten</h2>

          <p>(1) Vorauskasse (Anzahlung) - Restzahlung bei Warenlieferung. Der Anzahlungsbetrag ist bei Dach- und Trapezplatten in der Regel der Plattenbetrag in Brutto. Der Restbetrag wird dann am Liefertag in Bar vor Ort beim Kraftfahrer bezahlt.</p>

          <p>(2) Bei Materialbestellungen bis 30 Quadratmeter ist der Gesamtbetrag die Anzahlung.</p>

          <p>(3) Bei den anderen angebotenen Artikeln ist in der Regel 50% der Gesamtsumme der Anzahlungsbetrag und der Rest bei Warenlieferung in Bar.</p>

          <p>(4) Sollten wir unsere Ware über eine Spedition oder andere Lieferanten versenden, ist der gesamte Betrag als Vorkasse von Ihnen zu leisten. Die Lieferung erfolgt dann per Nachnahme und die Gebühren dafür werden vor Ort von Ihnen getragen.</p>
        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 2 Preise</h2>

          <p>(1) Bei Gründen, die wir nicht zu vertreten haben und die sich aus einer Erhöhung unserer Einkaufspreise oder Herstellungskosten ergeben, sind wir ansonsten zu einer angemessenen Anpassung berechtigt.</p>

          <p>(2) Beträgt die Preiserhöhung aufgrund dieser Anpassung über fünf Prozent, kann der Kunde innerhalb einer Frist von zwei (2) Wochen nach Zugang der Benachrichtigung über die Preiserhöhung durch schriftliche Erklärung gegenüber OLI-Baustoffe vom Vertrag zurücktreten.</p>
        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 3 Abnahmemengen</h2>

          <p>(1) Unter 30 qm wird generell ein Aufschlag von 10% und unter 20 qm 25% auf den Material-Gesamtbetrag erhoben.</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 4 Finanzierung</h2>

          <p>(1) Da wir in der Regel immer eine Anzahlung verlangen, haben Sie den Betrag schon in zwei Teilen gesplittet. Sie können natürlich auch mehrere Ratenzahlungen mit uns vereinbaren, wobei dann die letzte Raten bei Warenlieferung in Bar bezahlt wird.</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 5 Versandkosten</h2>


          <table className='contact-table'>
          <tbody>
            <tr>
              <th>Versandkosten</th>
              <td>ab 30qm Lieferpreis Berlin</td>
            </tr>
            <tr>
              <th>Pauschale für Selbstabholung</th>
              <td>25,00 EUR</td>
            </tr>
            <tr>
              <th>bis 100km ab Berlin Mitte</th>
              <td>60,00 EUR</td>
            </tr>
            <tr>
              <th>ab 100km ab Berlin Mitte Bundesweit</th>
              <td>100,00 EUR</td>
            </tr>
            <tr>
              <th>Österreich & Schweiz ab</th>
              <td>180,00 EUR</td>
            </tr>
            <tr>
              <th>restliche EU</th>
              <td>auf Anfrag</td>
            </tr>
            <tr>
              <th>Lieferung unter 30qm</th>
              <td>10% Aufschlag (nur bei Lieferung)</td>
            </tr>
            <tr>
              <th>bis 100km ab Berlin Mitte</th>
              <td>60,00 EUR</td>
            </tr>
          </tbody>
        </table>

          <p>Falls im Artikel nicht anders angegeben, oder im Angebot nicht anders aufgeführt.</p>
          <p>Sollten wir unsere Ware über eine Spedition oder andere Lieferanten versenden gelten die Versandkosten die dann angegeben werden.</p>
        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 6 Lieferbedingungen</h2>

          <p>(1) Der Beginn der von uns angegebenen Lieferzeit setzt die rechtzeitige und ordnungsgemäße Erfüllung der Verpflichtungen des Bestellers voraus. Die Einrede des nicht erfüllten Vertrages bleibt vorbehalten.</p>
          <p>(2) Die voraussichtlichen Lieferzeiten können Sie der Produktbeschreibung bei E-bay oder aus unserem Angebot entnehmen. Wenn keine Lieferzeit angegeben ist, erfolgt die Lieferung innerhalb von 30 Tagen, in der Regel zwischen 7-21 Tage nach Anzahlungsbetrageingang. In der Regel liefern wir Wöchentlich von Dienstag bis Samstag die Ware aus. Da wir Wöchentlich ca. 2500km in Deutschland unterwegs sind, können wir auf Lieferwünsche nicht näher eingehen. Sie werden über den genauen Liefertermin durch unserem Kraftfahrer ca.2-5 Tage vor Lieferung in Kenntnis gesetzt. Es kann jedoch zu unvorhersehbaren Lieferschwierigkeiten kommen. Falls dieser Fall eintritt werden Sie benachrichtigt.</p>
          <p>(3) Sollte bei der Lieferung ein oder mehrere Materialien durch ungeklärte Gründe nicht im Lieferumfang enthalten sein, kann der Kunde die fehlenden Materialien (und nur die fehlenden Materialien) von der Rechnung abziehen. Die fehlenden Materialien werden dann von uns so schnell wie möglich nachgeschickt. Bei Wareneingang hat der Kunde dann den gesamten noch offenen Betrag zu zahlen (entweder in Bar beim Kraftfahrer oder wenn die Lieferung über eine Spedition geht, ist sofort nach Eingang der Ware der Betrag zu überweisen)</p>
          <p>(4) Weitere gesetzliche Ansprüche und Rechte des Bestellers wegen eines Lieferverzuges bleiben unberührt.</p>
          <p>(5) Bei unvorhersehbaren Lieferschwierigkeiten sind Preisnachlässe ausgeschlossen.</p>
          <p>(6) Wir können bis zu einer Länge von 7,00 Meter liefern.</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 7 Selbstabholung</h2>

          <p>(1) Die Ware können Sie natürlich auch abholen.Bitte beachten Sie, das wir kein Lagerbestand haben. Sie bestellen bei uns und können dann die Ware zu einen abgesprochen Termin abholen.</p>
          <p>(2) Es fallen dazu auch Kosten (Pauschale) in Höhe von ca. 25,00EUR an (näheres dann nach Angebotserstellung).</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 8 Rückgaberecht</h2>

          <p>(1) Bis zur vollständigen Bezahlung bleibt die Ware unser uneingeschränktes Eigentum.</p>
          <p>(2) Sollten Sie die Bestellung zurückziehen, nachdem die Ware für Sie zugeschnitten wurde, tragen Sie von dem Plattenbruttobetrag 25%. Erfragen Sie dazu den Fortschritt Ihrer Bestellung.</p>
          <p>(3) Als Verbraucher sind Sie an Ihre Bestellung nicht mehr gebunden, wenn Sie die gelieferte Ware innerhalb einer Frist von 14 Tagen nach Erhalt der Ware auf Ihre Kosten und Gefahr zurücksenden oder uns beauftragen die Ware zu Ihren Lasten wieder abzuholen.</p>
          <p>(4) Bei einer Rückgabe von Dach- oder Trapezplatten werden 25% der Gesamtrechnungssumme von uns einbehalten, da diese Platten immer individuell für jeden Kunden zugeschnitten werden und der Wiederverkaufswert gering ist. Setzen Sie sich dazu mit uns telefonisch in Verbindung.</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 9 Gewährleistung</h2>

          <p>(1) Da wir ein Handelsunternehmen sind, erfolgt die Gewährleistung nach den Angaben des Herstellers, wobei Sie sich im Falle eines Falles an uns wenden können und wir alles weitere für Sie erledigen.</p>
          <p>(2) Bei Ausführenden Arbeiten unsererseits geben wir die gesetzliche Gewährleistung des BGB.</p>
          <p>(3) 2 Jahre Garantie gewähren wir auf Dachfenster, Trockenbauartikel und auf alle anderen Artikel die Sie bei uns erwerben.</p>
          <p>(4) Bei Dachplatten und Trapezplatten gilt die Herstellergarantie 10 Jahre Garantie bei Aluzink oder einer Polyester Beschichtung 30 Jahre Garantie bei einer Prelaq Nova Beschichtung.</p>
          <p>(5) Falls ein Mangel der Ware nach der Lieferung festgestellt wird und der Schaden vom Werk oder durch die Lieferung verursacht wurde, werden die beschädigten Teile umgehend nachgeliefert.</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 10 Eigentumsvorbehalt</h2>

          <p>(1) Wir behalten uns das Eigentum an der gelieferten Sache bis zur vollständigen Zahlung sämtlicher Forderungen aus dem Liefervertrag vor, auch wenn wir uns nicht stets ausdrücklich hierauf berufen. Wir sind berechtigt, die Kaufsache zurückzunehmen, wenn der Besteller sich vertragswidrig verhält.</p>
          <p>(2) Der Besteller ist verpflichtet, solange das Eigentum noch nicht auf ihn übergegangen ist, die Kaufsache pfleglich zu behandeln. Insbesondere ist er verpflichtet, diese auf eigene Kosten gegen Diebstahl-, und andere Schäden ausreichend zum Neuwert zu versichern.</p>

        </section>

        <section>
          <h2 className='heading_tertiary padding_top'>§ 11 Angebot, Auftrag & Sonstiges</h2>

          <p>(1) Wird uns ein Auftrag per. (Telefon, Email oder Fax) erteilt, gilt dies als verbindliche Bestellung und die Ware wird schnellstmöglich von uns beim Werk bestellt (Zugeschnitten). Änderungen der Längen, Farben usw. ist nach unserer Bestellung beim Werk nicht mehr möglich. Sollte keine Zeichnung bei Angebots- und Auftrags- Erteilung vorgelegen haben, können wir keine Garantie für die Passgenauigkeit der Platten übernehmen. Die Farben der der Zubehörteile wie: Dachrinne, Fallrohr und Schrauben können von den Dachplatten leicht Variieren.</p>
          <p>(2) Dieser Vertrag und die gesamten Rechtsbeziehungen der Parteien unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
          <p>(3) Erfüllungsort und ausschließlicher Gerichtsstand und für alle Streitigkeiten aus diesem Vertrag ist unser Geschäftssitz, sofern sich aus der Auftragsbestätigung nichts anderes ergibt.</p>
          <p>(4) Alle Vereinbarungen, die zwischen den Parteien zwecks Ausführung dieses Vertrages getroffen werden, sind in diesem Vertrag schriftlich niedergelegt.</p>
          <p>(5) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden oder eine Lücke enthalten, so bleiben die übrigen Bestimmungen hiervon unberührt. Eine sog. salvatorische Klausel (&quot; Die Parteien verpflichten sich, anstelle der unwirksamen Regelung eine solche gesetzlich zulässige Regelung zu treffen, die dem wirtschaftlichen Zweck der unwirksamen Regelung am nächsten kommt, bzw. diese Lücke ausfüllt. &quot;) sollte nicht in den AGBs stehen, sondern als Individualvereinbarung verhandelt werden.</p>
          <p>(6) Ihre Bestellungen werden bei uns gespeichert. Sollten Sie Ihre Unterlagen verlegen, wenden Sie sich bitte an uns und wir senden Ihnen eine Kopie der Daten Ihrer Bestellung gerne zu.</p>

        </section>

    </div>
    <footer className={homeStyles.footer}>
        <Footer />
    </footer>
  </>
  )
}

export default index