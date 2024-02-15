  //alert("Hello World!")
 // console.log("Console MEssage Test")

 // $(".menu-area").addClass("active")

  $(".menu-area").click(function() {
    if ($(".menu-area").hasClass("active")){
        $(".menu-area").removeClass("active")
    } else{
        $(".menu-area").addClass("active")
    }
  })

  var studentName = "Ray";
  var allStudents = ["Ray","Naveena","Turba","Warrick","Yuna","Beatrice","Priscilla","Sean"]
  console.log(allStudents)
  // alert(allStudents)


  var i = 0;
  while (i < allStudents.length){
    console.log(allStudents[i])
    i = i + 1;
  }

  var k = 0
  while (k < allStudents.length){
    console.log(allStudents[k])
    $("<div></div>")
    .addClass("student")
    .html(allStudents[k])
    .appendTo("#everything")

    k = k + 1;

  }

  $(window).on('resize', function() {
    var win = $(window);
    if (win.width() <12800){
      $("#everything").css("grid-template-columns","repeat(4, 1fr)")
    }
    if(win.width() < 1280){
      $("#everything").css("grid-template-columns","repeat(3, 1fr)")
    }
    /*if (win.width() < 800){

    }*/
  })
  /*while (i < 5)
  {
    do this
    i = i+1;
  }*/

  $(document).scroll(function() {
    $("<div></div>")
    .addClass("newBox")
    .appendTo("body")
    .html("Number of students" + allStudents.length)
  })
