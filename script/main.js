const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.3, {
      // Reduced duration
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.2, {
      // Reduced duration
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.3, // Reduced duration
      {
        opacity: 0,
        y: 10,
      },
      "+=1.5" // Adjusted time
    )
    .to(
      ".two",
      0.3, // Reduced duration
      {
        opacity: 0,
        y: 10,
      },
      "-=0.5" // Adjusted time
    )
    .from(".four", 0.3, {
      // Reduced duration
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.2, {
      // Reduced duration
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.3, // Reduced duration
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.3, // Reduced duration
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.3" // Adjusted time
    )
    .staggerFromTo(
      ".baloons img",
      1.5, // Reduced duration
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.3, // Reduced duration
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=1" // Adjusted time
    )
    .from(".hat", 0.3, {
      // Reduced duration
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.5, // Reduced duration
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      1, // Reduced duration
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.3, // Reduced duration
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      0.5, // Reduced duration
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 0.5, // Reduced duration
      },
      0.2 // Reduced duration
    )
    .to(".six", 5, {
      // Set the duration to 5 seconds
      opacity: 1, // Ensure the element remains visible
    })
    .to(".six", 1, {
      // Reduced duration
      opacity: 0,
      y: 30,
      zIndex: "-1",
    });

  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
