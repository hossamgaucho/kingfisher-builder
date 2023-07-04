//Select the model-viewer elemnt form the HTML
const boat = document.querySelector('model-viewer');

//Set a function to fire after the model is fully loaded first
boat.addEventListener("load", () => {

  //Assign each material to a variable to easy access.
  const waterline = boat.model.materials[6];
  const radar = boat.model.materials[7];

  //Each block is used to create and set tesxture to a material
  document.querySelector('.btn-red').addEventListener('click', () => {
    waterline.pbrMetallicRoughness.setBaseColorFactor([1,0,0,1]);
    });

  document.querySelector('.btn-green').addEventListener('click', () => {
      waterline.pbrMetallicRoughness.setBaseColorFactor([0,1,0,1]);
    });

  document.querySelector('.btn-blue').addEventListener('click', () => {
        waterline.pbrMetallicRoughness.setBaseColorFactor([0,0,1,1]);
    });

  document.querySelector('.btn-hide').addEventListener('click', () => {
          waterline.pbrMetallicRoughness.setBaseColorFactor([0,0,0,0]);
    });

  document.querySelector('.radar-show').addEventListener('click', () => {
      radar.pbrMetallicRoughness.setBaseColorFactor([1,1,1,1]);
});

  document.querySelector('.radar-remove').addEventListener('click', () => {
      radar.pbrMetallicRoughness.setBaseColorFactor([0,0,0,0]);
});

    //Camera View Angle one Control
  document.querySelector('.btn-angle1').addEventListener('click', () => {
    document.querySelector('model-viewer').setAttribute("camera-orbit", "30deg 80deg 6m");
    document.querySelector('model-viewer').setAttribute("camera-target", "0m 1m 0m");
  });


  //Camera View Angle two Control
  document.querySelector('.btn-angle2').addEventListener('click', () => {
    document.querySelector('model-viewer').setAttribute("camera-orbit", "160deg 80deg 6m");
    document.querySelector('model-viewer').setAttribute("camera-target", "0m 1m 0m");
  });

});


