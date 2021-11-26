setInterval(() => {
    let iframe = ''
    let element = ''

    /* if (document.querySelector(".ahsdgfkjahsdgf")) {
        const ahsdgfkjahsdgf = document.querySelectorAll(".ahsdgfkjahsdgf")

        if(ahsdgfkjahsdgf.length > 1) {
            for (let i = 0; i < ahsdgfkjahsdgf.length; i++) {
                ahsdgfkjahsdgf[i].remove()
            }
        }
    } */

    iframe = document.querySelector("iframe")
    element = iframe.contentWindow.document.querySelector('.prodigi-item-solutions')

    // create the background ahsdgfkjahsdgf div
    const ahsdgfkjahsdgf = document.createElement('div')
    ahsdgfkjahsdgf.classList.add('ahsdgfkjahsdgf')
    ahsdgfkjahsdgf.style.cssText = `
    position: absolute;
    top: ${0}px;
    left: ${0}px;
    background-color: #000;
    color: #fff;
    padding: 20px;
    border-radius: 25px;
    z-index: 99999999;
    text-align: 'center';
    opacity: 0.8;
    `;

    // render the ahsdgfkjahsdgf with child on DOM
    if (element) {
        ahsdgfkjahsdgf.appendChild(element)
        document.body.appendChild(ahsdgfkjahsdgf)
    }
}, 100)