// Registering component in box-component.js
AFRAME.registerComponent("move-box", {
    schema: {
      moveX: { type: "number", default: 1 },
      rotX: { type: "number", default: 1},
    },
  // move the box in the 'x' direction.
    tick: function () {
  
      this.data.moveX = this.data.moveX + 0.01;
      this.data.rotX = this.data.rotX + 2;
  
      var pos = this.el.getAttribute("position");
      var rot = this.el.getAttribute("rotation");
   
      pos.x = this.data.moveX;
      rot.x = this.data.rotX;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
      this.el.setAttribute("rotation", {x: rot.x, y: rot.y, z: rot.z});
    }
  });