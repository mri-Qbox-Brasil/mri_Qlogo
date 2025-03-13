function init() {
    window.parent.postMessage({
        action: "toggleLogo",
        config: {
            url: "https://assets.mriqbox.com.br/branding/logo96.png",
            size: 256,
            position: "top-center",
            opacity: .5
        }
    }, "*");
}

window.addEventListener("message", function (event) {
    if (event.data.action === "toggleLogo") {
        document.getElementById("logo-container").style.display = event.data.show ? "block" : "none";
        let config = event.data.config;
        const logo = document.getElementById("server-logo");
        logo.src = config.url;
        logo.style.width = `${config.size}px`;
        logo.style.opacity = config.opacity;

        const container = document.getElementById("logo-container");
        switch (config.position) {
            case "top-left": container.style.top = "10px"; container.style.left = "10px"; break;
            case "top-center": container.style.top = "10px"; container.style.left = "50%"; container.style.transform = "translateX(-50%)"; break;
            case "top-right": container.style.top = "10px"; container.style.right = "10px"; break;
            case "middle-left": container.style.top = "50%"; container.style.left = "10px"; container.style.transform = "translateY(-50%)"; break;
            case "middle-center": container.style.top = "50%"; container.style.left = "50%"; container.style.transform = "translate(-50%, -50%)"; break;
            case "middle-right": container.style.top = "50%"; container.style.right = "10px"; container.style.transform = "translateY(-50%)"; break;
            case "bottom-left": container.style.bottom = "10px"; container.style.left = "10px"; break;
            case "bottom-center": container.style.bottom = "10px"; container.style.left = "50%"; container.style.transform = "translateX(-50%)"; break;
            case "bottom-right": container.style.bottom = "10px"; container.style.right = "10px"; break;
            default: container.style.top = "10px"; container.style.left = "50%"; container.style.transform = "translateX(-50%)"; break;
        }
    }
});

init();
