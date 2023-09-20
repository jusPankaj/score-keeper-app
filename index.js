let score=0;
let wkt=0;
let ballWiseRuns = [];   
let hit =0 ;
let inputRefs = React.createRef();


const addScore = (run) => {
    hit = run;
    console.log(hit);
    rootElement.render(<App />);
}

const addWicket = () => {
    hit='W'
    rootElement.render(<App />)
}

const ScoreButtons = () => {
    return(
        <div>
        <button onClick={ () => addScore(0)}>0</button>
        <button onClick={ () => addScore(1)}>1</button>
        <button onClick={ () => addScore(2)}>2</button>
        <button onClick={ () => addScore(3)}>3</button>
        <button onClick={ () => addScore(4)}>4</button>
        <button onClick={ () => addScore(5)}>5</button>
        <button onClick={ () => addScore(6)}>6</button>
        <button onClick={ addWicket}>Wicket</button>
    </div>
    )
}

const Result = () => {
        <div>
            {ballWiseRuns.map((res, index) => (
                <>
                {index % 6===0 ? <br /> : null}
                <span key={index}>{res === 0 ? <strong>.</strong> : res }</span>&nbsp;&nbsp;&nbsp;</>))}
        </div>
}

const Forms = () => {
    return(
        <form onSubmit={handleSubmit}>
            <input value={hit}></input>
            <input ref={inputRefs} placeholder="Add a comment"></input>
            <button>Submit</button>
        </form>
    )
}

function handleSubmit(event) {
    event.preventDefault();

    const type = event.type;
    console.log(type);
    if(hit=='W'){
        wkt+=1;
    }
    else{
    score += hit;
    }
    ballWiseRuns.unshift(
        <span>{`${hit}, ${inputRefs.current.value}`}</span>
    );

    {hit = 0;}
    {inputRefs.current.value="";}

    rootElement.render(<App />);

}

const App = () =>{
    return(
        <>
            <h1>Score Keeper</h1>
            <p>Score : {score}/{wkt}</p>
            <ScoreButtons />  
            <br />
            <Forms />
            <hr />
            {ballWiseRuns.map((res,index)=>(
                <p key={index}>{res}</p>
            ))}
        </>
    )
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);

