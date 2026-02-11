
const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.parentElement;
        const video = section.querySelector(".video");

        // Ocultar otros videos
        document.querySelectorAll(".video").forEach(v => {
            if (v !== video) {
                v.pause();
                v.style.display = "none";
            }
        });

        if (video.style.display === "block") {
            video.pause();
            video.style.display = "none";
        } else {
            video.style.display = "block";
            video.play();
        }
    });
});
