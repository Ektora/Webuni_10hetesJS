// export: jelzés, hogy a függvényt kivülről szeretnénk elérni
/*
export function initLessons(){
	/*
	document.querySelector('#savebutton').addEventListener('click', function() {
		alert('I was clicked');
	});
	*/
	// Arrow function



	/*
	document.querySelector('#savebutton').addEventListener('click', (event) => {
		alert('I was clicked');
		console.log(event);
	});
	
}

	// Teljesen leegyszerűsített függvények | a console.log ilyenkor visszatérési érték is, ; nem kell utána
	export const initLessons = () => 
		document.querySelector('#savebutton').addEventListener('click', event => console.log(event))
*/	
import { calculatDurationSum } from "./calculator.js";

	const lesson1 = {
		name: 'Modern JavaScript és webfejlesztési alapok ismétlése',
		duration: 75,
		isCompleted: false
	};
	const lesson2 = {
		name: 'Modern JavaScript gyakorlás',
		duration: 90,
		isCompleted: false
	};
	const lesson3 = {
		name: 'HTTP és aszinkronitás',
		duration: 88,
		isCompleted: false
	};
	const lesson4 = {
		name: 'HTTP és aszinkronitás gyakorlása',
		duration: 93,
		isCompleted: false
	};
	const lesson5 = {
		name: 'Haladó CSS (Flexbox és Grid)',
		duration: 80,
		isCompleted: false
	};
	const lesson6 = {
		name: 'WebComponents',
		duration: 76,
		isCompleted: false
	};

    let lessonBaseName ='';
    lessonBaseName = 'Időjárás Alkalmazás'

	const lesson7 = {
		name: `${lessonBaseName} 1.`,
		duration: 70,
		isCompleted: false
	};
	let lesson8 = {
		name: lessonBaseName + ' 2.',
		duration: 84,
		isCompleted: false
	};
	lesson8.isCompleted = true;
/*
    lesson8 = {
        name: 'Vizsga',
        duration: 90,
        isCompleted: false
    };
*/
	const lessons = [lesson1,lesson2,lesson3,lesson4,lesson5,lesson6,lesson7,lesson8];
	
	export const initLessons = () => {
        const container = document.querySelector('#lessons');
		lessons.forEach(lesson => {
            container.innerHTML = container.innerHTML + `
                <div class="lesson">
                    <input type="checkbox" ${lesson.isCompleted ? 'checked' : ''}>
                    ${lesson.name} - ${lesson.duration} perc
                </div>    
            `;
        });
        
        document.querySelector('#savebutton').addEventListener('click', () => {
            document.querySelectorAll('input').forEach((input, index) => {
                lessons[index].isCompleted = input.checked;
            });
            lessons.forEach(l => console.log(l));
        })

        document.querySelector('#duration-sum').textContent = `${calculatDurationSum(lessons.map(l => l.duration))} perc`;
	};