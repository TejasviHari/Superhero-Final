var canvas=new fabric.Canvas('my_canvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_object="";
block_image_object="";

function player_Update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        
    }
    
    );
}
function new_Image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);
block_image_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);
    });

    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

   if(e.shiftKey==true && keypressed=='80'){
       block_width=block_width+10;
       block_height=block_height+10;
       document.getElementById("current_width").innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;
   } 

   if(e.shiftKey==true && keypressed=='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}



if(keypressed=='70'){
    new_Image('hulk_face.png');
    console.log("F Pressed");
}
if(keypressed=='66'){
    new_Image('hulkd_body.png');
    console.log("B Pressed");
}
if(keypressed=='82'){
    new_Image('hulk_right_hand.png');
    console.log("R Pressed");
}

if(keypressed=='79'){
    new_Image('hulk_left_hand.png');
    console.log("O Pressed");
}

if(keypressed=='76'){
    new_Image('hulk_legs.png');
    console.log("L Pressed");
}

if(keypressed=='37'){
    left();
    console.log("Left Arrow Key Pressed");
}

if(keypressed=='38'){
    up();
    console.log("Up Arrow Key Pressed");
}

if(keypressed=='39'){
    right();
    console.log("Right Arrow Key Pressed");
}

if(keypressed=='40'){
    down();
    console.log("Down Arrow Key Pressed");
}


}




function up(){
if(player_y>=0){
    player_y=player_y-block_height;
    console.log("Height is"+block_height);
    console.log("X axis = "+ player_x + ", Y axis = "+player_y);
    canvas.remove(player_object);
    player_Update();
}

}


function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log(block_height);
        console.log("X axis = "+ player_x + ", Y axis = "+player_y);
        canvas.remove(player_object);
        player_Update();
    }
    
    }


    function left(){
        if(player_x>0){
            player_x=player_x-block_width;
            console.log(block_width);
            console.log("X axis = "+ player_x + ", Y axis = "+player_y);
            canvas.remove(player_object);
            player_Update();
        }
        
        }


        function right(){
            if(player_x<=850){
                player_x=player_x+block_width;
                console.log(block_width);
                console.log("X axis = "+ player_x + ", Y axis = "+player_y);
                canvas.remove(player_object);
                player_Update();
            }
            
            }


            function controls(){
                console.log("Click F for face.R for right hand. O for Left hand.L for legs. B for body. ")
            }