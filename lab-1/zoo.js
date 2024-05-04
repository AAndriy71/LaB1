// Клас тварини
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

// Клас виду тварин
class Species {
    constructor(name, classification) {
        this.name = name;
        this.classification = classification;
    }
}

// Клас вольєру
class Enclosure {
    constructor(type, size) {
        this.type = type;
        this.size = size;
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    removeAnimal(animal) {
        this.animals = this.animals.filter(a => a !== animal);
    }
}

// Клас корму для тварин
class Food {
    constructor(type, quantity) {
        this.type = type;
        this.quantity = quantity;
    }
}

// Клас працівника зоопарку
class ZooKeeper {
    constructor(name, specialization) {
        this.name = name;
        this.specialization = specialization;
    }

    feedAnimal(animal, food) {
        console.log(`${this.name} годує ${animal.name} з ${food.type}`);
    }
}

// Клас акваріуму
class Aquarium extends Enclosure {
    constructor(type, size, waterType) {
        super(type, size);
        this.waterType = waterType;
    }
}

// Клас пташиного вольєру
class Aviary extends Enclosure {
    constructor(type, size, climate) {
        super(type, size);
        this.climate = climate;
    }
}

// Клас корму для риб
class FishFood extends Food {
    constructor(type, quantity, fishType) {
        super(type, quantity);
        this.fishType = fishType;
    }
}

// Клас ветеринара
class Veterinarian extends ZooKeeper {
    constructor(name, specialization, experienceYears) {
        super(name, specialization);
        this.experienceYears = experienceYears;
    }

    treatAnimal(animal) {
        console.log(`${this.name} лікує ${animal.name}`);
    }
}

// Приклад використання
const dolphinSpecies = new Species("Дельфін", "Ссавці");
const dolphin = new Animal("Фліппер", dolphinSpecies);
const dolphinTank = new Aquarium("Акваріум для дельфінів", "великий", "солонувата вода");
dolphinTank.addAnimal(dolphin);

const fishFood = new FishFood("Риба", "1 кг", "Дельфіни");
const maria = new ZooKeeper("Марія", "Морські тварини");
maria.feedAnimal(dolphin, fishFood);

const avianEnclosure = new Aviary("Вольєр для птахів", "середній", "теплий");
const eagleSpecies = new Species("Орел", "Птахи");
const eagle = new Animal("Шершень", eagleSpecies);
avianEnclosure.addAnimal(eagle);

const vet = new Veterinarian("Доктор Сміт", "Риби та птахи", 10);
vet.treatAnimal(dolphin);
// Клас інвентаризації
class Inventory {
    constructor(zoo) {
        this.zoo = zoo;
    }

    displayAnimalInfo() {
        console.log("Інформація про тварин:");
        this.zoo.enclosures.forEach(enclosure => {
            enclosure.animals.forEach(animal => {
                console.log(`- ${animal.name} (${animal.species.name})`);
            });
        });
    }

    displayStaffInfo() {
        console.log("Інформація про співробітників:");
        this.zoo.staff.forEach(staffMember => {
            console.log(`- ${staffMember.name}, ${staffMember.specialization}`);
        });
    }

    displayEnclosureInfo() {
        console.log("Інформація про вольєри:");
        this.zoo.enclosures.forEach(enclosure => {
            console.log(`- ${enclosure.type}, ${enclosure.size}`);
        });
    }
}

// Клас зоопарку
class Zoo {
    constructor() {
        this.enclosures = [];
        this.staff = [];
    }

    addEnclosure(enclosure) {
        this.enclosures.push(enclosure);
    }

    addStaff(staffMember) {
        this.staff.push(staffMember);
    }
}

// Приклад використання
const zoo = new Zoo();
zoo.addEnclosure(dolphinTank);
zoo.addEnclosure(avianEnclosure);
const feeder = new ZooKeeper("Олег", "Риби та птахи");
zoo.addStaff(maria);
zoo.addStaff(vet);
zoo.addStaff(feeder);

const inventory = new Inventory(zoo);
inventory.displayAnimalInfo();
inventory.displayStaffInfo();
inventory.displayEnclosureInfo();
