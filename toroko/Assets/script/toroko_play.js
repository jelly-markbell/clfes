#pragma strict


function Start () {
		GetComponent.<Rigidbody>().AddForce(2000,0,0);

}

function Update () {

		if ( GetComponent.<Transform>().position.x > 200 ){
		GetComponent.<Rigidbody>().position = Vector3(-25,4.5,0);
		
	}	

}