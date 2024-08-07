export function longestWord(sentenceString) {
            const characters = sentenceString.split(' '); 
            let longest = '';
        
            for (var i = 0; i < characters.length; i++) {
                const character = characters[i];
                if (character.length >= longest.length) {
                    longest = character;
                }
            }
        
            return longest;
        }
        
        
export function shortestWord(sentenceString) {
            const characters = sentenceString.split(' '); 
            let shortest = characters[0];
        
            for (var i = 0; i < characters.length; i++) {
                const character = characters[i];
                if (character.length <= shortest.length) {
                    shortest = character;
                }
            }
        
            return shortest;
        }
        
        
export function wordLengths(sentenceString) {
            const characters = sentenceString.split(' ');
            let totalLength = 0;
            for (var i = 0; i < characters.length; i++) {
                totalLength += characters[i].length;
            }
            return totalLength;
        }