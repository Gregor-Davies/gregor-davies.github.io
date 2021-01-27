const Config = {
    name: "Gregor",
    scale: 1,
    Links: [
        [
            "My Websites",
            [
                ["imatotal.monster", "https://imatotal.monster/"],
                ["Fastsrv.io", "https://fastsrv.io/"]
            ]
        ],
        [
            "Important",
            [
                ["Gmail", "https://mail.google.com/mail/u/0/#inbox"],
                ["Website Hosting", "https://4it.bz/"]
            ]
        ],
        [
            "Social",
            [
                ["Reddit", "https://www.reddit.com/"],
                ["Youtube", "https://www.youtube.com/"],
                ["Instagram", "https://instagram.com/"]
            ]
        ],
        [
            "Programming",
            [
                ["Github", "https://github.com/"],
                ["Sourcebin", "https://sourceb.in"],
                ["Codepen", "https://codepen.io/"]
            ]
        ]
      }

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
