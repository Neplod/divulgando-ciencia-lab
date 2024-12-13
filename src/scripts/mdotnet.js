const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radio = 10;
        this.dirx = (Math.random() * 2) - 1;
        this.diry = (Math.random() * 2) - 1;
        this.vel = (Math.random() * 5) + 2.5;
    }

    paint(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radio,0,Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    move(x,y){
        this.x += this.dirx * this.vel;
        this.y += this.diry * this.vel;

        if(this.x + this.radio > canvas.width || this.x < 0) this.dirx *= -1;
        if(this.y + this.radio > canvas.height || this.y < 0) this.diry *= -1;
    }
}

let blist = [];

for(let i=0;i<40;i++){
    blist.push(new Ball((Math.random() * canvas.width), (Math.random() * canvas.height)));
}

const animate = () =>{

    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.clearRect(0,0, canvas.width,canvas.height);

    blist.forEach(b =>{

        blist.forEach(bc => {
            let dx = bc.x - b.x;
            let dy = bc.y - b.y;
            let dist = Math.sqrt(dx**2+dy**2);
            if (dist < 300){
                ctx.beginPath()
                ctx.moveTo(b.x, b.y);
                ctx.lineTo(bc.x, bc.y);
                ctx.stroke();
                ctx.closePath();
            }
        })

        b.paint();
        b.move();
    })

    requestAnimationFrame(animate);

}

animate()