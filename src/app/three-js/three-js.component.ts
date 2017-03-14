import { Component, AfterViewInit } from '@angular/core';

import {Dog} from 'tjs';
import {Cat} from 'tjs-amd';
import * as THREE from 'three';
import 'tjs-single';

@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.css']
})
export class ThreeJSComponent implements AfterViewInit {

  scene:THREE.Scene;
  camera:THREE.PerspectiveCamera;
  renderer:THREE.WebGLRenderer;
  controls:THREE.OrbitControls;
  canvas:HTMLElement;
  width:number;
  height:number = 300;
  light:THREE.PointLight;
  mesh:THREE.Mesh;


  constructor() { }

  ngAfterViewInit() {
  	this.canvas = document.getElementById("canvasContainer");
    this.width = this.canvas.offsetWidth;
    this.height = this.canvas.offsetHeight;

  	this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.width/this.height, .1, 1000);
    this.camera.position.set(0,6,0);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x333F47, 0);
    this.canvas.appendChild(this.renderer.domElement);
    //render first frame
    this.renderer.render(this.scene, this.camera);


    //lights
    this.light = new THREE.PointLight(0xffffff);
    this.light.position.set(-100,200,100);
    this.scene.add(this.light);

    //mesh
    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(5,5,5), new THREE.MeshNormalMaterial());
    this.scene.add(this.mesh);

    //orbit control to camera, trick to geting the plugin to work is to import it in the html
    //this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

    this.render();
    
  }

  render() {

    this.mesh.rotation.y += .01;
    this.renderer.render(this.scene, this.camera);
    //this.controls.update();

    requestAnimationFrame(() => this.render());
  }


  onResize(event) {
    this.renderer.setSize(this.canvas.offsetWidth, this.height);
    this.camera.aspect = this.canvas.offsetWidth / this.height;
    this.camera.updateProjectionMatrix();
  }

}
