function importar(para, de){
    fetch(de)
        .then(response => response.text())
        .then(html => {
            document.getElementById(para).innerHTML = html;
        });
}
