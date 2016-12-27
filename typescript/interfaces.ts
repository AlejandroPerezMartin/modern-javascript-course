
/**
 * Interfaces
 */
interface BakedGood {
    sugar: number;
    name: string;

    bake(mins: number): string;

    icing?: boolean; // ? -> optional
}

const cake: BakedGood = {
    sugar: 23,
    name: "Cherry cake",
    bake(min: number) {
        return `will be done in ${min} minutes...`;
    }
};
