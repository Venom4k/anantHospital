<?php 
 
	require_once('conn.php');

	// categorie action
	if (isset($_POST['add_result'])) {
		$roll_no = $_POST['roll_no'];
		$name = $_POST['name'];
		$dob = $_POST['dob'];
		$course = $_POST['course'];
        
        $search = mysqli_query($con, "SELECT * FROM `result` WHERE roll_no = '$roll_no' AND is_deleted = '0' ORDER BY id DESC ")or die(mysqli_error($con));
        // print_r($search);
            if(mysqli_num_rows($search) > 0){
               	echo "<script>alert('Roll Number Already Exist');window.location.href='Add-result.php';</script>";
               	exit;
            }

		$filename = $_FILES['myfile']['name'];
		$file = $_FILES['myfile']['tmp_name'];
		$destination = 'pdf/' . $filename;
		$extension = pathinfo($filename, PATHINFO_EXTENSION);
		move_uploaded_file($file, $destination);
		
		$filename2 = $_FILES['Enroll']['name'];
		$files = $_FILES['Enroll']['tmp_name'];
		$destination2 = 'pdf/' . $filename2;
		$extension = pathinfo($filename2, PATHINFO_EXTENSION);
		move_uploaded_file($files, $destination2);
				
		$query = mysqli_query($con, "INSERT INTO `result`(`roll_no`, `name`, `dob`, `result_pdf`, `Enroll`, `course_name`) VALUES ('$roll_no','$name','$dob','$filename','$filename2', '$course')")or die(mysqli_error($con));
		if ($query) {
		    $insert_id = mysqli_insert_id($con);
			echo "<script>alert('Successfully Result uploaded');</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');window.location='Add-result.php'</script>";
		}
		$getQuery = mysqli_query($con, "SELECT * FROM `result` WHERE `id` = '$insert_id'" );
	 		
		 	if (mysqli_num_rows($getQuery)>0) 
	 		{
			 	$getFetch = mysqli_fetch_array($getQuery);
			 	$stu_id = $getFetch['id'];
			 	$result = $getFetch['result_pdf'];
			 	$name = $getFetch['name'];
			 	$c_name = $getFetch['course_name'];
	 
	
		if($course == '10th'){
		$stu_id = $getFetch['id'];
		$hindi10 = $_POST['10_hindi'];
		$english10 = $_POST['10_english'];
		$maths10 = $_POST['10_maths'];
		$science10 = $_POST['10_science'];
		$social10 = $_POST['10_social'];
		$home10 = $_POST['10_home'];
		
		$query = mysqli_query($con, "INSERT INTO `result_10`(`stu_id`, `hindi`, `english`, `maths`, `science`, `so_science`, `ho_science`) VALUES ('$stu_id','$hindi10','$english10','$maths10','$science10','$social10','$home10')")or die(mysqli_error($con));
		if ($query) {
			echo "<script>window.location='Add-result.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');</script>";
		}
		
		}elseif($course == '12th_Arts'){
		$stu_id = $getFetch['id'];
		$hindia12 = $_POST['12a_hindi'];
		$englisha12 = $_POST['12a_english'];
		$hisa12 = $_POST['12a_history'];
		$psciencea12 = $_POST['12a_pscience'];
		$ecoa12 = $_POST['12a_eco'];
		
		$query = mysqli_query($con, "INSERT INTO `12_arts`(`stu_id`, `hindi`, `english`, `history`, `po_science`, `economics`) VALUES ('$stu_id','$hindia12','$englisha12','$hisa12','$psciencea12','$ecoa12')")or die(mysqli_error($con));
		if ($query) {
			echo "<script>window.location='Add-result.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');</script>";
		}
		
		}elseif($course == '12th_Comm'){
		  
		$hindic12 = $_POST['12c_hindi'];
		$englishc12 = $_POST['12c_english'];
		$accc12 = $_POST['12c_acc'];
		$busc12 = $_POST['12c_bus'];
		$ecoc12 = $_POST['12c_eco'];
		
		$query = mysqli_query($con, "INSERT INTO `12_comm`(`stu_id`, `hindi`, `english`, `accountancy`, `bu_study`, `economics`) VALUES ('$stu_id', '$hindic12','$englishc12','$accc12','$busc12','$ecoc12')")or die(mysqli_error($con));
		if ($query) {
			echo "<script>window.location='Add-result.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');</script>";
		}
		
		}elseif($course == '12th_Maths'){
		  
		$hindim12 = $_POST['12m_hindi'];
		$englishm12 = $_POST['12m_english'];
		$mathsm12 = $_POST['12m_maths'];
		$phym12 = $_POST['12m_phy'];
		$chem12 = $_POST['12m_che'];
	
	    $query = mysqli_query($con, "INSERT INTO `12_maths`(`stu_id`, `hindi`, `english`, `maths`, `physics`, `chemistry`) VALUES ('$stu_id', '$hindim12','$englishm12','$mathsm12','$phym12','$chem12')")or die(mysqli_error($con));
		if ($query) {
			echo "<script>window.location='Add-result.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');</script>";
		}
	
		}elseif($course == '12th_Bio'){
	
		$hindib12 = $_POST['12b_hindi'];
		$englishb12 = $_POST['12b_english'];
		$phyb12 = $_POST['12b_phy'];
		$cheb12 = $_POST['12b_chea'];
		$biob12 = $_POST['12b_bio'];

	    $query = mysqli_query($con, "INSERT INTO `12_bio`(`stu_id`, `hindi`, `english`, `physics`, `chemistry`, `biology`) VALUES ('$stu_id', '$hindib12','$englishb12','$phyb12','$cheb12','$biob12')")or die(mysqli_error($con));
		if ($query) {
			echo "<script>window.location='Add-result.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');</script>";
		}
	
		}else{
		    echo"no";exit;
		}
	
}
	
	}	
	
	
	if (isset($_POST['add_enroll'])) {
	    $roll_no = $_POST['roll_no'];
// 		$name = $_POST['name'];
// 		$dob = $_POST['dob'];
		// $email = $_POST['email'];
		$filename2 = $_FILES['Enroll']['name'];
		$files = $_FILES['Enroll']['tmp_name'];
		$destination2 = 'pdf/' . $filename2;
		$extension = pathinfo($filename2, PATHINFO_EXTENSION);
		move_uploaded_file($files, $destination2);
				
		$query2 = mysqli_query($con, "UPDATE result SET Enroll = '$filename2' WHERE roll_no = '$roll_no'")or die(mysqli_error($con));
		if ($query2) {
			echo "<script>alert('Successfully Enrollment uploaded ');window.location='Add-enroll.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');window.location='Add-enroll.php'</script>";
		}
	}
	if (isset($_POST['add_admit_card'])) {
	   // $roll_no = $_POST['roll_no'];
	    $enroll_no = $_POST['Enroll_no'];
	    $s_name = $_POST['s_name'];
// 		$name = $_POST['name'];
// 		$dob = $_POST['dob'];
		// $email = $_POST['email'];
		$filename2 = $_FILES['Enroll']['name'];
		$files = $_FILES['Enroll']['tmp_name'];
		$destination2 = 'pdf/' . $filename2;
		$extension = pathinfo($filename2, PATHINFO_EXTENSION);
		move_uploaded_file($files, $destination2);
				
		$query2 = mysqli_query($con, "INSERT INTO `admit_card`(`enroll_no`,`s_name` ,`admit_card`) VALUES ('$enroll_no','$s_name','$filename2')")or die(mysqli_error($con));
		if ($query2) {
			echo "<script>alert('Successfully Admit Card uploaded ');window.location='upload-admit-card.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');window.location='upload-admit-card.php'</script>";
		}
	}
	
	if (isset($_POST['edit_result'])) {
		$id = $_POST['id'];
		$roll_no = $_POST['roll_no'];
		$name = $_POST['name'];
		$dob = $_POST['dob'];
		$course = $_POST['course'];
		// $email = $_POST['email'];

		
		
			
		$check = mysqli_query($con, "SELECT * FROM result  WHERE id = '$id' ")or die(mysqli_error($con));
		if(mysqli_num_rows($check)>0 ){
		    $row = mysqli_fetch_assoc($check);
		    print_r($row['result_pdf']);
		    
		    if(!empty($row['result_pdf'])){
		    $filename = $row['result_pdf'];
		    unlink(dirname(__FILE__) . "/pdf/" . $filename);
            
            
    		}
    				
    		$filename = $_FILES['myfile']['name'];
    		$file = $_FILES['myfile']['tmp_name'];
    		$destination = dirname(__FILE__) . "/pdf/" . $filename;
    		$extension = pathinfo($filename, PATHINFO_EXTENSION);
    		move_uploaded_file($file, $destination);
    		
    		
    		if(!empty($row['Enroll'])){
    		    $filename = $row['Enroll'];
		         unlink(dirname(__FILE__) . "/pdf/" . $filename); 
    		}
    		
    		    $filename2 = $_FILES['Enroll']['name'];
        		$files = $_FILES['Enroll']['tmp_name'];
        		$destination2 = 'pdf/' . $filename2;
        		$extension = pathinfo($filename2, PATHINFO_EXTENSION);
        		move_uploaded_file($files, $destination2);
		}
		
		$query1 = mysqli_query($con, "UPDATE result SET roll_no = '$roll_no', name = '$name', dob = '$dob', result_pdf = '$filename', Enroll = '$filename2', course_name = '$course' WHERE id = '$id' ")or die(mysqli_error($con));
		if ($query1) {
			echo "<script>alert('Successfully Result update ');window.location='see-students-details.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');window.location='see-students-details.php'</script>";
		}
	
	}
	
	if (isset($_POST['edit_admitcard'])) {
		$id = $_POST['id'];
		$roll_no = $_POST['roll_no'];
		$name = $_POST['name'];
		$check = mysqli_query($con, "SELECT * FROM admit_card  WHERE id = '$id' ")or die(mysqli_error($con));
		if(mysqli_num_rows($check)>0 ){
		    $row = mysqli_fetch_assoc($check);
		    print_r($row['admit_card']);
		    
		    if(!empty($row['admit_card'])){
		    $filename = $row['admit_card'];
		    unlink(dirname(__FILE__) . "/pdf/" . $filename);
            
            
    		}
    				
    		$filename = $_FILES['myfile']['name'];
    		$file = $_FILES['myfile']['tmp_name'];
    		$destination = dirname(__FILE__) . "/pdf/" . $filename;
    		$extension = pathinfo($filename, PATHINFO_EXTENSION);
    		move_uploaded_file($file, $destination);
    		
    		
    // 		if(!empty($row['Enroll'])){
    // 		    $filename = $row['Enroll'];
		  //       unlink(dirname(__FILE__) . "/pdf/" . $filename); 
    // 		}
    		
    		  //  $filename2 = $_FILES['Enroll']'name'];
        // 		$files = $_FILES['Enroll']['tmp_name'];[
        // 		$destination2 = 'pdf/' . $filename2;
        // 		$extension = pathinfo($filename2, PATHINFO_EXTENSION);
        // 		move_uploaded_file($files, $destination2);
		}
		
		$query1 = mysqli_query($con, "UPDATE admit_card SET enroll_no = '$roll_no', s_name = '$name',  admit_card = '$filename' WHERE id = '$id' ")or die(mysqli_error($con));
		if ($query1) {
			echo "<script>alert('Successfully Result update ');window.location='edit-admin-card.php'</script>";
		} else {
			echo "<script>alert('Some Error Please Try Again Later');window.location='see-students-details.php'</script>";
		}
	
	}
	
	
	
	
		if (isset($_GET['detele'])) {
		$id = $_GET['id'];
         $search = mysqli_query($con, "SELECT * FROM `result` WHERE id = $id ")or die(mysqli_error($con));
         if(mysqli_num_rows($search)>0) 
	 		{
			 	$getFetch = mysqli_fetch_array($search);
			 	$c_name = $getFetch['course_name'];
			 
			 	if($c_name == '10th'){
			 	   $delete = mysqli_query($con, "DELETE FROM `result_10` WHERE  stu_id = $id ")or die(mysqli_error($con)); 
			 	    
			 	}elseif($c_name == '12th_Arts'){
			 	    $delete = mysqli_query($con, "DELETE FROM `12_arts` WHERE  stu_id = $id ")or die(mysqli_error($con)); 
			 	    
			 	}elseif($c_name == '12th_Comm'){
			 	    $delete = mysqli_query($con, "DELETE FROM `12_comm` WHERE  stu_id = $id ")or die(mysqli_error($con)); 
			 	}elseif($c_name == '12th_Maths'){
			 	    $delete = mysqli_query($con, "DELETE FROM `12_maths` WHERE  stu_id = $id ")or die(mysqli_error($con)); 
			 	}elseif($c_name == '12th_Bio'){
			 	    $delete = mysqli_query($con, "DELETE FROM `12_bio` WHERE  stu_id = $id ")or die(mysqli_error($con)); 
			 	}
        
                $query3 = mysqli_query($con, "DELETE FROM `result` WHERE id = $id;");
        		if ($query3) {
        			echo "<script>alert('Successfully Student Delete');window.location='see-students-details.php'</script>";
        		}else {
        			echo "<script>alert('Some Error Please Try Again Later');window.location='see-students-details.php'</script>";
        		}
         }
	
	}
	
	
		if (isset($_GET['detele_admin_card'])) {
		$id = $_GET['id'];
         $search = mysqli_query($con, "SELECT * FROM `admit_card` WHERE id = $id ")or die(mysqli_error($con));
         if(mysqli_num_rows($search)>0) 
	 		{
        
                $query3 = mysqli_query($con, "DELETE FROM `admit_card` WHERE id = $id;");
        		if ($query3) {
        		 echo "<script>alert('Result Deleted ');window.location='edit-admin-card.php'</script>";
        		}else {
        			echo "<script>alert('Some Error Please Try Again Later');window.location='see-students-details.php'</script>";
        		}
         }
         else{
             echo "<script>alert('Some Error Please Try Again Later');window.location='edit-admin-card.php'</script>";
         }
	
	}

	