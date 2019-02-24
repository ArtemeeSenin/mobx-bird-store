import { observable, action, computed } from 'mobx';

class BirdStore {
    @observable birds = [];

    @action addBird = bird => {
        this.birds.push(bird);
    };

    @computed get birdCount() {
        return this.birds.length;
    }

}

/* To have only one store it is needed to create an object of it */
const store = new BirdStore();
export default store;
