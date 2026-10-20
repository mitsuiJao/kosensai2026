const sky = document.getElementById("ryusei");
const sources = ["images/ryusei.png"];

function spawn() {
  const el = document.createElement("img");
  el.className = "drifter";
  el.src = sources[Math.floor(Math.random() * sources.length)];

  const size = 60;
  const W = window.innerWidth;
  const H = window.innerHeight;
  const margin = size * 2;
  const duration = 10000;

  el.style.width = size + "px";

  const side = Math.floor(Math.random() * 4);
  let sx, sy, ex, ey;

  if (side === 0) {
    sx = W + margin; ex = -margin;
    sy = Math.random() * H;
    ey = Math.random() * H;
  } else if (side === 1) {
    sx = -margin; ex = W + margin;
    sy = Math.random() * H;
    ey = Math.random() * H;
  } else if (side === 2) {
    sy = -margin; ey = H + margin;
    sx = Math.random() * W;
    ex = Math.random() * W;
  } else {
    sy = H + margin; ey = -margin;
    sx = Math.random() * W;
    ex = Math.random() * W;
  }

  const heading = 0;
  const spin = (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 720);

  sky.appendChild(el);

  const anim = el.animate(
    [
      { transform: `translate(${sx}px, ${sy}px) rotate(${heading}deg)` },
      { transform: `translate(${ex}px, ${ey}px) rotate(${heading + spin}deg)` }
    ],
    { duration, easing: "linear", fill: "forwards" }
  );

  anim.onfinish = () => {
    el.remove();
    spawn();
  };
}

spawn();