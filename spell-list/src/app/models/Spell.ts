export default class Spell {
    static lastId: number = 4;

    id: number;
    name: string;
    level: number;
    school: string;
    castingTime: string;
    range: string;
    components: string;
    duration: string;
    description: string;
    prepared: boolean;

    constructor(
        name: string,
        level: number = 0,
        school: string,
        castingTime: string,
        range: string,
        components: string,
        duration: string,
        description: string,
        prepared: boolean = false){
            this.name = name;
            this.level = level;
            this.school = school;
            this.castingTime = castingTime;
            this.range = range;
            this.components = components;
            this.duration = duration;
            this.description = description;
            this.prepared = prepared;
        this.id = Spell.updateLastId();
    }

    static updateLastId(id?: number): number {
        return ++this.lastId;
      }
}