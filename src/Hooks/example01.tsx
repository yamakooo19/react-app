import React, {useState} from 'react';

function bananaChangeApple(fruit: string): string{
    if(fruit === 'banana'){
        return 'apple';
    }else{
        return 'banana';
    }
}

function pushTodos(todos: {text: string}[]): {text: string}[]{
    const sub :{text: string}= {text: 'sub'};
    todos.push(sub);
    console.log(...todos);
    return todos;
}

function getTexts(todos: {text: string}[]): string[]{
    let texts: string[] = todos.reduce((acc: string[], val: {text: string}): string[] => {
        return [...acc, val.text];
    },[]);

    return texts;
}

function Example() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{text: 'Learn Hooks'}]);

    // const values = getTexts(todos);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age - 1)}>AgeButton</button>
            <p>fruit: {fruit}</p>
            <button onClick={() => setFruit(bananaChangeApple(fruit))}>FruitButton</button>
            <button onClick={() => setTodos(pushTodos(todos))}>TodosButton</button>
        </div>
    )
}



export {Example};