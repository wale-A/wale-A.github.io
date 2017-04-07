/**
 * Created by kola on 2/11/2017.
 */

var  file_elem, file_btn;

file_elem = document.querySelector('#file-elem');
file_btn = document.querySelector('#file-btn');

file_btn.addEventListener("click", function (e) {
    if (file_elem) {
        file_elem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);