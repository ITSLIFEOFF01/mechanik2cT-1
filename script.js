const fileTreeData = {
    "Podstawy": ["file1.txt", "file2.txt"],
    "Grafika": {
        "strony": ["file3.txt", "file4.txt", "file5.txt"],
        "inne": ["file6.txt"]
    },
    "Strony Milosz": ["file7.txt", "file8.txt", "file9.txt", "file10.txt"],
    "Tabele": ["file11.txt"],
    "Span i Div": ["file12.txt"],
    "Formularze": ["file13.txt"],
    "Znaki specjalne": ["file14.txt"],
    "CSS - Wpisany": ["file15.txt", "file16.txt", "file17.txt", "file18.txt", "file19.txt", "file20.txt"],
    "CSS - Wewnetrzny": ["file21.txt", "file22.txt"],
    "CSS - Osadzony": ["file23.txt", "file24.txt"],
    "CSS - Wewnetrzny": {
        "Styles": ["file25.txt", "file26.txt"]
    },
    "Wszystkie zdjecia": [
        "file27.txt", "file28.txt", "file29.txt", "file30.txt", "file31.txt",
        "file32.txt", "file33.txt", "file34.txt", "file35.txt", "file36.txt",
        "file37.txt", "file38.txt", "file39.txt", "file40.txt", "file41.txt",
        "file42.txt", "file43.txt", "file44.txt", "file45.txt", "file46.txt"
    ]
};

function createFileTree(parent, data) {
    const ul = document.createElement("ul");
    for (const key in data) {
        const li = document.createElement("li");
        li.textContent = key;
        if (Array.isArray(data[key])) {
            data[key].forEach(file => {
                const fileLi = document.createElement("li");
                fileLi.textContent = file;
                fileLi.classList.add("file");
                li.appendChild(fileLi);
            });
        } else {
            li.classList.add("folder");
            createFileTree(li, data[key]);
        }
        ul.appendChild(li);
    }
    parent.appendChild(ul);
}

const fileTree = document.getElementById("fileTree");
createFileTree(fileTree, fileTreeData);

// Обработчик события для закрытия информационного меню
const infoPanel = document.getElementById("infoPanel");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    infoPanel.style.display = "none";
});
