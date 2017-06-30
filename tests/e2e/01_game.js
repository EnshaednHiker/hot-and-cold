
"use strict";
module.exports = {
    before : function(client) {
        console.log('Setting up client');
        client
            .init()
            .pause(1000);
    },
    after : function(client) {
        console.log('Closing down the client');
        client.end();
    },

    'A user can see a title in their browser' : function (client) {
        client.assert.title("Hot || Cold");
    },
    'A user can make a guess' : function (client) {
        var guessedNumber = '5';
        client
            .click('input.form-control')
            .keys([`${guessedNumber}`], function (){
                client
                    .click('button.btn.btn-default')
                    .pause(1000)
                    .assert.containsText('span.guess-span','1')
                    .assert.containsText('ul.guess-list li', guessedNumber);
                client.getText('p.feedback-text', function(result){
                        console.log('feedback: ',result.value);
                        if(result.value==='warm'){
                            client.verify.containsText('p.feedback-text','warm');
                        }
                        if(result.value==='hot'){
                            client.verify.containsText('p.feedback-text','hot');
                        }
                        if(result.value==='cold'){
                            client.verify.containsText('p.feedback-text','cold')
                        }
                        if(result.value==='win'){
                            client.verify.containsText('p.feedback-text','win')
                        }
                });
            });
    },
    'A user can make a second guess with relative feedback' : function (client) {
        var guessedNumber = 50;
        client
            .click('input.form-control')
            .keys([`${guessedNumber}`], function (){
                client
                    .click('button.btn.btn-default')
                    .pause(1000)
                    .assert.containsText('span.guess-span','2')
                    .assert.containsText('ul.guess-list li', guessedNumber);
                client.getText('p.feedback-text', function(result){
                        console.log('feedback: ',result.value);
                        if(result.value==='warmer'){
                            client.verify.containsText('p.feedback-text','warmer');
                        }
                        if(result.value==='hotter'){
                            client.verify.containsText('p.feedback-text','hotter');
                        }
                        if(result.value==='colder'){
                            client.verify.containsText('p.feedback-text','colder')
                        }
                        if(result.value==='cooler'){
                            client.verify.containsText('p.feedback-text','cooler')
                        }
                        if(result.value==='win'){
                            client.verify.containsText('p.feedback-text','win')
                        }
                });
            });

    },
    'A user can make at most 20 guesses' : function (client){
        var guessesArray = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
        guessesArray.forEach(function(guess) {
            client
                .click('input.form-control')
                .keys([`${guess}`], function (){
                    client
                        .click('button.playingButton')
                        .pause(300)
            }, this);
            
        });
        client.assert.containsText('span.guess-span','20');
    },
    'User cannot make more than 20 guesses' : function (client) {
         client.expect.element('button.playingButton').to.not.be.present;
    },
    'A user can start a new game by clicking \'+New Game link test\'' : function (client){
        client.click('ul li a');
        client.assert.containsText('span.guess-span','0');
    }
};