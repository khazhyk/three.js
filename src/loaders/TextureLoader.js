/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.TextureLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.TextureLoader.prototype = {

	constructor: THREE.TextureLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE.ImageLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( image ) {

			var texture = new THREE.Texture( image );
			texture.needsUpdate = true;

			if ( onLoad !== undefined ) {

				onLoad( texture );

			}

		}, onProgress, onError );

	},

	parse: function ( json ) {
		var texture = new THREE[ json.type ]();


		if (json.anisotropy !== undefined) texture.anisotropy = json.anisotropy;
		if (THREE[json.mapping] !== undefined) THREE[texture.mapping = json.mapping];
		if (json.repeat !== undefined) texture.repeat = new THREE.Vector2(json.repeat[0],json.repeat[1]);
		if (THREE[json.minFilter] !== undefined) texture.minFilter = THREE[json.minFilter];
		if (THREE[json.magFilter] !== undefined) texture.magFilter = THREE[json.magFilter];
		if (json.wrap !== undefined) {
			if (THREE[json.wrap[0]] !== undefined) texture.wrapS = THREE[json.wrap[0]];
			if (THREE[json.wrap[1]] !== undefined) texture.wrapT = THREE[json.wrap[1]];
		}

		return texture;
	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	}

};
