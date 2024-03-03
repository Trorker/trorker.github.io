// ==UserScript==
// @name         Extractor Pdf for FB
// @namespace    https://github.com/trorker
// @version      1.0.8 beta
// @description  Aggiunge lo strumento per estrazzione dei RPC o ST
// @author       Ruslan Dzyuba
// @match        https://it-beat.enelint.global/
// @icon         data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @require      https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js
// @require      https://unpkg.com/@pdf-lib/fontkit@0.0.4
// @require      https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.min.js
// @require      https://unpkg.com/downloadjs@1.4.7
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

//run-at https://www.tampermonkey.net/documentation.php?locale=en#meta:run_at

(function () {
    'use strict'; // @unwrap

    //Add css
    /*window.GM_addStyle = (cssStr) => {
        var D = document;
        var newNode = D.createElement ('style');
        newNode.textContent = cssStr;

        var targ = D.getElementsByTagName ('head')[0] || D.b
        targ.appendChild (newNode);
    }*/

    //div _ngcontent-dhv-c188="" cdkdrag="" cdkdraglockaxis="y" class="cdk-drag bb-frame-container active cdk-drag-disabled ng-star-inserted" style="height: 100%;position: absolute;width: calc(100% - 43px);top: 0px;"
    window.GM_addStyle(`
                        .swal2-container {-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}

                        .swal2-close { box-shadow: none !important }
                        .swal2-popup { font-size: unset; }
                        .swal2-styled.swal2-confirm { background-color: #ff0f64; }
                        .swal2-height-auto { height: 100% !important; }
                        img.swal2-image { border-radius: 50%; }

                        .menu-item.open > .sub-menu {display: block !important;}

                        .swal2-styled { margin: 0.3125em !important;}
                        .swal2-input {margin: 1em 2em 3px; !important;}

                        .container { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; }
                        .page { width: 190px; height: calc(1.414285714285714 * 190px); background-color: grey; margin: 5px; border: 1px solid grey; cursor: pointer; color: #ff0f64; position: relative; display: flex;}
                        .page.horizontal { height: 190px; width: calc(1.414285714285714 * 190px); }
                        .page:hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }
                        .page.select { border: 1px solid #ff0f64; box-shadow: 0 0 5px 0px #ff0f64; }
                        .n-page { position:absolute; bottom:0; left:0; font-size:2rem; background-color:#00000080; font-weight: bold; width:100%}
                        .canvas-page { height: 100%; width: 100%; filter: blur(100px); transition-duration: 0.5s; transition-property: filter;}

                        .drop .text,.or{font-weight:500}.drop-container{padding:1.5rem}.drop{border-radius:10px;border:3px dashed #aaa;display:grid;width:100%;place-content:center;padding:2rem;box-sizing:border-box;display:grid;place-items:center}.file-input{display:none !important}.active{border:3px solid grey;background:#ff0f6440}.drop .text{text-align:center;margin-top:1rem;color:gray}.progress{background:#ff0f64;width:0%;border-radius:10px;transition:.2s;height:20px}.drop label{background:#ff0f64;padding:.7rem 1.8rem;border-radius:5px;color:#fff;cursor:pointer}.line{width:80px;height:1px;background:#949494}.or-con{display:flex;align-items:center;margin:.5rem}.or{margin:0 1rem;color:#443f46}
                       `); //filter: grayscale(100%) brightness(.8);

    // Your code here...

    setInterval(() => {
        var contUl = document.querySelector("app-floating-wrapper > sbtcgc-sub-menu > ul");
        if (contUl != undefined && document.querySelector("#Extract") == null && contUl.firstChild.childNodes[2].textContent == "Cerca menu") {

            var idAttribute = contUl.getAttributeNames()[0];
            var Extract_li = document.createElement("li");
            Extract_li.setAttribute("onmouseenter", "event.target.classList.add('open')"); //event.target.childNodes[5].classList.add('open')
            Extract_li.setAttribute("onmouseleave", "event.target.classList.remove('open')");
            Extract_li.setAttribute(idAttribute, "");
            Extract_li.setAttribute("id", "Extract");
            Extract_li.setAttribute("class", "menu-item ng-star-inserted");
            Extract_li.innerHTML = `
                                    <span ${idAttribute} class="ng-star-inserted">Estrazione <b style="font-size: 0.8em;"><i style="color: #ff0f64">&nbsp;&nbsp;&nbsp;by Ruslan</i>&nbsp;&#169;</b></span>
                                    <div ${idAttribute} class="e-ico arrow-ico ng-star-inserted">keyboard_arrow_down</div>
                                    <ul ${idAttribute} class="sub-menu inner-sub-menu-container" style="display: none;">
                                      <li ${idAttribute} class="menu-item ng-star-inserted"><span id="ExtractRPC" class="ng-star-inserted">Preventivo <i style="color: grey">&nbsp;[obsolete]</i></span></li>
                                      <li ${idAttribute} class="menu-item ng-star-inserted"><span id="ExtractST" class="ng-star-inserted">Specifica Tecnica (RPC)</span></li>
                                      <li ${idAttribute} class="menu-item ng-star-inserted"><span id="ExtractST_211" class="ng-star-inserted">Specifica Tecnica (211)</span></li>
                                      <li ${idAttribute} class="menu-item ng-star-inserted"><span id="EditPages" class="ng-star-inserted">Page Editor <i style="color: #ff0f64">&nbsp;[new]</i></span></li>
                                      <li ${idAttribute} class="menu-item ng-star-inserted"><span id="About" class="ng-star-inserted">About</span></li>
                                    </ul>
                                    `;

            contUl.insertBefore(Extract_li, contUl.childNodes[0]);

            document.getElementById("ExtractRPC").addEventListener("click", window.ExtractRPC);
            document.getElementById("ExtractST").addEventListener("click", window.ExtractST);
            document.getElementById("ExtractST_211").addEventListener("click", window.ExtractST);
            document.getElementById("EditPages").addEventListener("click", window.EditPages);
            document.getElementById("About").addEventListener("click", window.About);
        }
    }, 100);

    // Your code here...
    const { degrees, PDFDocument, rgb, StandardFonts } = window.PDFLib;
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js"; //https://npmcdn.com/pdfjs-dist/build/pdf.worker.min.js

    window.Toast = window.Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', window.Swal.stopTimer)
            toast.addEventListener('mouseleave', window.Swal.resumeTimer)
        }
    });

    window.ErrorAlert = (text) => {
        window.Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: text,
            footer: '<span>Il problema persiste?</span><a href="mailto:ruslan.dzyuba@e-distribuzione.com"> ...manda una mail al sviluppatore</a>'
        });
    }

    //Star About
    window.License = () => {
        window.Swal.fire({
            title: 'License',
            html: `<p style="text-align: justify;">
                          MIT License
                          <br><br>Copyright (c) ${new Date().getFullYear()} ${GM_info.script.author}
                          <br><br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                          <br><br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                          <br><br>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </p>
                `,
            showConfirmButton: false,
            showCloseButton: true,
            //footer: '<span>Vuoi contattare lo sviluppatore</span>...manda una&nbsp;<a href="mailto:ruslan.dzyuba@e-distribuzione.com">mail</a>',
        });
    };

    window.OpenSource = () => {
        const req = (GM_info.script.require).map((require) => { return '<li><a href="' + require + '" target="_blank">' + require.substr(require.lastIndexOf("/") + 1); + '</a></li>' });

        window.Swal.fire({
            title: 'Open-Source resources used',
            html: `<p style="text-align: justify;">
                          In order to develop the <b>${GM_info.script.name}</b> project, external libraries have been employed.
                          <br><br>Below is a comprehensive list of the libraries utilized:
                          <ul style="text-align: left;">${req.join('')}</ul>
                    </p>
                `,
            showConfirmButton: false,
            showCloseButton: true,
            //footer: '<span>Vuoi contattare lo sviluppatore</span>...manda una&nbsp;<a href="mailto:ruslan.dzyuba@e-distribuzione.com">mail</a>',
        });
    };

    window.About = async () => {

        var ScriptInfo = GM_info.script;
        console.log(GM_info);

        window.Swal.fire({
            showConfirmButton: false,
            showCloseButton: true,
            willOpen: async () => {
                window.Swal.showLoading();
                await fetch(`//api.github.com/users/Trorker`)
                    .then((response) => {
                        if (!response.ok) throw new Error(response.statusText)
                        return response.json()
                    })
                    .then((result) => {
                        Swal.update({
                            imageUrl: result.avatar_url,
                            imageWidth: 100,
                            imageHeight: 100,
                            imageAlt: 'GitHub Avatar',
                        });
                    }).catch(error => { /*Swal.showValidationMessage(`Request failed: ${error}`);*/
                        console.error(`Request failed: ${error}`);
                    });
                window.Swal.update({
                    title: 'About us',
                    html: `
                              <h3>
                                  <b>${ScriptInfo.name}</b><br>
                                  <i>by&nbsp;&nbsp;</i><a href="https://github.com/trorker" target="_blank"><b>${ScriptInfo.author}</b></a>
                              </h3>
                              <div style="font-size: 0.8em">
                                  <i>Version:&nbsp;${ScriptInfo.version}</i><br>
                                  <a href="javascript:void(0)" id="OpenSource"><i>Open-Source resources used</i></a><br>
                                  <a href="javascript:void(0)" id="License"><i>License</i></a>
                              </div><br><br>
                              `,
                    footer: '<span>Vuoi contattare lo sviluppatore</span>...manda una&nbsp;<a href="mailto:ruslan.dzyuba@e-distribuzione.com">mail</a>',
                });

                document.getElementById("OpenSource").addEventListener("click", window.OpenSource);
                document.getElementById("License").addEventListener("click", window.License);

                Swal.hideLoading();
            },
        });
    }
    //End About

    window.JsonToCsv = (items, char = ';') => {
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(items[0])
        const csv = [
            header.join(char), // header row first
            ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(char))
        ].join('\r\n');

        return csv;
    }

    window.ExtractST = async (e) => {
        let typeST = e.target.id.substring(e.target.id.indexOf("ST"));
        console.log(typeST);

        let files = [];

        const { value } = await window.Swal.fire({
            title: 'Seleziona Specifica Tecnica',
            html: `
                <div class="drop-container">
                    <div class="drop">
                        <span class="text">Drag and drop your documents here.</span>
                        <div class="or-con">
                            <span class="line"></span>
                            <span class="or">OR</span>
                            <span class="line"></span>
                        </div>
                        <label for="file-upload">Browse Files</label>
                        <input type="file" id="file-upload" class="file-input" multiple accept="application/pdf"/>
                    </div>
                </div>
                <label for="swal2-checkbox" class="swal2-checkbox" style="display: flex;">
                <input type="checkbox" value="1" id="swal2-checkbox">
                  <span class="swal2-label">Firma la Specifica Tecnica</span>
                </label>
                `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Carica',
            cancelButtonText: 'Cancella',
            willOpen: () => {
                const drop = document.querySelector(".drop");
                const input = document.querySelector(".drop input");
                const text = document.querySelector(".text");

                input.addEventListener("change", () => {
                    files = input.files;
                    console.log(files);
                    let filesLoaded = "";
                    if (Object.values(files).length > 0) {
                        drop.classList.add("active");
                        filesLoaded = Object.values(files).length + " file loaded." + "<br>";
                    } else {
                        drop.classList.remove("active");
                    }
                    text.innerHTML = filesLoaded + "Drag and drop your documents here.";
                });

                drop.addEventListener("dragover", (e) => {
                    e.preventDefault();
                    text.innerHTML = "Release your mouse to drop.";
                    drop.classList.add("active");
                });

                drop.addEventListener("dragleave", (e) => {
                    e.preventDefault();
                    text.innerHTML = "Drag and drop your documents here.";
                    drop.classList.remove("active");
                });

                drop.addEventListener("drop", (e) => {
                    e.preventDefault();
                    files = e.dataTransfer.files;
                    text.innerHTML = Object.values(files).length + " file loaded." + "<br>" + "Drag and drop your documents here.";
                });
            },
            preConfirm: () => {
                if (Object.values(files).length <= 0) window.Swal.showValidationMessage("Selezione il file da caricare!");

                Object.values(files).map((file) => {
                    if (file.type != "application/pdf") window.Swal.showValidationMessage("Selezione solo file pdf!");
                });

                const checkbox = document.getElementById('swal2-checkbox').checked;

                return {
                    confirm: true,
                    checkbox
                }
            }
        });

        if (value.confirm && Object.values(files).length > 0) {

            let extra = null;
            if (value.checkbox) {
                const { value: STform } = await Swal.fire({
                    title: 'Compila Specifica Tecnica',
                    html:
                        '<input id="swal-input-name" class="swal2-input" placeholder="Nome Tecnico">' +
                        '<input id="swal-input-tel" class="swal2-input" pattern="[0-9]{10}" placeholder="Telefono">',
                    focusConfirm: false,
                    confirmButtonText: 'Compila',
                    willOpen: async () => {
                        const { Name, Tel } = JSON.parse(localStorage.getItem("STform"));
                        document.getElementById('swal-input-name').value = Name;
                        document.getElementById('swal-input-tel').value = Tel;
                    },
                    preConfirm: () => {
                        let Name = document.getElementById('swal-input-name').value;
                        let Tel = document.getElementById('swal-input-tel').value;
                        if (Name == "" || Tel == "") window.Swal.showValidationMessage("Inserire dati");
                        return { Name, Tel }
                    }
                });

                if (STform) {
                    localStorage.setItem("STform", JSON.stringify(STform));
                    extra = STform;
                    console.log(STform);
                }
            }

            uploadDocuments(files).then(async (PDFs) => {
                const mergePdf = await mergeAllPDFs(PDFs);

                window.extractPdf(mergePdf, typeST, value.checkbox, extra);
            });
        }
    }

    window.ExtractST_Old = async () => {

        const { value: formValues } = await window.Swal.fire({
            title: 'Seleziona Specifica Tecnica',
            html:
                '<input type="file" id="swal-file" class="swal2-file" accept="application/pdf">' +
                '<label for="swal2-checkbox" class="swal2-checkbox" style="display: flex;"><input id="swal-checkbox" type="checkbox" value="1" id="swal2-checkbox"><span class="swal2-label">Firma la Specifica Tecnica</span></label>',
            focusConfirm: false,
            showCancelButton: true,
            cancelButtonText: 'Cancella',
            preConfirm: () => {
                const file = document.getElementById('swal-file').files[0];
                const checkbox = document.getElementById('swal-checkbox').checked;
                if (!file) window.Swal.showValidationMessage("Selezione il file da caricare!");
                return {
                    file,
                    checkbox,
                }
            }
        });

        if (formValues && formValues.file) {
            const { file, checkbox } = formValues;
            const reader = new FileReader()
            reader.onload = (e) => {
                window.extractPdf(e.target.result, "ST", checkbox);
            }
            reader.readAsArrayBuffer(file)
        }

    }

    //funzione generale per caricare più file
    window.uploadDocuments = async (files) => {
        const filePromises = Object.values(files).map((file) => {
            // Return a promise per file
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    try {
                        // Resolve the promise with the response value
                        resolve({
                            result: e.target.result,
                            name: file.name,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            size: file.size,
                            type: file.type,
                        });
                    } catch (err) {
                        reject(err);
                    }
                };
                reader.onerror = (error) => {
                    window.ErrorAlert('Qualcosa è andato storto!');
                    reject(error);
                };
                reader.readAsArrayBuffer(file);
            });
        });

        // Wait for all promises to be resolved
        const fileInfos = await Promise.all(filePromises);

        // Profit
        return fileInfos;
    };

    //Test beta https://stackoverflow.com/questions/21478738/how-can-we-do-pdf-merging-using-javascript
    /*
    window.mergeAllPDFs = async (urls) => {

        const pdfDoc = await PDFLib.PDFDocument.create();
        const numDocs = urls.length;

        for (var i = 0; i < numDocs; i++) {
            const donorPdfBytes = await fetch(urls[i]).then(res => res.arrayBuffer());
            const donorPdfDoc = await PDFLib.PDFDocument.load(donorPdfBytes);
            const docLength = donorPdfDoc.getPageCount();
            for (var k = 0; k < docLength; k++) {
                const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [k]);
                //console.log("Doc " + i+ ", page " + k);
                pdfDoc.addPage(donorPage);
            }
        }

        const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
        //console.log(pdfDataUri);

        // strip off the first part to the first comma "data:image/png;base64,iVBORw0K..."
        var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    }
    */
    /*
    const mergedPdf = await PDFDocument.create();

    const pdfA = await PDFDocument.load(fs.readFileSync('a.pdf'));
    const pdfB = await PDFDocument.load(fs.readFileSync('b.pdf'));

    const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
    copiedPagesA.forEach((page) => mergedPdf.addPage(page));

    const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
    copiedPagesB.forEach((page) => mergedPdf.addPage(page));

    const mergedPdfFile = await mergedPdf.save();
    */

    window.mergeAllPDFs = async (files) => { //si può modificare la funzione inserendo le pagine da estrarr, cosi da non coppiare due volte la stesa funzioen

        const mergedPdf = await PDFDocument.create();

        await Promise.all(Object.values(files).map(async (file) => {
            const pdfLoad = await PDFDocument.load(file.result);
            const copiedPages = await mergedPdf.copyPages(pdfLoad, pdfLoad.getPageIndices());
            copiedPages.forEach(async (page) => await mergedPdf.addPage(page));
        }));

        return await mergedPdf.save();
    }

    /*
    La soluzione potrebbe essere quella di unire prima il file.
    Dopo si visulaizza tutte le pagine e dopo quando si seleziona, si iliminano le pagina che non serveno (https://pdf-lib.js.org/docs/api/classes/pdfdocument#removepage)
    Il problema è che non hai un ordine di pagine quando lo salvi, ma rimane ordine originale.

    La seconda soluzone potrebbe essere quella di caricare i file, separando le sezioni (per nome del file),
    Dopo si estrae pagina per pagina, e si visualizza.
    Dopo combini le pagine in base a come sono state selezionate.

    La terza soluzione potrebbe essere quella di visualizzare tutte le pagine, senza separarle.
    Dopo in base alla pagina selezionata riferita al file, vai a comprorre il file caricandolo tutto ed estraendo le pagine che sono state selezionate ed inrdine di selezione
    */

    window.pageSelected = new Array();
    window.selectPage = (e) => {
        //aggiungere la verifica se id e un numerno

        console.log(e);

        e = e || window.event;
        var target = e.target || e.srcElement;

        target.parentNode.classList.toggle('select');

        const id = parseInt(target.parentNode.id);

        if (pageSelected.includes(id)) {
            const index = pageSelected.indexOf(id);
            if (index > -1) { // only splice array when item is found
                pageSelected.splice(index, 1); // 2nd parameter means remove one item only
                document.getElementById(id).lastChild.textContent = "";
            }
        } else {
            pageSelected.push(id);
        }

        pageSelected.forEach(id => {
            document.getElementById(id).lastChild.textContent = (pageSelected.indexOf(id) + 1) + "/" + pageSelected.length;
        });

    }

    window.renderPage = (arrayBuffer) => {
        return new Promise((resolve, reject) => {
            window.pdfjsLib.getDocument(arrayBuffer).promise.then(function (pdf) {
                //How many pages it has
                const numPages = pdf.numPages;
                let pageLoaded = 0;

                for (let index = 1; index <= numPages; index++) {

                    //We'll create a canvas for each page to draw it on
                    var htmlPage = document.createElement("div");
                    htmlPage.classList.add("page");
                    //htmlPage.setAttribute("onClick", "event.target.parentNode.classList.toggle('select')");
                    //htmlPage.setAttribute("onClick", "window.selectPage(event.target)");
                    //htmlPage.setAttribute("title", file.name + " - pag. " + currPage);
                    htmlPage.setAttribute("id", index);
                    var htmlNPage = document.createElement("span");
                    htmlNPage.classList.add("n-page");
                    //htmlNPage.textContent = index;
                    var canvas = document.createElement("canvas");
                    canvas.classList.add("canvas-page");
                    htmlPage.appendChild(canvas);
                    htmlPage.appendChild(htmlNPage);
                    document.getElementById("container-page").appendChild(htmlPage);
                    document.getElementById(index).addEventListener("click", window.selectPage);

                    pdf.getPage(index).then((page) => {

                        var scale = 0.35;
                        var viewport = page.getViewport({ scale: scale });
                        var canvas = document.getElementById(index).firstChild;
                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        if (viewport.width > viewport.height) document.getElementById(index).classList.add("horizontal");

                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };

                        var renderTask = page.render(renderContext);
                        renderTask.promise.then(() => {
                            document.getElementById(index).firstChild.style = "filter: blur(0px);";
                            console.log('Page rendered', index);

                            pageLoaded++; //un accrocco ma funzione, sommo le pagnine caricate e verifico con quelle che dovrebbero essere
                            if (pageLoaded == numPages) {
                                resolve();
                            }
                        });
                    });
                }
            });
        });
    }

    window.EditPages = async () => { //drag and drop upload file: https://codepen.io/OptimalLearner/pen/QWMGyZj
        let files = [];

        const { value } = await window.Swal.fire({
            title: 'Modifica Pagine PDF',
            html: `
                <div class="drop-container">
                    <div class="drop">
                        <span class="text">Drag and drop your documents here.</span>
                        <div class="or-con">
                            <span class="line"></span>
                            <span class="or">OR</span>
                            <span class="line"></span>
                        </div>
                        <label for="file-upload">Browse Files</label>
                        <input type="file" id="file-upload" class="file-input" multiple accept="application/pdf"/>
                    </div>
                </div>
                `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Carica',
            cancelButtonText: 'Cancella',
            willOpen: () => {
                const drop = document.querySelector(".drop");
                const input = document.querySelector(".drop input");
                const text = document.querySelector(".text");

                input.addEventListener("change", () => {
                    files = input.files;
                    console.log(files);
                    let filesLoaded = "";
                    if (Object.values(files).length > 0) {
                        drop.classList.add("active");
                        filesLoaded = Object.values(files).length + " file loaded." + "<br>";
                    } else {
                        drop.classList.remove("active");
                    }
                    text.innerHTML = filesLoaded + "Drag and drop your documents here.";
                });

                drop.addEventListener("dragover", (e) => {
                    e.preventDefault();
                    text.innerHTML = "Release your mouse to drop.";
                    drop.classList.add("active");
                });

                drop.addEventListener("dragleave", (e) => {
                    e.preventDefault();
                    text.innerHTML = "Drag and drop your documents here.";
                    drop.classList.remove("active");
                });

                drop.addEventListener("drop", (e) => {
                    e.preventDefault();
                    files = e.dataTransfer.files;
                    text.innerHTML = Object.values(files).length + " file loaded." + "<br>" + "Drag and drop your documents here.";
                });
            },
            preConfirm: () => {
                if (Object.values(files).length <= 0) window.Swal.showValidationMessage("Selezione il file da caricare!");

                Object.values(files).map((file) => {
                    if (file.type != "application/pdf") window.Swal.showValidationMessage("Selezione solo file pdf!");
                });

                return true
            }
        });

        if (value && Object.values(files).length > 0) {
            uploadDocuments(files).then(async (PDFs) => {
                const mergePdf = await mergeAllPDFs(PDFs);
                const pdfLoad = await PDFDocument.load(mergePdf);

                window.pageSelected = new Array();

                const { value } = await window.Swal.fire({
                    title: 'Seleziona pagine da estrarre<br><i style="font-size: 1.5rem;">Le pagine verrano organizzate in ordine di selezione.</i>',
                    grow: 'fullscreen',
                    showConfirmButton: true,
                    confirmButtonText: 'Scarica',
                    showCancelButton: true,
                    cancelButtonText: 'Cancella',
                    html: '<div class="container" id="container-page"></div>',
                    willOpen: async () => {
                        Swal.showLoading(Swal.getConfirmButton());
                        await renderPage(mergePdf);
                        Swal.hideLoading();
                    },
                });


                if (value) {

                    if (window.pageSelected.length <= 0) {
                        alert("Nessuna pagina selezionata selezionato");
                        return //si puo fare che scarica il file completo
                    }

                    window.Toast.fire({
                        icon: 'success',
                        title: 'Your work has been saved!'
                    });

                    console.log(mergePdf);

                    const mergedPdf = await PDFDocument.create();
                    //const pdfLoad = await PDFDocument.load(mergePdf);
                    const copiedPages = await mergedPdf.copyPages(pdfLoad, window.pageSelected.map(id => id - 1));
                    copiedPages.forEach(async (page) => await mergedPdf.addPage(page));
                    const mergedPdfFile = await mergedPdf.save();

                    window.download(mergedPdfFile, "mergedPdfFile" + ".pdf", "application/pdf");

                }
            });
        }
    }

    window.ExtractRPC = async () => {
        const { value: formValues } = await window.Swal.fire({
            title: 'Seleziona Preventivo',
            html:
                '<input type="file" id="swal-file" class="swal2-file" accept="application/pdf">' +
                '<label for="swal2-checkbox" class="swal2-checkbox" style="display: flex;"><input id="swal-checkbox" type="checkbox" value="1" id="swal2-checkbox"><span class="swal2-label">Vecchio Modello</span></label>',
            focusConfirm: false,
            showCancelButton: true,
            cancelButtonText: 'Cancella',
            preConfirm: () => {
                const file = document.getElementById('swal-file').files[0];
                const checked_report = document.getElementById('swal-checkbox').checked;
                if (!file) window.Swal.showValidationMessage("Selezione il file da caricare!");
                return {
                    file,
                    checked_report,
                }
            }
        });

        if (formValues && formValues.file) {
            const { file, checked_report } = formValues;
            const reader = new FileReader()
            reader.onload = (e) => {
                window.extractPdf(e.target.result, (!checked_report ? "New_RPC" : "RPC"), false);
            }
            reader.readAsArrayBuffer(file)
        }
    }

    window.extractPdf = async (ArrayBuffer, select, checked, extra) => {
        let results = [];

        await PDFDocument.load(ArrayBuffer).then(async (pdfDoc) => {

            const pages = pdfDoc.getPages();

            for (let i = 0; i < pages.length; i += ((select == 'RPC') ? 2 : 6)) { //console.log(select); //diferenza fra specifica tecnica e RPC

                const extract_pdfDoc = await PDFDocument.create();

                if (select == 'RPC' || select == 'New_RPC') {
                    const [Page_1, Page_2] = await extract_pdfDoc.copyPages(pdfDoc, [i, i + 1]);

                    extract_pdfDoc.addPage(Page_1);
                    extract_pdfDoc.addPage(Page_2);
                } else if (select == 'ST' || select == 'ST_211') {
                    const [Page_1, Page_2, Page_3, Page_4, Page_5, Page_6] = await extract_pdfDoc.copyPages(pdfDoc, [i, i + 1, i + 2, i + 3, i + 4, i + 5]);

                    extract_pdfDoc.addPage(Page_1);
                    extract_pdfDoc.addPage(Page_2);
                    extract_pdfDoc.addPage(Page_3);
                    extract_pdfDoc.addPage(Page_4);
                    extract_pdfDoc.addPage(Page_5);
                    extract_pdfDoc.addPage(Page_6);
                }

                const pdfBytes = await extract_pdfDoc.save();
                const result = await getPageTextByPdf(1, pdfBytes, select);

                if (result.ID == null) {
                    window.ErrorAlert('Nessun Codice Rintracciabilità trovato!');
                    return 0;
                }

                results.push(result);

                let Result_pdfBytes = await extract_pdfDoc.save();
                if (checked && select == "ST") { //!!!! manca ST_211
                    Result_pdfBytes = await window.modifyPdf(extract_pdfDoc, result, extra);
                }

                // Trigger the browser to download the PDF document
                if (result.ID != null || result.ID != undefined) {
                    let nameFile = ((select == 'RPC' || select == 'New_RPC') ? "Preventivo" : "Specifica Tecnica") + ((result.newFasi == '3F') ? "_MT" : "") + "_" + result.ID + " - " + result.Name;
                    window.download(Result_pdfBytes, nameFile + ".pdf", "application/pdf");
                }

            }

            window.Toast.fire({
                icon: 'success',
                title: 'Your work has been executed'
            });

            console.log(results);

            window.Result(results, ((checked && select == "RPC") ? true : false));
        });

    }

    window.Result = (results, report) => {

        let html = new String();
        let clipboard = new String();
        for (const result of results) {
            html += `<div style="text-align: left; display: flex; justify-content: space-between;">
                          <span><em><span style="font-size: 12px;">c.r.&nbsp;</span></em><strong><span style="font-size: 18px;">${result.ID} </span></strong><em><span style="font-size: 12px;">(${result.Name})</span></em><strong>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>
                          <span><strong><span style="color: red;">${result.TipoLavoro}&nbsp;</span>- ${result.oldFasi}</strong><span style="font-size: 12px;">(${result.oldPotenza}kW)</span><strong> &gt;&nbsp;</strong><strong>${result.newFasi}</strong><span style="font-size: 12px; color: ${((parseInt(result.newPotenza) >= 50) ? "red" : "unset")}">(${result.newPotenza}kW)</span></span>
                        </div>`
            clipboard += result.ID + "\n";
        }

        window.Swal.fire({
            title: '<strong>Report</strong>',
            icon: 'info',
            width: "auto",
            html,
            showCancelButton: true,
            cancelButtonText: "Chiudi",
            confirmButtonText: 'Copy to clipboard',
            allowOutsideClick: false,
            //preConfirm: (value) => { return false } //cancell event to clouse modal (click button confirm)
        }).then((result) => {
            if (result.isConfirmed) {
                navigator.clipboard.writeText(clipboard).then(function () {
                    window.Toast.fire({
                        icon: 'success',
                        title: 'Copying to clipboard was successful!'
                    });
                    console.log('Async: Copying to clipboard was successful!');
                }, function (err) {
                    window.Toast.fire({
                        icon: 'error',
                        title: 'Could not copy text'
                    });
                    console.error('Async: Could not copy text: ', err);
                });
            }
        });


        if (report) {
            window.download(window.JsonToCsv(results), "report.csv", "text/csv");
        }
    }

    /**
    * Retrieves the text of a specif page within a PDF Document obtained through pdf.js
    *
    * @param {Integer} pageNum Specifies the number of the page
    * @param {ArrayBuffer} ArrayBuffer The ArrayBuffer PDF document obtained
    **/
    window.getPageTextByPdf = (pageNum, ArrayBuffer, select) => {
        // Return a Promise that is solved once the text of the page is retrieven
        return new Promise((resolve, reject) => {
            window.pdfjsLib.getDocument(ArrayBuffer).promise.then((pdf) => {
                pdf.getPage(pageNum).then((pdfPage) => {
                    // The main trick to obtain the text of the PDF page, use the getTextContent method
                    pdfPage.getTextContent().then((textContent) => {
                        // Solve promise with the text retrieven from the page
                        //resolve(textContent);

                        let searchTable = {
                            "ID": {
                                "RPC": {
                                    X: 482.97599999999994,
                                    Y: 684.328,
                                },
                                "New_RPC": {
                                    X: 537.722005,
                                    Y: 703.0051499999997,
                                },
                                "ST": {
                                    X: 493.37,
                                    Y: 675.23,
                                },
                                "ST_211": {
                                    X: 476.55,
                                    Y: 696.81,
                                },
                            },
                            "Name": {
                                "RPC": {
                                    X: 391.176,
                                    Y: 609.664,
                                },
                                "New_RPC": {
                                    X: 87.73100499999991,
                                    Y: 687.3531499999997,
                                },
                                "ST": {
                                    X: 106.9,
                                    Y: 594.31,
                                },
                                "ST_211": {
                                    X: 112.11,
                                    Y: 652.17,
                                },
                            },
                            "TipoLavoro": {
                                "RPC": {
                                    X: 302.976,
                                    Y: 684.472,
                                },
                                "New_RPC": {
                                    X: 244.6649949999999,
                                    Y: 703.0051499999997,
                                },
                                "ST": {
                                    X: 293.49,
                                    Y: 681.7600000000001,
                                },
                                "ST_211": {
                                    X: 40.43, //temporale tropo eseteso
                                    Y: 716.4200000000001,
                                },
                            },
                            "oldFasi": {
                                "RPC": {
                                    X: 297.57599999999996,
                                    Y: 561.712,
                                },
                                "New_RPC": {
                                    X: 370.47400899999985,
                                    Y: 592.6611499999998,
                                },
                                "ST": {
                                    X: 290.6,
                                    Y: 560.35,
                                },
                                "ST_211": {
                                    X: 540.14,
                                    Y: 538.25,
                                }
                            },
                            "oldPotenza": {
                                "RPC": {
                                    X: 470.52,
                                    Y: 548.9680000000001,
                                },
                                "New_RPC": {
                                    X: 385.80600899999985,
                                    Y: 583.7171499999998,
                                },
                                "ST": {
                                    X: 456.22,
                                    Y: 548.12,
                                },
                                "ST_211": {
                                    X: 369.17,
                                    Y: 538.25,
                                }
                            },
                            "newFasi": {
                                "RPC": {
                                    X: 297.57599999999996,
                                    Y: 513.2560000000001,
                                },
                                "New_RPC": {
                                    X: 370.4740089999999,
                                    Y: 553.1791499999998,
                                },
                                "ST": {
                                    X: 292.13,
                                    Y: 511.3,
                                },
                                "ST_211": {
                                    X: 540.3,
                                    Y: 595.4200000000001,
                                }
                            },
                            "newPotenza": {
                                "RPC": {
                                    X: 470.52,
                                    Y: 499.93600000000004,
                                },
                                "New_RPC": {
                                    X: 385.8060089999999,
                                    Y: 543.9791499999998,
                                },
                                "ST": {
                                    X: 456.22,
                                    Y: 499.48,
                                },
                                "ST_211": {
                                    X: 370.75,
                                    Y: 595.4200000000001,
                                }
                            },
                            "Capex": {
                                "RPC": {
                                    X: null,
                                    Y: null,
                                },
                                "New_RPC": {
                                    X: null,
                                    Y: null,
                                },
                                "ST": {
                                    X: null,
                                    Y: null,
                                },
                                "ST_211": {
                                    X: null,
                                    Y: null,
                                }
                            },
                        };

                        var result = {
                            ID: null,
                            Name: null,
                        }

                        try {

                            console.log(textContent.items);

                            Object.keys(searchTable).forEach(element => {
                                let resultValue = (textContent.items).find(obj => {
                                    return (obj.transform[4] === searchTable[element][select].X && obj.transform[5] === searchTable[element][select].Y)
                                });

                                result[element] = ((resultValue) ? resultValue.str : null);
                            });

                            // Trigger the browser to download the PDF document
                            //if (result.ID != null || result.ID != undefined) {
                            //    let nameFile = ((select == 'RPC') ? "Preventivo" : "Specifica Tecnica") + ((result.newFasi == '3F') ? "_MT" : "") + "_" + result.ID + " - " + result.Name;
                            //    window.download(pdf_blob, nameFile + ".pdf", "application/pdf");
                            //}

                            resolve(result);

                        }
                        catch (err) {
                            console.log(err)
                            window.ErrorAlert('Qualcosa è andato storto!');
                            reject(err);
                        }
                    });
                });
            });
        });
    }

    window.modifyPdf = async (pdfDoc, result, extra) => {
        // Fetch custom font
        const url = 'https://trorker.github.io/MyTools/resource/font/IndieFlower-Regular.ttf' // or NanumPenScript-Regular.ttf
        const fontBytes = await fetch(url).then(res => res.arrayBuffer());

        // Register the `fontkit` instance
        pdfDoc.registerFontkit(fontkit)

        // Embed our custom font in the document
        const customFont = await pdfDoc.embedFont(fontBytes)

        // Optins text
        const size = 14;
        const font = customFont;
        const color = rgb(0.1, 0.1, 0.95);
        const rotate = degrees(0);

        // Get the first page of the document
        let pages = pdfDoc.getPages()
        const firstPage = pages[2]

        // Get the width and height of the first page
        //const { width, height } = firstPage.getSize()

        var modelloST = true; //document.querySelector("#NewModelloST_checkbox").checked;
        var pxSpaceModelloST = 0;

        if (modelloST) {
            pxSpaceModelloST = 47;
        }

        // Draw a string of text diagonally across the first page
        firstPage.drawText(extra.Tel, {
            x: 58,
            y: (262 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        // Draw a string of text diagonally across the first page
        firstPage.drawText('08:30', {
            x: 367,
            y: (262 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        // Draw a string of text diagonally across the first page
        firstPage.drawText('16:00', {
            x: 464,
            y: (262 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        // Draw a string of text diagonally across the first page
        firstPage.drawText(extra.Name, {
            x: 280,
            y: (222 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        const secondPage = pages[4]
        // Draw a string of text diagonally across the first page
        secondPage.drawText(extra.Tel, {
            x: 58,
            y: (261 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        // Draw a string of text diagonally across the first page
        secondPage.drawText('08:30', {
            x: 367,
            y: (261 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        // Draw a string of text diagonally across the first page
        secondPage.drawText('16:00', {
            x: 464,
            y: (261 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })

        // Draw a string of text diagonally across the first page
        secondPage.drawText(extra.Name, {
            x: 280,
            y: (221 - pxSpaceModelloST),
            size,
            font,
            color,
            rotate,
        })


        if (false) {
            document.querySelector("#ModelloARev9_checkbox").checked
            //Add Modello aggiuntivo
            const PdfBytes = await fetch('https://trorker.github.io/MyTools/resource/ModelloARev9.pdf').then(res => res.arrayBuffer())
            const ModelloARev9 = await PDFDocument.load(PdfBytes);

            //Add page ModelloARev9
            const [existingPage] = await pdfDoc.copyPages(ModelloARev9, [0]);
            pdfDoc.insertPage(2, existingPage);
            pdfDoc.insertPage(3);

            pages = pdfDoc.getPages() //update page
            const ModelloARev9Page = pages[2] //get page

            ModelloARev9Page.drawText(result.ID, { //add ID Pratica Four
                x: 430,
                y: 790,
                size: 24,
                font,
                color,
                rotate,
            })
        }

        // Serialize the PDFDocument to bytes (a Uint8Array)
        return await pdfDoc.save()

    }
})();