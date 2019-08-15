import Head from 'next/head'

function Home () {
  return (
    <main>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Emilio Almansi</title>
        <meta name='title' content='Emilio Almansi' />
        <meta name='description' content='Software Engineer from Argentina. Studied Computer Science at the University of Buenos Aires. Passionate about blockchain technology and cryptocurrencies.' />
        <meta property='og:title' content='Emilio Almansi' />
        <meta property='og:url' content='https://emilio.almansi.me' />
        <meta property='og:image' content='https://emilio.almansi.me/static/img/profile.jpeg' />
        <meta property='og:description' content='Software Engineer from Argentina. Studied Computer Science at the University of Buenos Aires. Passionate about blockchain technology and cryptocurrencies.' />
        <link href='/static/css/nunito.css' rel='stylesheet' />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <section>
        <h1>Emilio Almansi</h1>
        <p>I'm a software engineer based in Buenos Aires, Argentina, where I studied Computer Science at the University of Buenos Aires. I'm passionate about blockchain technology and cryptocurrencies, as well as the development of programming languages and other tools for improving the quality of software.</p>
        <p>If you would like to contact me, please go ahead and send me a message via <a href='mailto:emilio@almansi.me' target='_blank' rel='noopener noreferrer' className='green'>email</a>, <a href='https://api.whatsapp.com/send?phone=5491158086755' target='_blank' rel='noopener noreferrer' className='green'>WhatsApp</a>, or <a href='https://github.com/ealmansi' target='_blank' rel='noopener noreferrer' className='green'>Github</a>. For any questions regarding a particular open-source project, please open on issue on that project.</p>
        <div>
          <ul className='social'>
            <li><a href='mailto:emilio@almansi.me' target='_blank' rel='noopener noreferrer'><img src='/static/img/email.svg' alt='E-mail' title='E-mail' width='36' height='36'></img></a></li>
            <li><a href='https://api.whatsapp.com/send?phone=5491158086755' target='_blank' rel='noopener noreferrer'><img src='/static/img/whatsapp.svg' alt='WhatsApp' title='WhatsApp' width='36' height='36'></img></a></li>
            <li><a href='https://github.com/ealmansi' target='_blank' rel='noopener noreferrer'><img src='/static/img/github.svg' alt='Github' title='Github' width='36' height='36'></img></a></li><li><a href='https://www.youtube.com/c/EmilioAlmansi' target='_blank' rel='noopener noreferrer'><img src='/static/img/youtube.svg' alt='YouTube' title='YouTube' width='36' height='36'></img></a></li>
            <li><a href='https://www.linkedin.com/in/ealmansi' target='_blank' rel='noopener noreferrer'><img src='/static/img/linkedin.svg' alt='LinkedIn' title='LinkedIn' width='36' height='36'></img></a></li>
          </ul>
        </div>
      </section>
      <hr />
      <div>
        <h5>Some Projects I Have Worked On</h5>
        <ul className='items'>
          <li><span><a href='https://www.npmjs.com/package/cashaddrjs' target='_blank' rel='noopener noreferrer' className='green'>CashAddr.js</a> — JavaScript implementation of the CashAddr specification.</span></li>
          <li><span><a href='https://www.npmjs.com/package/bchaddrjs' target='_blank' rel='noopener noreferrer' className='green'>BchAddr.js</a> — Bitcoin Cash general purpose address translation for Node.js and web browsers.</span></li>
          <li><span><a href='https://www.moneybutton.com' target='_blank' rel='noopener noreferrer' className='green'>Money Button</a> — A user-friendly, non-custodial cryptocurrency wallet for online payments.</span></li>
          <li><span><a href='https://www.yours.org' target='_blank' rel='noopener noreferrer' className='green'>Yours.org</a> — A social network where users can earn money by creating or finding good content.</span></li>
        </ul>
      </div>
      <section>
        <h5>Some Places Where I Have Worked Before</h5>
        <ul className='items'>
          <li><span><strong>Yours Inc.</strong> (Sr. Software Engineer, Remote)</span></li>
          <li><span><strong>OpenZeppelin</strong> (Consultant in Buenos Aires, Argentina)</span></li>
          <li><span><strong>Trifacta Inc.</strong> (Software Engineer, Remote)</span></li>
          <li><span><strong>Max Planck Institute for Informatics</strong> (Research Intern in Saarbrücken, Germany)</span></li>
          <li><span><strong>Google</strong> (Software Engineering Intern in Mountain View, CA, USA)</span></li>
        </ul>
      </section>
      <section>
        <h5>Education</h5>
        <ul className='items'>
          <li><span><strong><a href='https://en.wikipedia.org/wiki/Licentiate_(degree)#Argentina' target='_blank' rel='noopener noreferrer' className='black'>Licentiate</a> in Computer Science</strong>. University of Buenos Aires, Argentina.</span></li>
          <li><span><strong>Computer Science Analyst</strong>. University of Buenos Aires, Argentina.</span></li>
        </ul>
      </section>
      <hr />
      <footer>
        <ul>
          <li><span>emilio@almansi.me</span></li>
          <li><span>+54 9 (11) 5808-6755</span></li>
          <li><a href='icod.html' target='_blank' rel='noopener noreferrer'>ICOD</a></li>
        </ul>
      </footer>
      <style global jsx>{`
        body {
          font-family: 'Nunito', Sans-Serif;
          font-size: large;
          padding: 10px;
        }
        main {
          max-width: 800px;
          margin: 0 auto;
        }
        hr {
          margin: 10px 0;
        }
        h1, h5 {
          text-transform: uppercase;
        }
        ul.social {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 242px;
          height: 48px;
        }
        ul.social li {
          display: inline-block;
        }
        ul.social li img {
          display: block;
          text-align: center;
          padding: 6px;
        }
        ul.social:hover li img {
          opacity: 0.5;
        }
        ul.social li img:hover {
          opacity: 1;
        }
        hr {
          border-top: 1px dashed #8c8b8b;
	        border-bottom: 1px dashed #fff;
        }
        ul.items {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        footer {
          font-size: medium;
        }
        footer ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        footer ul li {
          display: inline-block;
          margin-right: 10px;
          color: gray;
          min-width: 100px;
        }
        footer ul li a {
          color: gray;
          text-decoration: none;
        }
        a.black {
          color: black;
        }
        a.green {
          color: green;
        }
      `}</style>
    </main>
  )
}

export default Home
