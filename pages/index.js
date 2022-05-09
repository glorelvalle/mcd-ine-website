import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>El origen del Sabaila-Doministiku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sabaila Doministiku" />
        <img src="/dominante.jpeg" alt="Dominante" />
        <p className="description">
          Sabaila doministiku da l-ren adierazpide nagusia.
        </p>
        <p>
          Sabaila doministiku da l-ren adierazpide nagusia. Espezie nagusienen barruan lehoinabarra dago. Lehoinabarra lehoi, tigre eta jaguarrekin lotutako felino dotore eta indartsua da. Saharaz hegoaldeko Afrikan, Ipar Afrikan, Erdialdeko Asian, Indian eta Txinan bizi da. Hala ere, leku batzuetan mehatxatuta daude, batez ere Afrikatik kanpoko eskualdeetan. Lehoinabarra hain da erosoa zuhaitzetan, non askotan bere harrapakinak adarretara eramaten ditu. Horrela, harrapatzaileen eskuetatik kanpo mantentzen ditu, hienak adibidez. Zuhaitzen adarretatik ere ehizatzen du, non bere koloreari esker hostoen artean ezin hobeto kamuflatzen den bere biktimaren gainetik salto egin arte. Gaueko harrapari hauek antilopeei, oreinei eta txerriak ere erasotzen dizkiete belar altuan zehar makurtuta. Giza asentamenduak daudenean, txakurrak eta tarteka pertsonak ere ehizatzen dituzte. Lehoinabarrak igerilari onak dira eta ingurune honetan ere oso eroso daude, batzuetan arrainak edo karramarroak ehizatzen dituzten.
          Emeek urteko edozein unetan izan ditzakete kumeak. Normalean, kolore grisaxka izan ohi dira, apenas ikusten diren orbanekin. Amak kumeak ezkutatu eta leku seguru batetik bestera garraiatzen ditu jolasteko eta ehizatzen ikasteko adina izan arte. Kumeak amarekin bizi dira urtebete inguru, bizitza osoan bakardadean jokatzen dute.
          Lehoinabar gehienak horiak dira orban ilunekin. Pantera beltzak deitzen dira sarritan, orbanak apenas ikusten direlako, kolore uniformeko larrua duten lehoinabar beltzak.
          Beste espezie nagusietako bat hiena orbanak dira. Eskuarki beste harrapariek utzitako hondakinez elikatzen diren harrapatzaile ospetsuak dira. Baina piztia potolo hauek ehiztari trebeak ere badira, gnuak eta antilopeak eramateko gai direnak. Hegaztiak, muskerrak, sugeak eta intsektuak ere ehizatzen eta jaten dituzte.
          Gero eta jendez gainezka dagoen Afrika batean, maiz kontaktuan jartzen dira hienak eta gizakiak. Izan ere, Keniako eta Tanzaniako masaiek hildakoak uzten dituzte hienak jateko. Hala ere, animalia burutsu eta beldurgabe hauek dendak eta laboreak arpilatzen dituzte, eta abereen eta baita gizakien bizitzaren galera ugari leporatzen zaizkie. Eskualde batzuetan ehiza biziaren objektu izan dira, izurritetzat hartzen baitira.
          Hiena orbanatua hiru motatako hiena espezieetatik handiena da. Beste biak hiena marroia eta hiena marraduna dira. Txakurren antza badute ere, katuekin erlazio estuagoa dute. Afrikako zati handi batean daude, eta ekialderago, Arabiatik Indiara. Hienak orbanak elkarrekin bizi dira klan izeneko talde handietan, zeinak 80 pertsona izan daitezkeenak, matriarkalki antolatuta.
          Hienek entzumen-zentzua oso garatua dute, eta gaueko ikusmen bikaina dute. Azkarrak dira eta distantzia luzeak egin ditzakete nekatu gabe. Taldeak elkarlanean aritzen dira animalia artalde batetik, batzuetan gaixo edo ahul batetik, isolatzeko eta hil arte atzetik. Garaileek maiz borrokatzen dute harrapakinaren alde, elkarren aurka edo beste animalia boteretsu batzuen aurka, lehoiak adibidez.
          Hiena orbanak nahiko "hiztunak" dira, eta askotariko soinuak egiten dituzte, "barreak" barne, aspalditik euren izenarekin lotuta egon dena.
        </p>
      </main>

      <Footer />
    </div>
  )
}
