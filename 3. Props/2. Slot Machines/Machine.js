
function getRand(){
    return Math.ceil(Math.random()*3);
}

class Machine extends React.Component {
    
    render() {

        let img=["===", "+=+", "-/-"];
        let success="You win!";
        let failure="You lose!";
        let msg;
        let i1=getRand(), i2=getRand(), i3=getRand();
        if(i1==i2 && i3==i2 && i1==i3){
            msg=success;
        }
        else {
            msg = failure;
        }

        return(
            <div>
                <p>{img[i1]} {img[i2]} {img[i3]}</p>
                <p>{msg}</p>
        
            </div>
        );
    }
}