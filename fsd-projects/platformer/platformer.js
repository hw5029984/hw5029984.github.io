$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platform
    createPlatform(0, 700, 1500, 200, "lime")
    createPlatform(600, 640, 100, 200, "brown")
    createPlatform(800, 580, 100, 200, "brown")
    createPlatform(1000, 480, 100, 300, "brown")
    createPlatform(1200, 380, 100, 500, "brown")

    // TODO 3 - Create Collectables
    createCollectable("database", 630, 630, 0, 1);
    createCollectable("database", 830, 550, 0, 1);
    createCollectable("database", 1030, 450, 0, 1);
    createCollectable("database", 100, 630, 0, 1);
    createCollectable("database", 1227, 360, 0, 1);

    // TODO 4 - Create Cannons
    createCannon("top", 620, 1000);
    createCannon("top", 799, 1000);
    createCannon("top", 1030, 1000);
    createCannon("top", 1200, 1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
