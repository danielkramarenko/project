$(document).ready(function(){
    var new_speed = score +value_speed ;

    $(".game-mod-classic").click(function(){
        clearInterval(game);
        const canvas = document.getElementById("game");
         ctx = canvas.getContext("2d");
         ptompt_speed_game = prompt ('Number \n 75 hard \n 100 normal \n 120+ easy \n control  A.W.S.D. or arrow ',new_speed  );
        game = setInterval(drawGameModeClassic ,  ptompt_speed_game );
        value_speed = ptompt_speed_game; //save speed prompt
        score=0; //обнулить 
        clearInterval(game_box);//Сто другой мод
        clearInterval(game_no_border);
        maps = {
            all_maps: arr_maps[Math.floor(Math.random()*arr_maps.length)], // рандом выбор цвета карты 
        }
        snake [0] = {
            x: 9 * box,
            y: 10 * box
        };
        rendering_snake();
    });
    
    $(".game-mod-box").click(function(){
        clearInterval(game_box);
        const canvas_game_mode_box = document.getElementById("game");
         ctx = canvas_game_mode_box.getContext("2d");
         ptompt_speed_game_mode_box = prompt ('Number \n 75 hard \n 100 normal \n 120+ easy \n control  A.W.S.D. or arrow ',new_speed  );
         game_box = setInterval(drawGameModeBox ,  ptompt_speed_game_mode_box );
         block = { // рандом ящика
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
            arr: arr_block[Math.floor(Math.random()*arr_block.length)],
        };
        value_speed = ptompt_speed_game_mode_box; //save speed prompt
        score=0; //обнулить 
        clearInterval(game);//Сто другой мод
        clearInterval(game_no_border);
        maps = {
            all_maps: arr_maps[Math.floor(Math.random()*arr_maps.length)], // рандом выбор цвета карты 
        }
        snake [0] = {
            x: 9 * box,
            y: 10 * box
        };
        rendering_snake();
    });
    
    
    $(".game-mod-no-border").click(function(){
        clearInterval(game_no_border);
        const canvas = document.getElementById("game");
         ctx = canvas.getContext("2d");
         ptompt_speed_game = prompt ('Number \n 75 hard \n 100 normal \n 120+ easy \n control  A.W.S.D. or arrow ',new_speed  );
         game_no_border = setInterval(drawGameModeNoBorder ,  ptompt_speed_game );
        value_speed = ptompt_speed_game; //save speed prompt
        score=0; //обнулить 
        clearInterval(game_box);//Сто другой мод
        clearInterval(game);
        maps = {
            all_maps: arr_maps[Math.floor(Math.random()*arr_maps.length)], // рандом выбор цвета карты 
        }
        snake [0] = {
            x: 9 * box,
            y: 10 * box
        };
        rendering_snake();
    });

    
    $(".game-mod-dark").click(function(){
        clearInterval(game);
        const canvas = document.getElementById("game");
         ctx = canvas.getContext("2d");
         ptompt_speed_game = prompt ('Number \n 75 hard \n 100 normal \n 120+ easy \n control  A.W.S.D. or arrow ',new_speed  );
        game = setInterval(drawGameModeDark ,  ptompt_speed_game );
        value_speed = ptompt_speed_game; //save speed prompt
        score=0; //обнулить 
        clearInterval(game_box);//Сто другой мод
        clearInterval(game_no_border);
        maps = {
            all_maps: arr_maps[Math.floor(Math.random()*arr_maps.length)], // рандом выбор цвета карты 
        }
        snake [0] = {
            x: 9 * box,
            y: 10 * box
        };
        rendering_snake();
    });

});
    
    let box = 32;
    let score = 0;
    var value_speed = 100;
    
    
    
    const ground = new Image();
    ground.src = "img/ground.png";
    const ground_green_night = new Image();
    ground_green_night.src = "img/ground.png";
    
    const ground_blue = new Image();
    ground_blue.src = "img/ground-blue.png";
    const ground_blue_night = new Image();
    ground_blue_night.src= "img/ground-blue-night.png";
    
    const ground_purple = new Image();
    ground_purple.src = "img/ground-purple.png";
    const ground_purple_night = new Image();
    ground_purple_night.src = "img/ground-purple-night.png";
    
    
    const groundBlack_White = new Image();
    groundBlack_White.src = "img/groundBlack-White.png";
    const groundBlack_White_night = new Image();
    groundBlack_White_night.src = "img/groundBlack-White-night.png";
    
    const ground_RedYellow = new Image();
    ground_RedYellow.src = "img/ground-RedYellow.png";
    const ground_RedYellow_night = new Image();
    ground_RedYellow_night.src = "img/ground-RedYello-night.png";
    
    let arr_maps = [//массив карт
        green = [ ground ,  ground_green_night],
        blue = [ground_blue , ground_blue_night],
        purple = [ground_purple , ground_purple_night],
        RedYellow = [ground_RedYellow ,ground_RedYellow_night],
        Black_White = [groundBlack_White , groundBlack_White_night],
    ];
    var random_0_1= Math.floor(Math.random()*2);//рандом 0 или 1 для выбора дня/ночь
    let maps = {
        all_maps: arr_maps[Math.floor(Math.random()*arr_maps.length)], // рандом выбор цвета карты 
    }
    //alert(arr_maps);
    
    const food_apple = new Image();
    food_apple.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C240-32.png";
    
    const food_Burger = new Image();
    food_Burger.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C206-32.png";
    
    const food_fish = new Image();
    food_fish.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C205-32.png";
    
    const food_scrambled_eggs = new Image();
    food_scrambled_eggs.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C203-32.png";
    
    const food_pizza = new Image();
    food_pizza.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C219-32.png";
    
    const food_doughnut = new Image();
    food_doughnut.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C228-32.png";
    
    const food_steak = new Image();
    food_steak.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C225-32.png";
    
    const food_Avocado = new Image();
    food_Avocado.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C230-32.png";
      
    const food_Cheese = new Image();
    food_Cheese.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C217-32.png";

    const food_sausage = new Image();
    food_sausage.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-32.png";

    const food_chicken = new Image();
    food_chicken.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C223-32.png";

    const food_cheeseburger = new Image();
    food_cheeseburger.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C218-32.png";

    const food_hot_dog = new Image();
    food_hot_dog.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-32.png";
    
    const food_grapes = new Image();
    food_grapes.src = "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C229-32.png";
    
    let arr_foot = [food_Cheese,food_grapes ,food_hot_dog, food_cheeseburger , food_chicken, food_sausage, food_Avocado, food_steak, food_apple , food_Burger ,food_fish , food_scrambled_eggs , food_pizza , food_doughnut];
    
    let food = { // рандом еды
        x: Math.floor((Math.random() * 17 + 1)) * box,
        y: Math.floor((Math.random() * 15 + 3)) * box,
        arr: arr_foot[Math.floor(Math.random()*arr_foot.length)],
    };
    
    
    const warning_box =  new Image();
    warning_box.src = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-06-32.png";
    const warning_box2 =  new Image();
    warning_box2.src = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-06-32.png";
    const warning_box3 =  new Image();
    warning_box3.src = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-06-32.png";
    
    let warning ={
        x: Math.floor((Math.random() * 17 + 1)) * box ,
        y: Math.floor((Math.random() * 15 + 3)) * box ,
    };
    let warning_two ={
        x: Math.floor((Math.random() * 17 + 1)) * box ,
        y: Math.floor((Math.random() * 15 + 3)) * box ,
    };
    let warning_three ={
        x: Math.floor((Math.random() * 17 + 1)) * box ,
        y: Math.floor((Math.random() * 15 + 3)) * box ,
    };
    
    
    
    
    const box_1 = new Image();
    box_1.src = "https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/crate-5-32.png";
    
    const  box_2= new Image();
    box_2.src = "https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/crate-32.png";
    
    const box_3 = new Image();
    box_3.src = "https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/crate-2-32.png";
    
    const box_4 = new Image();
    box_4.src = "https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/crate-1-32.png";

    const box_5 = new Image();
    box_5.src = "https://cdn2.iconfinder.com/data/icons/miscellaneous-31/60/box-32.png"
    
    const box_7 = new Image();
    box_7.src = "https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/crate-4-32.png"

    let arr_block = [box_1,box_2,box_3,box_4,box_5  , box_7];
    let arr_block_two = [box_1,box_2,box_3,box_4,box_5  , box_7];
    let arr_block_three = [box_1,box_2,box_3,box_4,box_5  , box_7];
    block_two = { // рандом ящика
        arr: arr_block_two[Math.floor(Math.random()*arr_block_two.length)],
    };
    block_three = { // рандом ящика
        arr: arr_block_three[Math.floor(Math.random()*arr_block_three.length)],
    };
    
    
    
    
    
    
    
    let snake = [];
    snake [0] = {
        x: 9 * box,
        y: 10 * box
    };
    
    
    document.addEventListener("keydown" , direction);
    document.addEventListener("keydown" , direction_wsda);
    
    let dir;
    function direction_wsda(e){
        if(e.keyCode == 65 && dir !="right"){
            dir = "left";
        }else if(e.keyCode == 87 && dir !="down"){
            dir = "up";
        }else if(e.keyCode == 68 && dir !="left"){
            dir = "right";
        }else if(e.keyCode == 83 && dir !="up"){
            dir = "down";
        } 
    }
    function direction(event) {
        if(event.keyCode == 37 && dir != "right")
          dir = "left";
        else if(event.keyCode == 38 && dir != "down")
          dir = "up";
        else if(event.keyCode == 39 && dir != "left")
          dir = "right";
        else if(event.keyCode == 40 && dir != "up")
          dir = "down";
      }
    
    
    
    
    function rendering_snake(){
        for(let i = 0 ; i < snake.length; i++){
            ctx.fillStyle = i == 0 ? "green" : "#5eb141";
            ctx.fillRect(snake[i].x , snake[i].y , box, box,);//рендеринг  змеи
        }
    }
    
    function dont_leave_the_field(box, snakeX ,box, snakeY){//не выходи за поле ..................................
        if(snakeX < box || snakeX > box * 17 
            || snakeY < 3 * box || snakeY > box * 17){
            clearInterval(game);
            clearInterval(game_box);
            clearInterval(game_no_border);
            alert("You lose. \n" + 'Your score = ' + score);
            snake.pop(); //обнулить 
            snake.length=0; //обнулить 
        }
    }
    
    function eatTail(head, arr){//не ешь хвост ..................................
        for(let i = 0; i < arr.length; i++ ){
            if(head.x == arr[i].x && head.y == arr [i].y){
                clearInterval(game);
                clearInterval(game_box);
                clearInterval(game_no_border);
                alert("You lose. \n" + 'Your score = ' + score);
                snake.pop(); //обнулить 
                snake.length=0; //обнулить 
            }
        }
    }
    


    function drawGameModeClassic(){
        
        ctx.drawImage(maps.all_maps[random_0_1], 0 , 0);//карты

        ctx.drawImage(food.arr , food.x ,food.y);//рендеринг еды 
        
        rendering_snake();

        ctx.fillStyle = "white";  //очки
        ctx.font = "50px Arial";  //очки
        ctx.fillText(score , box * 2.5, box * 1.7);  //очки

        let snakeX = snake[0].x;//управление
        let snakeY = snake[0].y;
    
        if(snakeX == food.x && snakeY == food.y){ //есть еду
            score++;
            value_speed--;
            food = { // рандом еды
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box,
                arr: arr_foot[Math.floor(Math.random()*arr_foot.length)],
            };
            if(score % 2 == 1){// цвет карты между днем и ночью
                random_0_1= Math.floor(Math.random()*2);

            }
            
        }else{
            snake.pop();
        }
    
        dont_leave_the_field(box, snakeX ,box, snakeY);// не выходи за поле
    
        if(dir == "left") snakeX -=box; //управление
        if(dir == "right") snakeX +=box; //управление
        if(dir == "up") snakeY -=box; //управление
        if(dir == "down") snakeY +=box; //управление
        let newHead = {
            x: snakeX,
            y: snakeY,
        }
        
        eatTail(newHead ,snake);//не ешь хвост
        snake.unshift(newHead);
        
    }

    function drawGameModeDark(){ //mod Dark
        
        ctx.drawImage(maps.all_maps[random_0_1], 0 , 0);//карты

        ctx.drawImage(food.arr , food.x ,food.y);//рендеринг еды 
        
        rendering_snake();

        if(score % 3 == 1){ // Dark
            ctx.fillStyle = "#000000e3";            
            ctx.fillRect(1*box,3*box,  545 ,480);
        }


        ctx.fillStyle = "white";  //очки
        ctx.font = "50px Arial";  //очки
        ctx.fillText(score , box * 2.5, box * 1.7);  //очки

    
        let snakeX = snake[0].x;//управление
        let snakeY = snake[0].y;
    
        if(snakeX == food.x && snakeY == food.y){ //есть еду
            score++;
            value_speed--;
            food = { // рандом еды
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box,
                arr: arr_foot[Math.floor(Math.random()*arr_foot.length)],
            };
            if(score % 2 == 1){// цвет карты между днем и ночью
                random_0_1= Math.floor(Math.random()*2);

            }
            
        }else{
            snake.pop();
        }
    
        dont_leave_the_field(box, snakeX ,box, snakeY);// не выходи за поле
    
        if(dir == "left") snakeX -=box; //управление
        if(dir == "right") snakeX +=box; //управление
        if(dir == "up") snakeY -=box; //управление
        if(dir == "down") snakeY +=box; //управление
        let newHead = {
            x: snakeX,
            y: snakeY,
        }
        
        eatTail(newHead ,snake);//не ешь хвост
        snake.unshift(newHead);
        
    }
    
    
    function drawGameModeBox(){ //game mod box
        ctx.drawImage(maps.all_maps[random_0_1], 0 , 0);//карты
    
        ctx.drawImage(food.arr , food.x ,food.y);//рендеринг еды 
    
        ctx.drawImage(block.arr , block.x ,block.y);//рендеринг бокса
        ctx.drawImage(block_two.arr , block_two.x ,block_two.y);//рендеринг бокса
        ctx.drawImage(block_three.arr , block_three.x ,block_three.y);
    
    
        ctx.drawImage(warning_box , warning.x ,warning.y);//рендеринг бокса
        ctx.drawImage(warning_box, warning_two.x , warning_two.y);//рендеринг бокса
        ctx.drawImage(warning_box, warning_three.x ,warning_three.y);//рендеринг бокса
    
    
        rendering_snake();//рендеринг  змеи
    
        ctx.fillStyle = "white";  //очки
        ctx.font = "50px Arial";  //очки
        ctx.fillText(score , box * 2.5, box * 1.7);  //очки
    
    
    
        let snakeX = snake[0].x;//управление
        let snakeY = snake[0].y;
    
        if(snakeX == food.x && snakeY == food.y){ //есть еду
            score++;
            value_speed--;
                food = { // рандом еды
                    x:Math.floor((Math.random() * 17 + 1)) * box,
                    y:Math.floor((Math.random() * 15 + 3)) * box,
                    arr: arr_foot[Math.floor(Math.random()*arr_foot.length)],
                };
                block_three = { // рандом ящика
                    x: warning_three.x,
                    y: warning_three.y,
                    arr: arr_block_three[Math.floor(Math.random()*arr_block_three.length)],
                };
                 warning_three ={
                    x: Math.floor((Math.random() * 17 + 1)) * box ,
                    y: Math.floor((Math.random() * 15 + 3)) * box ,
                };
            if(score % 2 == 1){// цвет карты между днем и ночью
                random_0_1= Math.floor(Math.random()*2);//карта день ночь
                block_two = { // рандом ящика
                    x: warning_two.x,
                    y: warning_two.y,
                    arr: arr_block_two[Math.floor(Math.random()*arr_block_two.length)],
                };
                 warning_two ={
                    x: Math.floor((Math.random() * 17 + 1)) * box ,
                    y: Math.floor((Math.random() * 15 + 3)) * box ,
                };
                
            }
            else if (score % 2 == 0){//сумон ящика
                block = { // рандом ящика
                    x: warning.x,
                    y: warning.y,
                    arr: arr_block[Math.floor(Math.random()*arr_block.length)],
                };
                 warning ={
                    x: Math.floor((Math.random() * 17 + 1)) * box ,
                    y: Math.floor((Math.random() * 15 + 3)) * box ,
                };            
            }
    
        }else{
            snake.pop();
        }
    
    
        if(food.x == block.x && food.y == block.y || food.x == warning.x && food.y == warning.y ||
    
            food.x == block_two.x && food.y == block_two.y || food.x == warning_two.x && food.y == warning_two.y ||
    
            food.x == block_three.x && food.y == block_three.y || food.x == warning_three.x && food.y == warning_three.y ||
    
            warning.x == warning_two.x && warning.y == warning_two.y ||
            warning.x == warning_three.x && warning.y == warning_three.y ||
    
            warning_two.x == warning.x && warning_two.y == warning.y ||
            warning_two.x == warning_three.x && warning_two.y == warning_three.y ||
    
            warning_three.x == warning.x && warning_three.y == warning.y ||
            warning_three.x == warning.x && warning_two.y == warning.y 
    
            ){//рефреш респ
            block = { // рандом ящика
                x: Math.floor((Math.random() * 17 + 1)) * box ,
                y: Math.floor((Math.random() * 15 + 3)) * box ,
                arr: arr_block[Math.floor(Math.random()*arr_block.length)],
            };
            block_two = { // рандом ящика
                x: Math.floor((Math.random() * 17 + 1)) * box ,
                y: Math.floor((Math.random() * 15 + 3)) * box ,
                arr: arr_block_two[Math.floor(Math.random()*arr_block_two.length)],
            };
            block_three = { // рандом ящика
                x: Math.floor((Math.random() * 17 + 1)) * box ,
                y: Math.floor((Math.random() * 15 + 3)) * box ,
                arr: arr_block_three[Math.floor(Math.random()*arr_block_three.length)],
            };
            food = { // рандом еды
                x:Math.floor((Math.random() * 17 + 1)) * box,
                y:Math.floor((Math.random() * 15 + 3)) * box,
                arr: arr_foot[Math.floor(Math.random()*arr_foot.length)],
            };
            warning ={
                x: Math.floor((Math.random() * 17 + 1)) * box ,
                y: Math.floor((Math.random() * 15 + 3)) * box ,
            };
            warning_two ={
                x: Math.floor((Math.random() * 17 + 1)) * box ,
                y: Math.floor((Math.random() * 15 + 3)) * box ,
            };
            warning_three ={
                x: Math.floor((Math.random() * 17 + 1)) * box ,
                y: Math.floor((Math.random() * 15 + 3)) * box ,
            };
        }
    
        dont_leave_the_field(box, snakeX ,box, snakeY);// не выходи за поле
    
        if(snakeX == block.x && snakeY == block.y || snakeX == block_two.x && snakeY == block_two.y || snakeX == block_three.x && snakeY == block_three.y){ //Не ешь ящик
            clearInterval(game_box);
            alert("You lose. \n" + 'Your score = ' + score);
            snake.pop(); //обнулить 
            snake.length=0; //обнулить 
        }
    
        if(dir == "left") snakeX -=box; //управление
        if(dir == "right") snakeX +=box; //управление
        if(dir == "up") snakeY -=box; //управление
        if(dir == "down") snakeY +=box; //управление
        let newHead = {
            x: snakeX,
            y: snakeY,
        }
        eatTail(newHead ,snake);//не ешь хвост
        snake.unshift(newHead);
        
    }
    
    
    
    function drawGameModeNoBorder(){
        ctx.drawImage(maps.all_maps[random_0_1], 0 , 0);//карты
    
        ctx.drawImage(food.arr , food.x ,food.y);//рендеринг еды 
    
        rendering_snake();
    
        ctx.fillStyle = "white";  //очки
        ctx.font = "50px Arial";  //очки
        ctx.fillText(score , box * 2.5, box * 1.7);  //очки
    
    
    
        let snakeX = snake[0].x;//управление
        let snakeY = snake[0].y;
    
        if(snakeX == food.x && snakeY == food.y){ //есть еду
            score++;
            value_speed--;
            food = { // рандом еды
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box,
                arr: arr_foot[Math.floor(Math.random()*arr_foot.length)],
            };
            if(score % 2 == 1){// цвет карты между днем и ночью
                random_0_1= Math.floor(Math.random()*2);
            }
            
        }else{
            snake.pop();
        }
    
            //можешь выходить за поле
            if(snakeX < box  ){
                snake [0] = {
                    x: 18 * box,
                    y: snakeY + 0,
                };
                snakeX = snake[0].x;//управление
                snakeY = snake[0].y;

            }else if ( snakeX > box * 17){
                snake [0] = {
                    x: 0 * box,
                    y: snakeY +  0,
                };
                snakeX = snake[0].x;//управление
                snakeY = snake[0].y;
            }
            
            if( snakeY < 3 * box ){
                snake [0] = {
                    x: snakeX + 0,
                    y: 18 * box
                };
                snakeX = snake[0].x;//управление
                snakeY = snake[0].y;
            }else if ( snakeY > box * 17){
                snake [0] = {
                    x: snakeX + 0,
                    y: 2 * box
                };
                snakeX = snake[0].x;//управление
                snakeY = snake[0].y;
            }
       
    
        if(dir == "left") snakeX -=box; //управление
        if(dir == "right") snakeX +=box; //управление
        if(dir == "up") snakeY -=box; //управление
        if(dir == "down") snakeY +=box; //управление
        let newHead = {
            x: snakeX,
            y: snakeY,
        }
        eatTail(newHead ,snake);//не ешь хвост
        snake.unshift(newHead);
        
    }