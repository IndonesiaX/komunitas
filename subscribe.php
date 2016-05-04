<?php

	$your_installation_url = 'http://bulk.indonesiax.co.id';
	$list = 'LSFVwvkDCPpv7EWo8G3pwQ';
	$success_url = 'http://komunitas.indonesiax.co.id/success.html';
	$fail_url = 'http://komunitas.indonesiax.co.id/fail.html';

	//POST variables
	$name = $_POST['name'];
	$email = $_POST['email'];
	$boolean = 'true';

	//Check fields
	if($name=='' || $email=='')
	{
		echo 'Please fill in all fields.';
		exit;
	}

	//Subscribe
	$postdata = http_build_query(
	    array(
	    'name' => $name,
	    'email' => $email,
	    'list' => $list,
	    'boolean' => 'true'
	    )
	);
	$opts = array('http' => array('method'  => 'POST', 'header'  => 'Content-type: application/x-www-form-urlencoded', 'content' => $postdata));
	$context  = stream_context_create($opts);
	$result = file_get_contents($your_installation_url.'/subscribe', false, $context);

	//check result and redirect
	if($result)
		header("Location: $success_url");
	else
		header("Location: $fail_url");
?>
