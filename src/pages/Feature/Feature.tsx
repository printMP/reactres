export default function addNum() {

//  const [num1, setNum1] = useState<number | ''>('');
function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('E is ',e.target.value)
}
//  console.log("")
// const sum = num1 + num2
// alert("The sum of "+num1+" and "+num2+" is "+sum);

return(
    <>
        <h1>
            Add 2 Numbers
        </h1>
        <input
            onChange={(e)=>handleInput(e)}
        />

        <input />
        <button onClick={addNum} className="addButton">Add</button>
        <div>
            Output
        </div>
    
    </>
)


}

