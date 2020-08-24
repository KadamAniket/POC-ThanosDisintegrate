disintegrate.init();

document.getElementById('imgDis').addEventListener('click', e => {

    const disObj = disintegrate.getDisObj(e.target);
    disintegrate.createSimultaneousParticles(disObj);
    e.target.remove();
});

const thanosSnap = function () {
    this.name = "ThanosSnap";
    this.animationDuration = 1500;
    this.size = 3;
    this.speedX = Math.random();
    this.speedY = Math.random() * -1;
    this.first = true;
    this.draw = (ctx, percentageComplete) => {
        if (this.first) {
            this.startX += (Math.random - 0.5) * 10;
            this.startY += (Math.random - 0.5) * 10;
            this.first = false;
        }

        ctx.beginPath();
        ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size);
        ctx.fillStyle = `rgba(${this.rgbArray[0]}, ${this.rgbArray[1]}, ${this.rgbArray[2]}, ${1 - percentageComplete})`
        ctx.fill();
        this.speedX *= 1.07;
        this.speedY *= 1.07;
        this.size *= 0.95;
        this.startX += this.speedX;
        this.startY += this.speedY;
    }
}

disintegrate.addParticleType(thanosSnap);