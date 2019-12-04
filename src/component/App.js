import React from "react";
import Userdetails from './userDetails';
import Discard from './discard';
import Faker from "faker";

const App = () => {
    let style ={
        padding: "60px 0px 60px"
    };
    return(
        <div className="container" style={style}>
            <div className="row">
                <Discard>
                <Userdetails username="NEHA" role="DEVELOPER" imgUrl={Faker.image.avatar()}/>

                </Discard>
                <Discard>
                <Userdetails username="MANISHA" role="DESIGNER" imgUrl={Faker.image.avatar()}/>

                </Discard>
                <Discard>
                <Userdetails username="VRUSHALI" role="TESTER" imgUrl={Faker.image.avatar()}/>

                </Discard>

            </div>
        <hr/>
        <div className="row">
                <Discard>
                <Userdetails username="PRAGATI" role="PAINTER" imgUrl={Faker.image.avatar()}/>

                </Discard>
                <Discard>
                <Userdetails username="PRATIKSHA" role="ARTIST" imgUrl={Faker.image.avatar()}/>

                </Discard>
                <Discard>
                <Userdetails username="SIDDHI" role="SINGER" imgUrl={Faker.image.avatar()}/>

                </Discard>

            </div>
        
</div>
    )
}
export default App;