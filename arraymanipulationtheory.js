let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

newMessage=['to', 'program' ];

secretMessage[7]='right';

secretMessage.shift()
//console.log(secretMessage)

secretMessage.unshift('Programming')
//console.log(secretMessage)

secretMessage.splice(6,5 ,'know,')
//console.log(secretMessage)
/*takes out what is specified 6,5, and replaces them with the text to right 'know'*/

console.log(secretMessage.join(' '))





