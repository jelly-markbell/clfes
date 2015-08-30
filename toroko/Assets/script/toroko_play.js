#pragma strict


function Start () {
		GetComponent.<Rigidbody>().AddForce(2000,0,0);

}

function Update () {

		if ( GetComponent.<Transform>().position.x == 100 ){
		GetComponent.<Rigidbody>().position = Vector3.zero;
		
	}	

}