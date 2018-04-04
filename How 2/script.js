 <script src="js/jquery-3.1.1.min.js"></script>

<script>

$(document).ready(function(){
            //This is a comment
            // going to go in here
            $(".box").css("background-color", "blue");
            $("#click").click(function(){
                $("#clickBox").hide();
            });
            $("#clickShow").click(function(){
                $("#clickBox").show();
                $("#clickBox").css("background-color", "pink");
            });
            $("#hover").mouseenter(function(){
                $("#hoverBox").hide();
            });
            $("#hover").mouseleave(function(){
                $("#hoverBox").show();
            });
            $("#toggle").click(function(){
                $("#toggleBox").toggle(1000);
            });
            $(".box").css("background-color", "blue");
            $("#click").click(function(){
                $("#clickBox").hide();
            });
            $("#clickShow").click(function(){
                $("#clickBox").show();
                $("#clickBox").css("background-color", "pink");
            });
            $("#hover").mouseenter(function(){
                $("#hoverBox").hide();
            });
            $("#hover").mouseleave(function(){
                $("#hoverBox").show();
            });
