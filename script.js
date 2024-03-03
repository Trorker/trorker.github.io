let code = `
<!DOCTYPE HTML>
<html lang="it">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Work in Progress</title>

    <link rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚧</text></svg>">

    <meta property="og:type" content="website">
    <meta property="og:title" content="Portfolio Ruslan Dzyuba">
    <meta property="og:description" content="Work in Progress...">
    <meta property="og:url" content="https://www.ruslan-dzyuba.it/">
    <meta property="og:image"
        content="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚧</text></svg>">

    <link rel="stylesheet" href="styles.css">

    <link rel="preload" href="/background-tiny.jpg" as="image" />

    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
</head>

<body class="bg noselect">
    <section class="content">
        <hgroup>
            <h1>The Site is Under Construction</h1>
            <p>Stay tuned for updates and come back soon to see the magic unfold!</p>
        </hgroup>
        <div class="code">
            <span id="codeType" class="type"></span>
        </div>
    </section>
    <footer>
        <span class="credits">
            <div>
                Made by <a href="https://github.com/Trorker" class="secondary">Ruslan Dzyuba</a>
            </div>
            <div>
                Copyright © 2024 - All rights reserved
            </div>
        </span>
        <span class="unsplash">Photo by <a
                href="https://unsplash.com/it/@dianamia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">C
                Dustin</a> from <a
                href="https://unsplash.com/it/foto/un-gruppo-di-edifici-alti-sotto-un-cielo-blu-nuvoloso-91AQt9p4Mo8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </span>
    </footer>

    <script src="script.js"></script>
</body>

</html>
`;

var codeType = document.getElementById('codeType');
// Esempio di utilizzo
var typewriter = new Typewriter(codeType, {
    text: code,
    speed: 50,
    speedBlinkCursor: 500,
    tags: false,
    devMode: true,
});
typewriter.init();

function Typewriter(element, options) {
    this.element = element;
    this.options = options || {}; // Altre opzioni, come ad esempio il testo da scrivere

    // Opzioni predefinite
    const defaults = {
        speed: 100, // Velocità di scrittura in millisecondi per carattere
        speedBlinkCursor: 500, // Velocità di lampeggiare del cursore in millisecondi
        delay: 0, // Ritardo iniziale in millisecondi
        loop: false, // Se true, il testo ricomincia dall'inizio dopo la fine
        tags: true, // Se true, riconosce i tag HTML
        devMode: false, // Impostazione predefinita per la modalità di sviluppo
    };

    // Opzioni merge
    options = Object.assign({}, defaults, options);

    this.init = function () {
        if (!this.element) return; // Verifica che sia stato fornito un elemento valido

        var text = this.options.text || ''; // Ottiene il testo da scrivere, se fornito
        var index = 0;
        var self = this;
        let writeInTag = false;

        var cursor = document.createElement('span'); // Creazione dell'elemento per il cursore
        cursor.className = 'cursor';
        cursor.textContent = '|'; // Testo del cursore

        // Inserisce il cursore nel documento
        this.element.parentNode.insertBefore(cursor, this.element.nextSibling);

        // Cancella il contenuto dell'elemento
        this.element.innerHTML = '';

        // Funzione ricorsiva per scrivere il testo lettera per lettera
        function typeWriter() {
            if (index < text.length) {

                if (options.devMode) {
                    console.log(text.charAt(index) + ": ", text.charCodeAt(index));
                }

                switch (text.charCodeAt(index)) {
                    case 10:
                        self.element.innerHTML += "<br>"
                        break;
                    case 32:
                        self.element.innerHTML += "&nbsp;"
                        break;
                    case 60:
                        if (options.tags) {
                            let endIndex = text.indexOf('>', index);
                            let tag = text.substring(index, endIndex + 1)

                            writeInTag = (tag.charCodeAt(1) != 47);

                            if (options.devMode) {
                                console.log("find tag: ", tag);
                            }

                            if (endIndex !== -1) {
                                self.element.innerHTML += tag;
                                index = endIndex;
                            }

                            console.log(self.element.lastElementChild);
                        } else {
                            self.element.innerHTML += text.charAt(index);
                        }
                        break;

                    default:
                        if (writeInTag) {
                            self.element.lastElementChild.innerHTML += text.charAt(index);
                        } else {
                            self.element.innerHTML += text.charAt(index);
                        }
                        break;
                }
                index++;

                // Aggiorna la posizione del cursore
                cursor.style.left = (self.element.offsetWidth + 5) + 'px';

                setTimeout(typeWriter, options.speed);
            }
            else {
                // Rimuove il cursore quando il testo è completamente scritto
                cursor.parentNode.removeChild(cursor);
            }
        }

        // Funzione per far lampeggiare il cursore
        function blinkCursor() {
            cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
            setTimeout(blinkCursor, 500); // Intervalli di lampeggio (500 ms)
        }

        // Avvia il lampeggio del cursore
        blinkCursor();

        // Avvia la scrittura del testo
        typeWriter();
    }
}


/*
var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "|",
    devMode: true
});

typewriter.typeString(newCod).start();*/


/*.pauseFor(2500)
.deleteAll()
.typeString('Strings can be removed')
.pauseFor(2500)
.deleteChars(7)
.typeString('<strong>altered!</strong>')
.pauseFor(2500)
.start();*/