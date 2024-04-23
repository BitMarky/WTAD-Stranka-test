
    document.getElementById("carType").addEventListener("change", function() {
        var carType = this.value;
        var carBrandSelect = document.getElementById("carBrand");
        var carModelSelect = document.getElementById("carModel");
        var carInfoParagraph = document.getElementById("carInfo");
        carBrandSelect.innerHTML = ""; 
        carModelSelect.innerHTML = ""; 

        var brands = [];
        var models = [];
        var infos = [];

        switch(carType) {
            case "Luxury":
                brands = ["BMW", "Mercedes-Benz", "Lexus", "Audi"];
                models = [
                    ["3 Series", "5 Series", "7 Series", "X5", "X7"],
                    ["C-Class", "E-Class", "S-Class", "GLE", "GLS"],
                    ["ES", "GS", "LS", "RX", "NX"],
                    ["A3", "A4", "A6", "Q5", "Q7"]
                ];
                infos = [
                    ["BMW 3 Series is a compact executive car.", "BMW 5 Series is a mid-size executive car.", "BMW 7 Series is a full-size luxury sedan.", "BMW X5 is a mid-size luxury SUV.", "BMW X7 is a full-size luxury SUV."],
                    ["Mercedes-Benz C-Class is a compact executive car.", "Mercedes-Benz E-Class is an executive car.", "Mercedes-Benz S-Class is a full-size luxury sedan.", "Mercedes-Benz GLE is a mid-size luxury SUV.", "Mercedes-Benz GLS is a full-size luxury SUV."],
                    ["Lexus ES is a mid-size luxury sedan.", "Lexus GS is an executive car.", "Lexus LS is a full-size luxury sedan.", "Lexus RX is a mid-size luxury SUV.", "Lexus NX is a compact luxury crossover SUV."],
                    ["Audi A3 is a small family or compact executive car.", "Audi A4 is a compact executive car.", "Audi A6 is an executive car.", "Audi Q5 is a compact luxury crossover SUV.", "Audi Q7 is a full-size luxury SUV."]
                ];
                break;
            case "Off-road":
                brands = ["Jeep", "Land Rover", "Toyota", "Ford"];
                models = [
                    ["Wrangler", "Cherokee", "Grand Cherokee"],
                    ["Discovery", "Range Rover", "Defender"],
                    ["Land Cruiser", "4Runner", "Tacoma"],
                    ["Bronco", "Explorer", "Ranger"]
                ];
                infos = [
                    ["Jeep Wrangler is a compact and mid-size four-wheel drive off-road and sport utility vehicle.", "Jeep Cherokee is a line of compact and mid-size SUVs.", "Jeep Grand Cherokee is a mid-size SUV produced by the American manufacturer Jeep."],
                    ["Land Rover Discovery is a series of mid-size luxury SUVs.", "Land Rover Range Rover is a luxury SUV.", "Land Rover Defender is a model of off-road vehicle produced under this name by the British manufacturer."],
                    ["Toyota Land Cruiser is a series of four-wheel drive vehicles produced by the Japanese automobile manufacturer Toyota.", "Toyota 4Runner is a compact, later mid-size SUV.", "Toyota Tacoma is a pickup truck manufactured in the U.S. by the Japanese automobile manufacturer Toyota."],
                    ["Ford Bronco is a model line of sport utility vehicles manufactured and marketed by Ford.", "Ford Explorer is a range of SUVs manufactured by Ford Motor Company.", "Ford Ranger is a range of pickup trucks manufactured and marketed by Ford in North and South America."]
                ];
                break;
            case "Muscle":
                brands = ["Ford", "Chevrolet", "Dodge", "Pontiac"];
                models = [
                    ["Mustang", "GT", "Shelby GT500"],
                    ["Camaro", "Corvette", "Chevelle"],
                    ["Challenger", "Charger", "Viper"],
                    ["GTO", "Firebird"]
                ];
                infos = [
                    ["Ford Mustang is an American car manufactured by Ford.", "Ford GT is a mid-engine two-seater sports car.", "Shelby GT500 is a high-performance variant of the Ford Mustang."],
                    ["Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet.", "Chevrolet Corvette is a line of two-door, two-passenger sports cars.", "Chevrolet Chevelle is a mid-sized automobile which was produced by Chevrolet."],
                    ["Dodge Challenger is the name of three different generations of automobiles.", "Dodge Charger is a model of automobile marketed by Dodge.", "Dodge Viper is a sports car manufactured by Dodge."],
                    ["Pontiac GTO is an American automobile manufactured by Pontiac.", "Pontiac Firebird is an American automobile built by Pontiac from the 1967 to the 2002 model years."]
                ];
                break;
            case "Sport":
                brands = ["Ferrari", "Porsche", "Lamborghini", "McLaren"];
                models = [
                    ["488 GTB", "812 Superfast", "SF90 Stradale"],
                    ["911", "Cayman", "Panamera"],
                    ["Aventador", "Huracan", "Urus"],
                    ["570S", "720S", "GT"]
                ];
                infos = [
                    ["Ferrari 488 GTB is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari.", "Ferrari 812 Superfast is a grand tourer produced by Italian automobile manufacturer Ferrari.", "Ferrari SF90 Stradale is a mid-engine PHEV (Plug-in Hybrid electric vehicle) sports car."],
                    ["Porsche 911 is a two-door, 2+2 high performance rear-engined sports car.", "Porsche Cayman is a rear mid-engine, rear-wheel-drive 2-door 2-passenger high performance sports car.", "Porsche Panamera is a full-sized luxury vehicle (F-segment in Europe) manufactured by the German automobile manufacturer Porsche."],
                    ["Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini.", "Lamborghini Huracan is a sports car manufactured by Italian automotive manufacturer Lamborghini.", "Lamborghini Urus is a high-performance SUV manufactured by Italian automobile manufacturer Lamborghini."],
                    ["McLaren 570S is a sports car designed and manufactured by British car manufacturer McLaren Automotive.", "McLaren 720S is a sports car designed and manufactured by British automobile manufacturer McLaren Automotive.", "McLaren GT is a sports car manufactured by McLaren Automotive."]
                ];
                break;
            default:
                break;
        }

        
        brands.forEach(function(brand, index) {
            var option = document.createElement("option");
            option.text = brand;
            option.value = brand;
            carBrandSelect.add(option);

            
            option.addEventListener("click", function() {
                var selectedModels = models[index];
                var selectedInfos = infos[index];
                carModelSelect.innerHTML = ""; 
                carInfoParagraph.innerText = ""; 

                selectedModels.forEach(function(model, idx) {
                    var modelOption = document.createElement("option");
                    modelOption.text = model;
                    modelOption.value = model;
                    carModelSelect.add(modelOption);

                    
                    modelOption.addEventListener("click", function() {
                        carInfoParagraph.innerText = selectedInfos[idx];
                    });
                });
            });
        });
    });

