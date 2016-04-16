'use strict';

/**
 * @constructor
 */
var Building = function(options) {
    var defaults = {
        gridX: 0,
        gridZ: 0
    };
    objectUtil.initWithDefaults(this, defaults, options);

    // Test geometry
    var geometry = new THREE.BoxGeometry( 1, 2, 1 );
    var material = new THREE.MeshPhongMaterial( { color: 0xff8888, specular: 0xffffff } );
    var mesh = new THREE.Mesh( geometry, material );
    this.initThreeSceneObject({
        mesh: mesh,
        scene: options.scene
    });    
    this.addToScene();
    
    this.time = Math.random() * 2.0;
};

Building.prototype = new ThreeSceneObject();

Building.prototype.update = function(deltaTime) {
    this.time += deltaTime;
    
    this.mesh.position.x = this.gridX * GRID_SPACING;
    this.mesh.position.z = this.gridZ * GRID_SPACING;
    this.mesh.position.y = Math.sin(this.time) * 0.9;
};