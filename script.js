const frameCount = 24;
const chaiImg = document.querySelector("#chai img");
const lassiImg = document.querySelector("#lassi img");

function updateFrame() {
    
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    let frame = Math.floor(progress * frameCount);
    frame = Math.min(Math.max(frame, 1), frameCount - 1);

    const frameStr = String(frame).padStart(2, "0");
    chaiImg.src = `images/chai_frames/chai_${frameStr}.png`;

    // lassiは逆回転にする場合
    const reverseFrame = frameCount - frame;
    const reverseFrameStr = String(reverseFrame).padStart(2, "0");
    lassiImg.src = `images/lassi_frames/lassi_${reverseFrameStr}.png`;
}

window.addEventListener("scroll", updateFrame);
window.addEventListener("resize", updateFrame);
window.addEventListener("load", updateFrame);