var QuizGame = QuizGame || {};
QuizGame.Boot = function () {
}

QuizGame.Boot.prototype = {
    init: function () {
        this.categoryIndex = 0;
        this.currentQuestionIndex = 0;
        this.scores = 0;
    },
    preload: function () {
        this.load.spritesheet('buttonCategory_1', 'assets/buttonCategory_1.png', 180, 40);
        this.load.spritesheet('buttonCategory_2', 'assets/buttonCategory_2.png', 180, 40);
        this.load.spritesheet('buttonCategory_3', 'assets/buttonCategory_3.png', 180, 40);
        this.load.pack('images_questions', 'assets/images-pack.json', null, this);
        this.load.image('button', 'assets/button.png');
        this.load.image('win', 'assets/win.jpg');
        //this.load.image('gameOver', 'assets/GameOver.jpg');
        this.load.image('buttonNext', 'assets/buttonNext.png');
        this.load.image('exitButton', 'assets/exit.png');

        // my_gameover
        this.load.image('game-over-image', 'assets/feat/game_over.png');

        // background
        this.game.load.image('quiz-time', 'assets/feat/quiz-time.png', 800,600);

        this.load.image('heart', 'assets/heart.png');
        this.load.image('right', 'assets/right.png');
        this.load.image('wrong', 'assets/wrong.png');
        this.load.json('questions', location.origin + '/data/questions.json');
        
        // this.load.audio('mario_lose', "assets/audios/sm64_mario_hurt.wav");
        // this.load.audio('mario_haha', "assets/audios/sm64_mario_haha.wav");
        // this.load.audio('game_over', "assets/audios/sm64_game_over.wav");
        
        this.load.audio('yippee', "assets/audios/sm64_mario_yippee.wav");

        // my audio
        this.load.audio('correct', "assets/audios/Correct-Answer.wav");
        this.load.audio('wrong', "assets/audios/Wrong-Answer.wav");
        this.load.audio('gameover', "assets/audios/Game-Over.wav");
    },
    create: function () {
        this.game.stage.backgroundColor = '#f4bf42';
        //this.game.add.sprite(0, 0, 'quiz-time');
        /*
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        
        this.scale.minWidth = 240;
        this.scale.minHeight = 170;
        this.scale.maxWidth = 2880;
        this.scale.maxHeight = 1920;
        */

        // this.mario_lose_audioSound = this.add.audio('mario_lose');
        // this.mario_hahaSound = this.add.audio('mario_haha');
        // this.game_overSound = this.add.audio('game_over');

        this.mario_lose_audioSound = this.add.audio('wrong');
        this.mario_hahaSound = this.add.audio('correct');
        this.game_overSound = this.add.audio('gameover');

        this.yippeeSound = this.add.audio('yippee');
        this.state.start('home');
    }
}
