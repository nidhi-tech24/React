// const el = document.createElement('h1');
// el.innerHTML = "Coding Seekho";

// const root =document.getElementById('root')
// root.appendChild(el)


// **********************************************************************************

// const React = {
//     createElement: function(s1,s2){
//         // const el = document.createElement("h1");
//         const el = document.createElement(s1);
//         el.innerHTML = s2;

//         root.appendChild(el);
//     }
// };

// // React.createElement();
// React.createElement("h1","Helllooo");
// React.createElement("h2","How are you?");
// React.createElement("h3","Byyeeee");


// **********************************************************************************

// const el = React.createElement('h1', null, "CODING SEEKHO");
// const el2 = React.createElement('h1', null, "CODING SEEKHO");
// // console.log(el);

// const root = ReactDOM.createElement(document.getElementById('root'))
// root.render(el)
// root.render(el2)
// console.log(root);


// **********************************************************************************


function App(){
    return(
        <>
            <p>Aaj hum react padhna shuru kiye hai 1</p>
            <p>Aaj hum react padhna shuru kiye hai 2</p>
        </>
    );
}
// const el = app()
// const el = App()
const el = <App />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el);

















