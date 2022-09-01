import Thubnails from "./Thubnails";
import FlipMove from 'react-flip-move';

function Results({results}) {
    // console.log(results)
    return (
        <FlipMove className="p-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-5 gap-5">
            {results.map(result=>
                <Thubnails key={result.id} result={result}/>
                )}
        </FlipMove>
    );
}

export default Results;