import React from 'react'
import BtnAdmin from '../BtnAdmin'
// import {Link} from "react-router-dom"

export default function Header() {

  return (
    <header role='banner' className='mainHeader'>
      <div className='logo'>
      <h1>
          <a href="https://www.spie.com/fr">
        <svg focusable="false" aria-label="SPIE" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 691.85 335.97"><path fill="none" d="M0 0h691.85v335.97H0z"></path><g><path fill="#0f1e5a" d="M391.3 354.28c15.73 0 30.2-10.12 30.2-26.06 0-16.14-12.2-27.11-30.19-27.11H381c-24.18 0-44 18.5-44 45.26v57.29h-41.17v-57.14c0-31.93 32.6-57.14 71.9-57.14h28.81c29.62 0 65.44 9.61 65.44 38.84 0 29.79-32.81 38.85-65.45 38.85h-54.62v-12.79z" transform="translate(-67.96 -124.83)"></path><path fill="#0f1e5a" d="M424.39 164.55h41.22v114.28h-41.22z"></path><path fill="#0f1e5a" d="M680.45 352.32h-71.24c2.86 21.66 19.9 37.89 40 37.89h53.48v13h-65.11c-39.3 0-72-25.22-72-57.14s32.63-57.14 71.93-57.14h65.11v12.68h-53.44c-20.16 0-37.25 16.36-40 38.17h71.28zM166 315c0 4.59 5.49 8.72 15.26 11.38s22.24 5.79 34.94 8.87c25.08 6.08 51.51 14.18 51.51 33 0 21.08-38 35.41-89.52 35.41-18.9 0-36.87-1.85-55.11-7.06l5.81-10.27c16.6 6.1 40.23 7.26 57.67 7.26 21.14 0 38.29-6.73 38.29-16.54 0-5.64-5.59-10.39-14.94-12.87-9.57-2.54-21.79-5.67-34.25-8.46-24.66-5.52-50.56-12.78-50.56-32.54 0-19 27.46-33.83 78.14-33.83 16 0 39.26 2.09 54.15 8l-6.58 8.21c-15.42-4.39-32.94-6-48.91-6C175.21 299.54 166 307 166 315z" transform="translate(-67.96 -124.83)"></path><circle fill="#fff" cx="512.94" cy="210.09" r="56.69" transform="matrix(.16 -.99 .99 .16 154.89 557.59)"></circle><path d="M456.25 210.09a56.7 56.7 0 01111-16.21 101.6 101.6 0 00-15.46-18c-1.11.45-2.25.94-3.43 1.45a101.47 101.47 0 0120 20.75 56 56 0 011.22 9.4 100 100 0 00-28.3-26.79q-2.37 1.19-4.81 2.53a99.47 99.47 0 0133.17 27.17 58 58 0 01-.49 7.26 94.1 94.1 0 00-41.26-29.33c-2 1.31-4.09 2.71-6.14 4.19a93.33 93.33 0 0146.94 28 57.35 57.35 0 01-1.55 6.3 89.74 89.74 0 00-55.07-26.63q-3.51 3.06-6.92 6.53h.9a89.19 89.19 0 0160.05 23.15 53.89 53.89 0 01-2.6 5.92 85.82 85.82 0 00-54.2-19.18 87 87 0 00-13.7 1.08c-2.21 2.87-4.34 5.9-6.35 9.11a85.95 85.95 0 0172.44 12.28 58.4 58.4 0 01-4 5.84 82.62 82.62 0 00-76-4.09c-1.59 3.51-3.05 7.17-4.35 11a82.19 82.19 0 0177.25-3.27 56.68 56.68 0 01-98.33-38.47z" transform="translate(-67.96 -124.83)" fill="#c00"></path></g></svg>
      </a>
          </h1>
      </div>
      <div className="nav">
        <div className="row row-1">
          <div className="sharePrice js-share-price"></div>
          <ul className="shortcuts">
            <li className="switchLang">
              <button aria-label="FR (changer la langue du site - actuellement en français)">
                <span>FR</span>
                <svg focusable="false" aria-hidden="true" width="12" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10l-.354.354a.5.5 0 00.708 0L6 10zM.646 5.354l5 5 .708-.708-5-5-.708.708zm5.708 5l5-5-.708-.708-5 5 .708.708zM6.5 10V0h-1v10h1z" fill="#024"></path></svg>
              </button>
              <div className="langList" aria-hidden="true" tabIndex="-1">
                <ul>
                  <li style={{opacity:1}}>
                    <a href="https://www.spie.com/en" lang="en" aria-label="EN (english version)">EN</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <BtnAdmin/>
        </div>
        <nav className="megaMenu" aria-label="Menu principal" role="navigation">
          {/* <button className="burgerMenu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="sr-only">Menu principal</span>
          </button> */}
          <div className="row row-2">
            <div className="mainLinks">
              <ul>
                <li className="openFirstLevel">
                  <a role="button" className="openFirstLevelButton" aria-expanded="false" href="https://planning.spie-st.fr/index.php?language=fr">Planning</a>
                    {/* <div className="subMenu firstLevel" style={{translateX:'100%', display:'none' }}>
                      <div className="inner">
                        <div className="column column-1">
                          <div className="top">
                            <a href="https://www.spie.com/fr/a-propos-de-spie" target="_self">
                              <span>A propos</span>
                                <svg focusable="false" aria-hidden="true" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11l.354.354a.5.5 0 000-.708L21 11zM1 11H.5v.5H1V11zm10.354 10.354l10-10-.708-.708-10 10 .708.708zm10-10.708l-10-10-.708.708 10 10 .708-.708zM21 10.5H1v1h20v-1zM1.5 11V1h-1v10h1z" fill="#C00"></path></svg>
                            </a>
                            <p>SPIE est le leader européen indépendant des services multi-techniques dans les domaines de l’énergie et des communications. Nos 48 000 collaborateurs sont engagés pour réussir avec nos clients la transition énergétique et la transformation numérique.</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                </li>
                <li className="openFirstLevel">
                  <a role="button" className="openFirstLevelButton" aria-expanded="false" href="http://frsu0413.ce.int.amecspie.com:8000/psp/GPPRDSIT/?&cmd=login&errorCode=105&languageCd=FRA">Note de Frais</a>
                </li>
                <li className="openFirstLevel">
                  <a role="button" className="openFirstLevelButton" aria-expanded="false" href="/tools">Outillage</a>
                </li>
                <li className="openFirstLevel">
                  <a role="button" className="openFirstLevelButton" aria-expanded="false" href="/admin">Admin</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
};
