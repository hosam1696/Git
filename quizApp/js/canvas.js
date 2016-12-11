function Loader(mVal) {
    var loader = document.getElementById('loader');
    var ctx = loader.getContext('2d');
    var ccw = 100;
    var cch = 100;
    var startPoint = 4.71;
    var val = 0;
    var diff;
    var load = setInterval(function () {
        loadSim(mVal);
    }, 50);

    function loadSim(max_val) {
        var splitted = (max_val * 2 * Math.PI) / 100;
        diff = ((val / 100) * Math.PI * 2);
        ctx.clearRect(0, 0, ccw, cch);
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#ccc";
        var delay = Math.PI / 5;
        ctx.arc(50, 50, 45, startPoint, Math.PI * 2 + startPoint, false);
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#1175b7";
        ctx.lineCap = "round";
        ctx.font = "20px Arial";
        ctx.fillStyle = "#ea4335";
        ctx.textAlign = "center";
        ctx.fillText(val + '%', ccw / 2, cch / 1.8, ccw);
        ctx.beginPath();
        ctx.arc(50, 50, 45, startPoint, diff + startPoint, false);
        ctx.stroke();
        if (val > max_val / 4) {
            //alert(diff);
            ctx.beginPath();
            ctx.strokeStyle = "#0488e0";
            ctx.arc(50, 50, 45, startPoint, (diff + startPoint - splitted / 4), false);
            ctx.stroke();
        }
        if (val > max_val / 2) {
            //alert(diff);
            ctx.beginPath();
            ctx.strokeStyle = "#09F";
            ctx.arc(50, 50, 45, startPoint, (diff + startPoint - splitted / 2), false);
            ctx.stroke();
        }
        if (val > (max_val / 1.3)) {
            //alert(diff);
            ctx.beginPath();
            ctx.strokeStyle = "#80cafb";
            ctx.arc(50, 50, 45, startPoint, (diff + startPoint - (splitted * 0.75)), false);
            ctx.stroke();
        }
        val++;
        if (val > max_val) {
            clearInterval(load);
        }
    }
}
window.addEventListener('load',function() {
    
})