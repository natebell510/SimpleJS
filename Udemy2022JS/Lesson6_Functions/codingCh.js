'use strict'

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
            console.log(answer);

            //register answer
            typeof answer === 'number'
            && answer < this.answers.length
            && this.answers[answer]++;

            this.displayResults();
            this.displayResults('string');2
    },
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }


};

poll.registerNewAnswer();

document.querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string');


//if method has this. bind should be added with object that has this.
// and call

const runOnce = function (){
    console.log('This will never run again!');
}
runOnce();

//immediately invoked function example
(function (){
    console.log('This will never run again!');
    const isPrivate = 23;

})();
//isPrivate is unreachable
(()=>console.log('arrow function never again'))();
{
    const isPrivate = 23;
    var notPrivate = 46;

}
console.log(notPrivate);








