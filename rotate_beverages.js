const frameCount = 24;
const chaiImg = document.querySelector("#chai img");
const lassiImg = document.querySelector("#lassi img");
const mango_lassiImg = document.querySelector("#mango_lassi img");

let currentFrame = 1;
const msPerFrame = 80;

function updateFrame() {
    const frameStr = String(currentFrame).padStart(2, "0");
    chaiImg.src = `images/chai_frames/chai_${frameStr}.png`;

    const reverseFrame = frameCount - currentFrame;
    const reverseFrameStr = String(reverseFrame).padStart(2, "0");
    lassiImg.src = `images/lassi_frames/lassi_${reverseFrameStr}.png`;

    mango_lassiImg.src = `images/mango_lassi_frames/mango_lassi_${frameStr}.png`;

    currentFrame = (currentFrame % (frameCount - 1)) + 1;
}

window.addEventListener("load", () => {
    updateFrame();
    setInterval(updateFrame, msPerFrame);
});
