
//   If the person’s name is longer than 8 characters, only display the first six characters of their name.

const Person = (props) => {
    const { name, age, hobbies=[] } = props;
    let reply;
    if (age > 18) {
        reply = "please go vote!"
    }
    else {
        reply = "you must be 18."
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name.substr(0, 6)}</p>
            <p>Age: {age}</p>
            {reply}
            <p>Hobbies: </p>
            <ul>{hobbies.map(h =>
            (
                <li>
                    {h}
                </li>
            )
            )}</ul>
        </div>
    )
}


// SOLUTION 2
// function Person(props) {
//     let voteText = props.age >= 18 ? "Go vote!" : "Go study!";
  
//     let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
  
//     return (
//       <div>
//         <p>Learn some information about this person:</p>
//         <ul>
//           <li>Name: {props.name.slice(0, 6)}</li>
//           <li>Age: {props.age}</li>
//           <ul>
//             Hobbies
//             {hobbies}
//           </ul>
//         </ul>
//         <h3>{voteText}</h3>
//       </div>
//     );
//   }


