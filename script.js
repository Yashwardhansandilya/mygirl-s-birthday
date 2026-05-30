function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}
const birthday = new Date("2026-09-15 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}, 1000);
const birthday = new Date().getTime() + (
    (1 * 60 * 60 * 1000) + // 1 hour
    (17 * 60 * 1000)       // 18 minutes
);
if (distance < 0) {
    document.getElementById("countdown").innerHTML =
        "🎉 Surprise! Happy Birthday My Love ❤️";
}
