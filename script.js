const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext("2d");

    const width = 400;
    const height = 600;

    let paddleWidth = 50;
    let paddleHeight = 10;

    canvas.width = width;
    canvas.height = height;


    context.fillStyle = "black";
    context.fillRect(0 , 0 , width , height);
    

    context.fillStyle = "white";
    context.fillRect(175 ,10 ,paddleWidth ,  paddleHeight);

    context.fillStyle = "white";
    context.fillRect(175 ,height - 20 ,paddleWidth ,  paddleHeight);

    context.beginPath();
    context.setLineDash([6]);
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.strokeStyle = "white";
    context.stroke();

    context.beginPath();
    context.arc(width / 2 , height / 2 , 10 , 2 * Math.PI , false);
    context.fillStyle = "white";
    context.fill();

    context.font = "32 px Josefin Sans";
    context.fillText(10 , 20, height / 2  - 30);
    context.fillText(15 , 20, height / 2  + 50);