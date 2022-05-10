const Result = ({ recommendCoaching, reset }) => {
  window.scrollTo(0, 0);
  //Koulutuskalenteri Onni
  const ONNI_HREF = "https://onni.hel.fi/DNN-login?returnurl=%2fOmaPalvelu";
  //Helmen liikuntakoutsaus sivujen linkki
  const KOUTSAUS_HREF =
    "https://helsinginkaupunki.sharepoint.com/sites/Intra-Henkilostoedut/SitePages/Liikuntakoutsaus.aspx";
  //henkilöstöliikunnan sivujen linkki
  const LIIKUNTATARJONTA_HREF =
    "http://helmi.hel.fi/henkilosto/Henkilostoedut/henkilostoliikunta/liikuntatarjonta/Sivut/default.aspx";

  const CARD = {
    c1: (
      <>
        <h4>Liikuntakoutsauksen kriteerit</h4>
        <ul>
          <li>Asteikolla 0–10 arvioin työkykyni olevan välillä 6–10</li>
          <li>Olen motivoitunut lisäämään liikuntaa omassa arjessani</li>
          <li>Liikun harvemmin kuin kerran viikossa</li>
        </ul>
      </>
    ),
    c2: (
      <>
        <p>
          Liikuntakoutsaus on 6–8 kuukautta kestävä prosessi, joka sisältää 4
          tapaamiskertaa ja tähtää liikunnan lisäämiseen pienin askelin.
        </p>
        <p>
          Tapaamiskertojen tavoitteena on löytää keskustelun kautta
          konkreettisia tapoja liikkumisen lisäämiseksi.
        </p>
      </>
    ),
    c3: (
      <>
        <h4>Lisätiedot liikuntakoutseilta</h4>
        <ul className="contact">
          <li>
            ma–pe <em>klo </em>08–15
          </li>
          <li>
            <em>puh.</em> 040 1882130 / 09 310 22674{" "}
          </li>
          <li>
            <em>puh.</em> 040 1946077 / 09 310 21670
          </li>
        </ul>
      </>
    ),
  };
  return (
    <div className="container">
      <h1>Testin tulos</h1>
      <div className="sub-container">
        {recommendCoaching ? (
          <h3>Suosittelemme osallistumaan liikuntakoutsaukseen!</h3>
        ) : (
          <h3>
            Mahtavaa! Sinulla on jo aktiivisuutta arjessasi, jatka samaan
            malliin!
          </h3>
        )}
        {recommendCoaching && <div className="card">{CARD.c1}</div>}
        {recommendCoaching && <div className="card">{CARD.c2}</div>}

        {recommendCoaching && (
          <div className="sub-container">
            <p>
              Varaa aika{" "}
              <a href={ONNI_HREF} target="_blank" rel="noreferrer">
                Onnin Koulutuskalenterin
              </a>{" "}
              kautta.
            </p>
            <p>
              Lisätietoja osoitteessa{" "}
              <a href={KOUTSAUS_HREF} target="_blank" rel="noreferrer">
                Liikuntakoutsaus (hel.fi)
              </a>
            </p>
            <p>Tervetuloa 😊</p>
          </div>
        )}
        {!recommendCoaching && (
          <div className="sub-container">
            <p>
              Jos tilanteesi muuttuu merkittävästi, käy kurkkaamassa osoitteessa{" "}
              <a href={KOUTSAUS_HREF} target="_blank" rel="noreferrer">
                Liikuntakoutsaus (intra)
              </a>
            </p>
            <p>
              Tutustu myös{" "}
              <a href={LIIKUNTATARJONTA_HREF} target="_blank" rel="noreferrer">
                {" "}
                Liikuntatarjontaan (hel.fi)
              </a>
            </p>
          </div>
        )}
        {!recommendCoaching && <div className="card">{CARD.c3}</div>}
      </div>
      <div className="buttons-container">
        {recommendCoaching && (
          <a
            className="primary"
            href={ONNI_HREF}
            target="_blank"
            rel="noreferrer"
          >
            Varaa aika
          </a>
        )}
        <a
          className="primary"
          href={KOUTSAUS_HREF}
          target="_blank"
          rel="noreferrer"
        >
          Liikuntakoutsaus
        </a>
        <button className={"secondary"} type="button" onClick={() => reset()}>
          Palaa alkuun
        </button>
      </div>
    </div>
  );
};

export default Result;
