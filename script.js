window.onload = function(){
    var batteryStatus = document.getElementById("battery-status");
    var batteryLevel = document.getElementById("battery-level");



    navigator.getBattery().then(function(battery){
        function updateBatteryStatus(){
            var level = Math.round(battery.level * 100);
            batteryStatus.innerHTML = "Battery Status : " + level + "%";
            batteryLevel.style.width = level + "%";
            if(level < 30){
                batteryLevel.className = "low";
            }
            else if(level<90){
                batteryLevel.className = "medium";
            }
            else{
                batteryLevel.className = "";
            }
        }
        updateBatteryStatus();
        battery.addEventListener("levelchange" ,function(){
            updateBatteryStatus();
        });
        battery.addEventListener("chargingchange",function(){
            updateBatteryStatus();
        })
    })

    
}