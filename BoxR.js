AFRAME.registerComponent("rot-box", {
    schema: {
      rotX: { type: "number", default: 1},
    },
  // move the box in the 'x' direction.
    tick: function () {
  
      this.data.rotX = this.data.rotX + 2;
  
      var rot = this.el.getAttribute("rotation");
   
      rot.x = this.data.rotX;
  
      this.el.setAttribute("rotation", {x: rot.x, y: rot.y, z: rot.z});
    }
  });